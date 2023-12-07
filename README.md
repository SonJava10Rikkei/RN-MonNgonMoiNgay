

# Getting Started


## Step 1: Start the Metro Server


```bash
#Install framework
npm install

# go to set up back-end
Select online or offline path:
file App.axiosClient.js
const axiosClient = axios.create({
    // baseURL: 'http://mon-973767c9f0f6.herokuapp.com/api', //online
    baseURL: 'http://192.168.9.104:3000/api/', //offline
    headers: {
        'Content-Type': 'application/json',
    },
});
```

## Step 2: Start your Application
```
# using npm
npm start

# OR using Yarn
yarn start
# using npm
npm run android

# OR using Yarn
yarn android
```

