import { Router } from 'express';

import * as UserController from '../controllers/user.controller';

const routes = Router();

routes.get('/users', UserController.getAll);
routes.post('/users', UserController.create);

routes.get('/users/:id', UserController.getOne);
routes.put('/users/:id', UserController.update);

export { routes };
