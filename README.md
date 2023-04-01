# kubernetes-speed-run

This is a quick guide to get a Kubernetes cluster up and running on your local machine. It is intended to be used as a reference for those who are new to Kubernetes and want to get a cluster up and running quickly. It is not intended to be used in production.

## Prerequisites

- Docker
- MiniKube

## Getting Started

0. Clone this repository
   - `git clone
1. Start MiniKube
   - `minikube start --driver=docker`
2. Change your Docker context to the one used by MiniKube
   - eval $(minikube -p minikube docker-env)
3. Build the Docker image
   - `docker build -t myapp app/.`
4. Create a deployment
   - `kubectl apply -f k8s/deployment.yaml`
5. Create a service
   - `kubectl apply -f k8s/service.yaml`
6. Enable the ingress addon
   - `minikube addons enable ingress`
7. Create an ingress
   - `kubectl apply -f k8s/ingress.yaml`
8. Get the IP address of the ingress
   - `kubectl get ingress` to get the IP address
9. Add the IP address to your hosts file
   - `sudo echo "INGRESS_IP_ADDRESS example.com" >> /etc/hosts`
