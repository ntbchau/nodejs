
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';

const app = express();

require('dotenv').config();

const port = process.env.PORT;

configViewEngine(app);

initWebRoute(app);




app.listen(port, () => {
    console.log(`First app is running in port ${port}`);
})   