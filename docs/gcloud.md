### Install gcloud
```bash
brew cask install google-cloud-sdk
```

### Login to gcloud
```bash
gcloud auth login
// make sure same account as the one you use for google cloud
```

### Init the gcloud project
```bash
gcloud init
// select the project you want to use
```

## Run with Docker
### install plugin
```bash
gcloud components install gke-gcloud-auth-plugin
```

### run gcloud container cluster
```bash
gcloud container clusters get-credentials ticketing-dev 
```
Tips: after this command, under docker(topbar icon) -> kubernetes -> 
you can see the cluster in your kubernetes cluster list
* Local cluster: Docker-desktop
* Gcloud cluster: ticketing-dev


## Steps to setup the cluster in google cloud
1. enable Google Cloud Build API (under CI/CD)
2. Update the skaffold.yaml ot use Google CLoud build
3. Setup ingress-nginx on our google cloud cluster
    ```bash
    kubernetes.github.io/ingress-nginx
   // install ingress-nginx
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml
   
   // install for google cloud
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml
    ```
4. Update our hosts file again to point to the remote cluster
    ```bash
    // get the external ip of ingress-nginx-controller
    kubectl get svc -n ingress-nginx
   
    // update hosts file
    sudo vim /etc/hosts
    // add the external ip to the hosts file
5. Restart skaffold
