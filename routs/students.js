import { Router } from 'express';
import { students } from '../array/studentsarray.js';
const router = new Router();
router.get('/', (req, res) => {
    res.render('students', { students });
});
export default router;