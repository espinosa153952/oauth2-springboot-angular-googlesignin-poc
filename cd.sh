#!/bin/bash

# Descargar el proyecto nuevo
git pull
mkdir -p authorization-server/src/main/resources resource-server/src/main/resources ag-prueba-front/src/environments

# Copiar la configuración a resource-server
cp configs/resource-server/application.properties oauth2-springboot-angular-googlesignin-poc/resource-server/src/main/resources/

# Copiar la configuración a authorization-server
cp configs/authorization-server/application.properties oauth2-springboot-angular-googlesignin-poc/authorization-server/src/main/resources/

# Copiar la configuración a ag-prueba-front
cp configs/ag-prueba-front/environment.ts oauth2-springboot-angular-googlesignin-poc/ag-prueba-front/src/environments/

# Ejecutar los dockers
docker-compose down --rmi all -v > /dev/null 2> /dev/null
TIME=`time docker-compose up --force-recreate -d > /dev/null 2> /dev/null`
sleep 30
echo $TIME