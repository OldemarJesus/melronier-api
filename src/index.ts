import app from "./app";

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`Server on http://localhost:${app.get("port")}/`);
});
