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


# Use Kubernates

1. Run Multiple container in same pods
2. Run Each container in seperated pod

- Configure Deployment and service yml
- Check minikube is running or not if not then first start minikube

# NEXT
1. Run deployment
```bash
kubectl apply -f deployment.yml
```
2. Run service
```bash
kubectl apply -f deployment.yml
```
3. Services
```bash
minikube service <service_name>
```