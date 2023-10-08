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