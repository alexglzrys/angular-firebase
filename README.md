# GameOfTheYear

## Subir aplicación a Firebase Hosting

- Empaquetar nuestra aplicación de angular para producción
```
ng build --configuration production
```
- Crear aplicación en Firebase
- Instalar el Firebase CLI (si ya tenemos el comando firebase, no es necesario)
- Ejecutar los siguientes comandos
```
firebase login
firebase init
```
- Seleccionar el proyecto en Firebase
- Indicar que el directorio publico es lo que angular generó como paquete de producción
```
./dist/nombre-del-proyecto-angular
```
- Angular de por si genera proyectos SPA, por tanto no es necesario que firebase gestione el router
- Si pide sobre-escribir el archivo index.html **indicar que no**
- una vez que termine de configurar, es necesario deployarlo para subirlo al hosting
```
firebase deploy
```

