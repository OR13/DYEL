# DO YOU EVEN LIFT?

###### A promise based client for the [Atlas API](https://api.atlaswearables.com/api/docs/v1/).

## Get Started

```

git clone git@github.com:OR13/DYEL.git

cd DYEL

npm install

npm test

```

## Configuration

The client can be initialized from env variables:

```
dyel.init();
```

or equivalently with a config object:

```
var config = {
    api_root: process.env.ATLAS_WEARABLES_API_ROOT,
    credentials: {
        api_sid: process.env.ATLAS_WEARABLES_SID,
        api_secret: process.env.ATLAS_WEARABLES_SECRET,
        username: process.env.ATLAS_WEARABLES_USERNAME,
        password: process.env.ATLAS_WEARABLES_PASSWORD
    }
}

dyel.init(config);
```
