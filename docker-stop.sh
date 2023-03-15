docker compose -f ./docker-compose/docker-compose.yml\
    -f  ./docker-compose/services/docker-compose.nginx.yml \
    -f  ./docker-compose/services/docker-compose.database.yml \
    -f  ./docker-compose/services/docker-compose.frontend.yml \
    -f  ./docker-compose/services/docker-compose.backend.yml down