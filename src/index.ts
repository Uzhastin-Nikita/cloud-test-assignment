import bodyParser from 'body-parser';
import express from 'express';

export const runServer = async () => {
    const app = express();
    
    app.use(bodyParser.json());
    
    app.get('/api', (req, res) => {
        res.send('Hello World!');
    });
    
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
    }

runServer();
