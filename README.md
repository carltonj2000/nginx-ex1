# Nginx Crash Course

The content of this repository is based on
[The NGINX Crash Course](https://youtu.be/7VAI73roXaY)
video.

```bash
docker compose up
docker exec -it b9 /bin/bash

cd server
docker build . -t carltonj2000/server
docker run -p 3000:3000 -d carltonj2000/server

docker compose down
docker compose up
docker compose restart -t 4
```
