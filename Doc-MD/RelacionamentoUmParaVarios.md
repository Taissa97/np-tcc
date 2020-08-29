# Relacionamento *_* (Varios para varios) 
Um carro tem varios modelos
Um modelo esta relacionado somente a um carro
## Carro
![Screenshot_1](https://user-images.githubusercontent.com/43249105/91628881-74adbd00-e99a-11ea-84de-21e85f79fff4.png)
## Modelo
![Screenshot_3](https://user-images.githubusercontent.com/43249105/91628921-c9513800-e99a-11ea-9cb5-9dcb50bbc491.png)
# hasMany
Como criar:
```javaScript
      this.belongsToMany(models.nomedaclasse)
```     
Exemplo:
Um carro tem muitos modelos
```javaScript
    static associate(models) {
      this.hasMany(models.Modelo)
    }
```
Determinado modelo pertence a somente um carro
```javaScript
    static associate(models) {
      this.belongsTo(models.Carro)
      }
```