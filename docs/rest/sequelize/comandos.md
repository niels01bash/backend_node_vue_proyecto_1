# Comandos sequelize CLI
# Modelos y migraciones
### Gererar un modelo + Migraciones
```
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
``` 
### generar migraciones
```
npx sequelize-cli db:migrate
```
### Rollback (revertir migraciones)
```
npx sequelize-cli db:migrate:undo
```