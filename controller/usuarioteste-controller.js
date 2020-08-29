
const db = require('../models/index').Usuario;
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const Usuario = require('../models/usuario')
exports.getAllUsuarioTeste = async(req,res)=>{
    await db.sync({force:true}).then(r=>{
        console.log(r)}).catch(c=>{console.log(c)})
//   await db.findAll({})
//     .then(user=>{
//         res.send(user);
//     }).catch(err => {
//         res.status(500).send({
//             mensagem: "Ouve um erro ao tentar efetuar a consulta na tabela de usuariosTeste"
//         });
//       });
}
exports.getUsuarioTestPorPk= async(req,res)=>{
    const {id}= req.params// atribuição via desestruturação https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao
    await db.findByPk(id).then(user=>{
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            mensagem: "Ouve um erro ao tentar efetuar a consulta na tabela de usuariosTeste"
        });
      });
}
exports.updateUsuarioTeste =  async (req,res)=>{
    const {id} = req.params; 
    await db.update(req.body,{
        where:{id:id}
    }).then(resultado=>{
        resultado==1?res.send({mensagem:"Update efetuado com sucesso"}):res.send({mensagem:"Não foi possivel efetuar o update no indentificador informado"})
    })

}
exports.deleteUsuarioTestePorId = async(req, res)=>{ /// usuado so como exemplo evite deletar dados do banco apenas desative
    const {id} = req.params;
    await db.destroy({
        where:{id:id},
        truncate:false
    }).then(resultado=>{
        if(resultado===1)
        res.send({mensagem:'Deletado com sucesso!'})
    }).catch(err=>{
        res.send({mensagem:'Erro ao tentar deletar.',error:true})
    })
}
exports.insertUsuarioTeste = async(req,res)=>{
    const{body} = req;// caso o objeto venha motado do front-end exatamente como é necessario para inserção
    // db.create(body)
    //caso contrario
    db.create(
        {
            primeiroNome:body.primeiroNome,
            ultimoNome:body.ultimoNome,
            email:body.email,
            createdAt:Date.now(),
            updateAt:new Date()
        }
    ).then(resultado=>{
        res.send({menssage:'Inserido com sucesso'+resultado})
    }).catch(
        err=>{
            res.status(500).send({
                mensagem: 'Ouve um erro ao tentar inserir esse usuario de teste no banco de dados. >'+err,
                error:true
            })
        }
    )
}
exports.getUsuarioTestePorNome = async(req,res)=>{
    const {nome} = req.params;
   await db.findAll({where:{primeiroNome:nome}}).then(resultado=>{
        res.send(resultado)
   }).
   catch(err=>{
       res.send({mensagem:'Não foi possivel encontrar nenhum usuario com este nome'+err,error:true})
   })
}
exports.getTodosUsuarioTesteSelectQuery = async(req,res)=>{
    const usuarios = await sequelize.query('Select * from usuarios', { type: QueryTypes.SELECT })
     .then(resultado=>{
         res.send(resultado)
     }).catch(error=>{
   res.send(error)
     })
}
exports.getAllUsuarioTesteSemObjetoDefinido = async(req,res)=>{
    const usuarios = await sequelize.query('Select a.seilaoq , u.nome from usuarios u inner join seilaoq a on a.id = u.id',{ //esta query é meramente um exemplo
        plain:true,//se tiver true vai trazer so o primeiro caso falso traz a porra toda
        raw:true, // se você nao tem um objeto pre definido isso aqui tranforma em json
        type:QueryTypes.SELECT // informa o tipo de query que voce esta execultando
    })///... resto da promisse
}

///promisse https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
