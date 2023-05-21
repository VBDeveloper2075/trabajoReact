
import { Router } from 'express';
var router = Router();
import { getNovedades, insertNovedad } from '../../models/novedadesModel';

/* GET home page. para listar las novedades */
router.get('/', async function (req, res, next) {

  var novedades = await getNovedades();

      res.render('admin/novedades', {  //login.hbs
        layout:'admin/layout',   //layout.hbs
        usuario: req.session.usuario,
        novedades
  });
});

router.post('/agregar', async (req,res,next) => {
  try{
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await insertNovedad (req.body);
      res.redirect('/admin/novedades')
    } else{
        res.render('admin/agregar', {
          layout: 'admin/layout',
          error: true, message: 'Todos los campos son requeridos'
        })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar',{
      layout:'admin/layout',
      error: true, message:'no se cargó la novedad'
    });
  }
  });

router.get('/agregar', (req,res,next) => {
        res.render('admin/agregar', {
          layout: 'admin/layout'
        });
  });

export default router;