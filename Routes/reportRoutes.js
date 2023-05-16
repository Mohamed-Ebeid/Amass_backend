import express from 'express';

import {make} from '../Controllers/reportController.js';
import {isAuth, isAdmin} from '../utils.js';

const reportRouter = express.Router();

reportRouter.post("/", isAuth, isAdmin, make);

export default reportRouter;