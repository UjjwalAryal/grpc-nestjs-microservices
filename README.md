### gRPC NestJS Microservices

A sample demo project witten on NestJS framework with 2 services and an api-gateway to demonstrate the gRPC use case.


In this project, we have 3 services running,
    - api-gateway
        - This service works as a proxy server. It is a HTTP server which exposes REST endpoints. This is the service which will be accessed from webapp or other clients.

    - grpc-service-orders
    - grpc-service-users



nest g resource users
    

ts-proto
    - allow generate Typescript code from our porotobuf definitions;
    - helps save a lot of time

@grpc/grpc-js

@grpc/proto-loader

number in the proto file represents the order of them



protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./libs/common/src/proto/orders.proto

    - to generate users.ts file
    - interface for users, dtos, methods that controllers will implement