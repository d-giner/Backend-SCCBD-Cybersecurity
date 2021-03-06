import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/routes_ttp';

export function startTtp() {
    // Inicializaciones
    const app = express();

    // Settings
    app.set('port', process.env.PORT || 3000);

    // Middlewares (módulos útiles)
    app.use(morgan('dev'));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Routes
    app.use('/ttp', indexRoutes);


    // Arrancar el servidor
    app.listen(app.get('port'), () => {
        console.log(`TTP escuchando por el puerto ${app.get('port')}`);
    });
}