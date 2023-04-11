docker build -f Dockerfile.dev .

// -f change build file in this case to Dockerfile.dev

docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app ID

// -p transfer ports
// -v used file in local maschine not a container used just for dev

test use compose
docker-compose up --build
docker ps => ID
docker exec -it ID npm run test
