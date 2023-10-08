### Init the auth server
```terminal
npm init -y
npm install typescript ts-node-dev express @types/express
tsc --init
```

### If you do not see server restart after changing the index.ts
update the start script in package.json  
```ts-node-dev --poll src/index.ts```

### Issue with ingress-nginx
1. turn off skaffold
2. reinstall ingress-nginx
   ```kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml```

Tips: Any other issues can be found here:
https://kubernetes.github.io/ingress-nginx/deploy/

### How to run with skaffold
```skaffold dev```

