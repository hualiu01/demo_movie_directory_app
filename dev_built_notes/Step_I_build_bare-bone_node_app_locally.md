# Step I: build bare-bone Node app locally
`http://localhost:3000/`
Tags: `TS`, `ExpressJS`, `ReactJS`

Ref:
- `LogRocket`[ How to set up TypeScript with Node.js and Express](https://blog.logrocket.com/how-to-set-up-node-typescript-express/) [Aman Mittal][2023-11-24]
- `LogRocket`[ Organizing your Express.js project structure for better productivity](https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/) [Geshan Manandhar]

##  Init `package.json`
  - `npm init -y` the --yes or -y flag utilizes the default settings configured by npm, bypassing the repeated questions asking for project details. 
  - Modify `"main": index.json` in `package.json` to point to `src/index.js`

## Install packages `express` and `dotenv`
`npm i express dotenv`
Note: the `DotEnv` package is utilized to read environment variables from the `.env` file. 
- create `src/index.js`.
- Try run it `node src/index.js`
  
## Install TypeScript
`npm i -D typescript @types/express @types/node`
Note: `-D` will make these packages in the `"devDependencies"` section of the `package.json` file.
- Init a `tsconfig.json` by runing `npx tsc --init`. Note: `npx` executes a npm package.
  - Modify `"outDir": "./dist"` in  `tsconfig.json`. And modify `"main": src/index.js` in `package.json` to point to `dist/index.js`. 
  - Modify `"rootDir": "./src"` in  `tsconfig.json`

## [Optional] `ts-node`
Run .ts without compiling and outputing to `./dist`: `npm i -D ts-node & npx ts-node src/index.ts`

## `nodemon` 
Restart Node-based applications upon detecting file changes in the specified directories
__setup__
- Install `nodemon` package `npm i -D nodemon`
- Create a config file `nodemon.json`
- config `nodemon.json` to watch which directory for which files
```
{
    "watch": ["src"],
    "ext": "ts",
    "exec": "concurrently \"npx tsc --watch\" \"ts-node src/index.ts\""
}
```
- The above config, on exec, it uses a new package `concurrently`. Thus we need to install it: `node i -D concurrently` => this will add it to `devDependencies` section in `package.json`

- Define goal `dev` under section `"scripts"` in `package.json`: `"dev": "nodemon src/index.ts"`

__run__
- Init the development server with `nodemon`: `npm run dev`

## Compile `.ts` to `.js` and start the APP
__setup__
- Define goals `build`, `test` and `start` under section `"scripts"` in `package.json`
  ```
    "build": "npx tsc",
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node dist/index.js"
  ```

__run__
- Build: `npm run build` 
- Run built JS: `npm run start`