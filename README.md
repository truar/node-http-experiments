# node-http-experiments
Experiments regarding node client/server http communications (connection pool, keep alive, ERRCONRESET...)

## Run the server

The server exposes one endpoint to tell time (Date in ISOString)

```
cd node-server
yarn serve
```

## Run the client
The client requests time to server using the http module

```
cd node-client
yarn serve
```