# Relacionamento *_* (Varios para varios) 
Um carro tem muitas cores
Uma cor pode existir em varios carros
## Carro
![Screenshot_1](https://user-images.githubusercontent.com/43249105/91625207-cb57ce80-e97b-11ea-9583-a40cad516c32.png)

## Cor
![Screenshot_2](https://user-images.githubusercontent.com/43249105/91625208-cbf06500-e97b-11ea-9fa5-c8b3b3cd2c5b.png)
# belongsToMany
Como criar:
```javaScript
      this.belongsToMany(models.nomedaclass,{through:'nome da classe de junção sem espaço'})
```
      
Exemplo:
```javaScript
    static associate(models) {
      this.belongsToMany(models.Carro,{through:'Carro_Cor'})
    }
```

Explicação:
      Isso informa ao sequelize que um **carro** pertence a varias **cores** atraves do atributo **through** este atributo é referente a tabela de junção.
