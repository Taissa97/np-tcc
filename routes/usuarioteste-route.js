var express = require('express');
const userController = require('../controller/usuarioteste-controller')
var router = express.Router();

router.get('/',userController.getAllUsuarioTeste);
router.get('/getbypk/:id',userController.getUsuarioTestPorPk);
router.put('/:id',userController.updateUsuarioTeste);
router.delete('/:id',userController.deleteUsuarioTestePorId);
router.post('/',userController.insertUsuarioTeste);
router.get('/getbyname/:nome',userController.getUsuarioTestePorNome);
router.get('/comquery',userController.getTodosUsuarioTesteSelectQuery);

module.exports = router
