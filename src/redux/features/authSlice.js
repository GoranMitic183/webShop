import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../API/api"

export const login = createAsyncThunk(
  "auth/login",
  async ({ data, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await API.login(data);
      toast.success("Login Successfully");
      navigate("/profile");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ data, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await API.register(data);
      toast.success("Success!Wellcome!");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },
  extraReducers: 
  {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
    //   localStorage.setItem("user", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
    //   localStorage.setItem("user", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    }
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;