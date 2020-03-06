let jsonSeats = require("./seats.json");
let jsonScheme = require("./scheme.json");
//Самое большое различие, которое вы можете здесь заметить,
//заключается в том, что Express по умолчанию даёт вам роутер.
//Вам не нужно вручную разбирать URL, чтобы решить, что делать,
//вместо этого вы определяете маршрутизацию приложения с помощью app.get, app.post, app.put
//и так далее, а они уже транслируются в соответствующие HTTP-запросы
const express = require("express");
const app = express();
const port = 3001;

app.get("/event/moscow/scheme", (request, responce) => {
  console.log(request);
  responce.json(jsonScheme);
});

app.get("/event/moscow/tickets", (request, responce) => {
  responce.json(jsonSeats);
});

app.listen(port, err => {
  if (err) {
    return console.log("Smth went wrong", err);
  }
  console.log(`server is listening on ${port}`);
});
