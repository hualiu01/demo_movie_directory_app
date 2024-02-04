# Intro

Use typescript, express.js, react.js to build an movie inventories app. And dockerize it. 

# Before Get Started

Get familiar with the following lang/tool/libs.

## Lang

- JS 
  - syntax
    - MDN ref: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export 

- TypeScript
  - An online playground: [typescriptlang.org/play](https://www.typescriptlang.org/play)
  - [[typescriptlang.org] The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## Node Tool

- ___React.js___  
  - It's a __frontend development framework__
- ___[Node.js](https://nodejs.org/en/about)___(built on Google's V8 engine, written in C, C++, JS): 
  - It's an __asynchronous event-driven JavaScript runtime for executing JavaScript code outside of a browser, specifically, server-side execution of JS__. 
  - It's __not a framework__. But rather, Node.js is designed to build scalable network applications. 
  - learn more about nodeJS at 
    - `nodejs.org`[Introduction to Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
    - `nodejs.org`[About Node.js®](https://nodejs.org/en/about)
- ___Express.js___(built on Node.js, written in JS): 
  - It's a small __framework sits on top of Node.js to build web-apps__ using approaches and principles of Node JS. 
  - Its purpose is to simplify NodeJS's APIs and add helpful new features. Specifically:
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



