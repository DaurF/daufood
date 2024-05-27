import express from 'express'
import {httpGetUser} from "./users.controller.js";

const router = express.Router()

router.get('/:id', httpGetUser)

export default router;
