import express from 'express';
import { signup } from '../component/signup.js';
import { login } from '../component/login.js';

const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({ meassage: "working" });
})
router.post('/signup', signup)
router.post('/login', login)



export const RouterPage = router