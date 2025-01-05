import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json()) // have app accept json as data body

app.get("/health", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.get("/api/movies", (req: Request, res: Response) => {
  console.log(req.params)
  res.send("todo: render all awards winning movies")
});

app.get("/api/movies/:movieId", (req: Request, res: Response) => {
  var paramMovieId = req.params.movieId
  console.log(`received a GET request to render details of movie ${paramMovieId}`)
  res.send(`todo: render details on the movie with id ${paramMovieId}`)
})

app.get("/friends", (req: Request, res: Response) => {
  console.log(req.params)
  res.send("todo: see all friends, and a timelined movie activities from friends")
});

app
  .route("/new-friend")
  .get((req: Request, res: Response) => {
    console.log(req.params)
    res.send("todo: return a UI to send friend requests")
  })
  .post((req: Request, res: Response) => {
    console.log(req.params)
    res.send("todo: send requests to DB, and return a success page or error page on detecting form error")
  })


async function exampleFuncWithAsyncError() {
  console.log("pretending doing things and something went wrong")
  throw new Error("errored out in an example async function")
}
app.get("/example-async-error", async (req: Request, res: Response) => {
  try {
    await exampleFuncWithAsyncError();
    res.sendStatus(200);
  } catch (e) {
    res.status(400).send("something bad happend");
  }
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});