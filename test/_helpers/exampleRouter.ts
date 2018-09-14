import * as express from 'express';
import { Router } from 'express-serve-static-core';

const router: Router = express.Router();

router.get('/home', (req, res) => {
    res.send('Welcome Home');
});

export default router;
