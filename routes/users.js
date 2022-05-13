const {
    createLogin,
    getOneLogin,
    createPokedex,
    getAllPokedex,
    getOnePokedex,
    putPokedex,
    removePokedex,
  } = require("../controller/controller");

  const {
/*     validateCreate, */
    validateDuplicatedEmail,
  } = require("../middleware/user");
  
  module.exports = (app) => {
    app.post("/user", /* validateCreate, */ validateDuplicatedEmail, createLogin);
    app.get("/user/:id", getOneLogin);
    app.post("/pokemon", createPokedex);
    app.get("/pokemon", getAllPokedex);
    app.get("/pokemon/:id", getOnePokedex);
    app.put("/pokemon/:id", putPokedex);
    app.delete("/pokemon/:id", removePokedex);
  }