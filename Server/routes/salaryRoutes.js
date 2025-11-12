import express from 'express';
import { getSalaries, createSalary } from '../controllers/salaryController.js';

const router = express.Router();

router.get('/', getSalaries);
router.post('/', createSalary);

export default router;
