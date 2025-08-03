import express from 'express'
import { Router } from 'express'
import { submitForm, getDetails } from '../controller/applicationController.js'
import auth from '../middleware/auth.js'

const router = Router();

router.post('/', submitForm)
router.get('/', auth, getDetails)

export default router;
