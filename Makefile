docker-up:
	docker compose up -d --wait

docker-down:
	docker compose down -v

docker-reset: docker-down docker-up

dev: docker-up 
	npm start

deploy:
	git push origin main:release