# comandos  sequelize CLI
## Modelos y Migraciones
### Generar un modelo + Migraciones
```
npx sequelize-cli model:generate --name User --atributes name:string,email:string,password:string
```
### generar migraciones
```
npx sequelize-cli db:migrate
```
### rollback (revertir migraciones)
```
npx sequelize-cli db:migrate:undo
```