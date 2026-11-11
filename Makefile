LOCAL_COMPOSE = docker compose -f docker-compose.yml -f docker-compose.local.yml

docker-up:
	$(LOCAL_COMPOSE) up -d --build --wait web

docker-down:
	$(LOCAL_COMPOSE) down

docker-reset: docker-down docker-up

dev: docker-up
	npm start

deploy:
	git push origin main:release
