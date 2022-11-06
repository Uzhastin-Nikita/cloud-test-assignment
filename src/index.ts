import bodyParser from 'body-parser';
import express from 'express';

import configRoutes from './api/configRoutes';

const urlencodedParser = bodyParser.urlencoded({ extended: false });

export const runServer = async () => {
    const app = express();
    app.use('/', configRoutes);
    app.use(bodyParser.json());

    
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
    }

runServer();
