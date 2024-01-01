# protobuf

Ref:
https://www.youtube.com/watch?v=46O73On0gyI&

https://chat.openai.com/share/da1c1dc5-37dc-4b63-aada-f5bcd3972d86


run below command

> npm install -g protoc-gen-js

Run below command. Dont forget to use the right path of protoc.exe or protoc
> D:\software\protoc-25.1-win64\bin\protoc.exe --proto_path=. --js_out=import_style=commonjs,binary:. protobuf-quickstart.proto

This sould generate a protobuf-quickstart_pb.js. Include this file where we want to serialise or deserialise.

install "google-protobuf" package.
> npm i google-protobuf

run index.js file. (Debug -> Start Debugging). Default debugger in vscode is setup to debug index.js files. 




