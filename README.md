Run the redis server (redis stack with both server and the ui management) before running the node server. Cool 
-Redis for caching and can also be used as pub/sub to pass realtime data to other servers in a scaled system like multiple socket servers 
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

