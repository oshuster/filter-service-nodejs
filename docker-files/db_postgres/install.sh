#!/bin/bash

#docker network inspect rscore-net --format {{.Name}} >/dev/null 2>&1 || docker network create rscore-net
docker compose -f ./01_database.yml up -d


