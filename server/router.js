import express from 'express';
import Controller from './controller.js';

const Router = express.Router;

const router = Router();

router.post('/application', Controller.sendApplication)

export default router