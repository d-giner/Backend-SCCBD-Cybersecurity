import {Router, Request} from 'express';
import {cryptoService} from '../services/cryptoService';
import { ttpService } from '../services/ttpService';

const routerTtp: Router = Router();

/* TTP Routes */
routerTtp.post('/iv', ttpService.postIv);

routerTtp.get('/prueba', cryptoService.getPrueba);

export default routerTtp;