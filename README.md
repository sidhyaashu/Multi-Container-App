# Multi-Container-App
Using Docker and Kubernetes with minikube

# MULTI CONTAINER APP
0. Create network:
```bash
docker network create my-net
```
1. Pull docker mongo image:
```bash 
docker pull mongo
```
2. To run mongodb:
```bash
docker run -it --network my-net --rm mongo mongosh --host mongo database
docker run --name mongo-container --network my-net -d mongo
```
3. Run own server image
```bash
docker run --network my-net -p 3000:3000 --name mongo-server sidhyaasutosh/mongo-server:<tag>
```