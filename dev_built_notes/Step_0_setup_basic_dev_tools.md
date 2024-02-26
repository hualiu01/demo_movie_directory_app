# Step 0: Setup basic dev tools

Get familiar with and install the following lang/tool/libs.

## Lang

- JS 
  - syntax
    - MDN ref: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export 

- TypeScript
  - An online playground: [typescriptlang.org/play](https://www.typescriptlang.org/play)
  - [[typescriptlang.org] The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## Node Tool

__[Node.js](https://nodejs.org/en/about)__ `v18.18.2`

Built on Google's V8 engine, written in C, C++, JS

Node.js is used to develop both frontend and backend with a single unified stack.

It's an __asynchronous event-driven JavaScript runtime for executing JavaScript code outside of a browser, specifically, server-side execution of JS__. 

It's __not a framework__. But rather, Node.js is designed to build scalable network applications. 

In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.
```
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Its asynchronous nature equips it to __handle concurrent requests without blocking the I/O operations__. Most development teams prefer Node.js to use JavaScript on both clients and server-side.

learn more about nodeJS at 
- `nodejs.org`[Introduction to Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- `nodejs.org`[About Node.js®](https://nodejs.org/en/about)

__NVM__ `0.39.5`

NVM stands for Node Version Manager, and as the name implies, it helps you __manage your Node Versions__. With NVM, you can install Node versions and specify the version of Node that a project uses.

NVM source repo: https://github.com/nvm-sh 
Install nvm: https://github.com/nvm-sh/nvm#installing-and-updating 

### Node Package Managers and Package runners

__NPM__ `10.2.1`

Node package manager. Like pip to python.

__YARN__ [No need to set up for this project]

Alternative package manager to npm. 

__NPX__

NPX stands for Node Package eXecute. It is simply an __NPM package runner__. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2. 0 and above.

### Node frameworks and libs

__React__

The JS __library__ for web and native user interfaces

Using JS to update HTML =>  _Imperative programming_: You’re writing the steps for how the user interface should be updated.
Using React to update HTML => _Declarative programming_: As a developer, you can tell React what you want to happen to the user interface, and React will figure out the steps of how to update the DOM on your behalf.


__Next.js__ [No need to set up for this project]

Next.js is a __full-stack React framework__. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations


__Express.js__
built on Node.js, written in JS
It's a small __framework sits on top of Node.js to build web-apps__ using approaches and principles of Node JS. 

Its purpose is to simplify NodeJS's APIs and add helpful new features. Specifically:
  -  It makes it easier to organize your application’s functionality with __middleware and routing__(Node.js does not provide middleware or routing or controllers); 
  -  It adds helpful __utilities to Node JS’s HTTP objects__; 
  -  It facilitates the __rendering of dynamic HTTP objects__.

## Iac Tool

- Terraform
  - [Install terraform](https://developer.hashicorp.com/terraform/tutorials/docker-get-started/install-cli)
    ```
    brew tap hashicorp/tap
    brew install hashicorp/tap/terraform

    brew update
    brew upgrade hashicorp/tap/terraform
    ```
  - Check installation on 2023 Dec 17th:
    ```
    > terraform --version
    Terraform v1.6.6
    on darwin_amd64
    ```

    ```
    terraform -help
    terraform -help plan
    ```


## Build Tool

- Docker
  - [Install and run Docker Desktop on Mac](https://docs.docker.com/desktop/install/mac-install/#install-and-run-docker-desktop-on-mac)
  - Signed up a docker account with GitHub
    ```
    docker --version
    Docker version 24.0.7, build afdd53b
    ```
    ```
    docker-compose --version
    Docker Compose version v2.23.3-desktop.2
    ```
  - [Explore Docker Desktop](https://docs.docker.com/desktop/use-desktop/)
  - [Getting started guide](https://docs.docker.com/get-started/)



