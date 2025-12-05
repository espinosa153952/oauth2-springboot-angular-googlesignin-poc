main:
	docker-compose up --force-recreate -d

clean:
	docker-compose down --rmi all -v

resourceServerLogs:
	docker logs resource-server

authorizationServerLogs:
	docker logs authorization-server

agPruebaFrontLogs:
	docker logs ag-prueba-front

resourceServerBash:
	docker exec -it resource-server /bin/bash

authorizationServerBash:
	docker exec -it authorization-server /bin/bash

agPruebaFrontBash:
	docker exec -it ag-prueba-front /bin/bash
