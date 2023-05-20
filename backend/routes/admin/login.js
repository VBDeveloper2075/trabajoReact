var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login',{  //login.hbs
    layout:'admin/layout'   //layout.hbs
  });
});

router.post('/', async (req,res,next) => {
  try{
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data= await usuariosModel.getUserByUsernameAndPassword(usuario,password);
    console.log(data)
    if (data != undefined) {
      res.redirect('/admin/novedades');
    } else{
      console.log("jksdhjdshkjdsf")
      res.render('admin/login',{
        layout: 'admin/layout',
        error:true
      });
    }
  } catch (error) {
    console.log(error);
    console.log("aaaaaaa")

  }
});

module.exports = router;
