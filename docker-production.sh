export API=$1
docker compose -f ./docker-compose/docker-compose.yml \
    -f ./docker-compose/servicesBase/docker-compose.nginx.yml \
    -f ./docker-compose/servicesBase/docker-compose.database.yml \
    -f ./docker-compose/servicesBase/docker-compose.backend.yml \
    -f ./docker-compose/servicesBase/docker-compose.frontend.yml \
    -f ./docker-compose/servicesProduction/docker-compose.frontend.yml up -d --build