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
Restart Node-based applications upon detecting file changes in the specified directories: `npm i -D nodemon`

Create a config file `nodemon.json`

## Compile `.ts` to `.js` and start the APP

- Add `build` `start` and `dev` to `"scripts"` in `package.json`.
  - Note: `"dev": "nodemon src/index.ts"`: The dev command is designed to run the Express server in development mode with the help of nodemon and ts-node.
- Init the development server with `nodemon`: `npm run dev`
- Build: `npm run build` => Run built JS: `npm run start`