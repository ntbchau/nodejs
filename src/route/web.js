import express from 'express';
import homeController from '../controller/homeController'



let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/about', (req, res) => {
        res.send(`I'm Chau`)
    })
    return app.use('/', router);//ko co them tien to gi trc vd: (localhhos:3000/)
}

export default initWebRoute;