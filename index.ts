import express from 'express';
import helmet from 'helmet';

import { config } from './config/conf';
import {router} from './routes/zonesRoutes';
const cors = require('cors');

const IndexApp = express();

IndexApp.set( 'port', process.env.PORT || config.PORT );
IndexApp.use(cors({
    origin: '*'
}));
IndexApp.use(helmet())
        .use(express.json())
        .use(express.urlencoded({ extended: true }));

IndexApp.use('/zones', router);

IndexApp.listen(IndexApp.get('port'), () => {
    console.log(`Node JS Server started at port http://localhost:${IndexApp.get('port')}`);
});