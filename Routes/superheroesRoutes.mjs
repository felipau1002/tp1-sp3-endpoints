import express from 'express';
import { obtenerTodosLosSuperheroesController, crearSuperheroeController, actualizarSuperheroeController, eliminarSuperheroePorIDController, eliminarSuperheroePorNombreController } from '../controllers/superHeroController.mjs';


const router = express.Router();


router.get('/superheroes', obtenerTodosLosSuperheroesController);
router.post('/superheroes', crearSuperheroeController);
router.put('/superheroes/:id/edadactualizada', actualizarSuperheroeController);
router.delete('/superheroes/:id', eliminarSuperheroePorIDController);
router.delete('/superheroes/nombre/:nombre', eliminarSuperheroePorNombreController);


export default router;