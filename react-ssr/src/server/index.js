import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

const Hello = () => <h1>Hello from React</h1>;

const app = express();

app.get("/", (req, res) => {
  let html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
        ${renderToString(<Hello />)}
    </body>
  </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log("Server is up");
});
