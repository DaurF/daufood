import {httpGetAllDaysOptions} from "./days-options.controller.js";
import express from "express";

const router = express.Router()

router.get('/', httpGetAllDaysOptions);

export default router
