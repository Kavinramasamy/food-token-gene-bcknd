import jwt from 'jsonwebtoken';
import { } from 'dotenv/config.js';

export async function generateToken(value) {
    const token = jwt.sign({ id: value }, process.env.SECRET_KEY, { expiresIn: '6h' })
}