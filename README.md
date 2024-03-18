### gRPC NestJS Microservices

A sample demo project witten on NestJS framework with 2 services and an api-gateway to demonstrate the gRPC use case.


In this project, we have 3 services running,
    - api-gateway
        - This service works as a proxy server. It is a HTTP server which exposes REST endpoints. This is the service which will be accessed from webapp or other clients.

    - grpc-service-orders
    - grpc-service-users


### Quickstart

- Clone the repo and do `npm install`.

- Install `protoc` to your system. [guide](https://grpc.io/docs/protoc-installation/)

- Run the 
### Commands

- To generate `.ts` files under `libs/common/src/types/` for each of the `.proto files` inside `libs/common/src/proto/`. Here, `ts-proto` package is used.
    ```
    protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./libs/common/src/types --ts_proto_opt=nestJs=true --proto_path=./libs/common/src/proto/ ./libs/common/src/proto/*.proto
    ```

- To generate resources files for an entity
    ```
    nest g resource users
    ```