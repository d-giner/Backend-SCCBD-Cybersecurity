import {Router, Request} from 'express';
import { bobService } from '../services/bobService';
import {cryptoService} from '../services/cryptoService';

const routerBob: Router = Router();

/*  Routes of the first scenario. */
routerBob.post('/text', cryptoService.addText);
routerBob.get('/text', cryptoService.getTexts);
routerBob.get('/prueba', cryptoService.getPrueba);


/*  Bob Routes */
routerBob.post('/msg', bobService.postFromAlice);
routerBob.get('/msg', bobService.getIvToDecrypt);
routerBob.post('/iv', bobService.postIvToDecrypt);


export default routerBob;