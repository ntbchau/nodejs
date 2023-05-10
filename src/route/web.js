import express from 'express';
import homeController from '../controller/homeController'



let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/details/user/:id', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.editUser);
    router.post('/update-user', homeController.updateUser);
    router.get('/about', (req, res) => {
        res.send(`I'm Chau`)
    })
    return app.use('/', router);//ko co them tien to gi trc vd: (localhhos:3000/)
}

export default initWebRoute;