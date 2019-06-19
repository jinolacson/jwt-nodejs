# Simple JWT demonstration
> You will learn how to generate or sign JWT in your application and verify using 'express-jwt' using node.

### Installation
`sudo npm install or just npm install`

### Tools

[Advance Rest Client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo)
[verify created token here](https://jwt.io/)

## Cross-origin resource sharing — CORS

> CORS error can occur if api served in different domains [here is some  article, we explain about cors](https://wanago.io/2018/11/05/cors-cross-origin-resource-sharing/), incase CORS error install below


```
sudo npm install cors

const cors = require("cors");

app.use(cors());
```

### Run

```
node provide-token.js
node verify-token.js
```

## Output using `Advanced REST client`
![Provide token with username and password](/images-output/provide-token.png)

![Unauthorized if no token provided](/images-output/verify-token-no-token-provided.png)

![Authorized users](/images-output/verify-token-authorized.png)
