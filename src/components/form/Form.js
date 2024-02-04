import React from "react";
import classes from "./Form.module.css"
const Form = () => {
  return (
    <div>
      <h1>
Enter an address</h1>
      <div>
        <form>
            <input placeholder="First name"></input>
            <input placeholder="Last name"></input>
            <input placeholder="Country/Region"></input>
            <label for="region">Region:</label>
<select name="region" id="region" form="region">
  <option value="Beograd">Beograd</option>
  <option value="Novi Sad">Novi sad</option>
  <option value="Nis">Nis</option>
  <option value="Subotica">Subotica</option>
</select>
<input placeholder="City"></input>
<input placeholder="Zip code"></input>
<input placeholder="Street"></input>
<input placeholder="Number"></input>
<input placeholder="Email"></input>
<label for="note" id="note">Note:</label>
<textarea placeholder="Note (optional)" cols={20} rows={10}></textarea>

<input type="checkbox" name="info" checked></input>
<label for="info">Shipping information is the same as billing information</label>

<input type="checkbox" name="read"></input>
<label for="read">
I have read and agree to the terms of use</label>
<p>
Read the terms of use</p>
        </form>
        <div className={classes.wraperTaster}>
          <div className={classes.taster}>
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
