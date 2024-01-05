import expres from 'express';
import { getProducts } from '../controllers/controllers';

const router = expres.Router();

router.get('/', getProducts);