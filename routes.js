const shortid = require("short-id");
function routes(app, db) {
  //TODO register an email, add pw logic and hash salt
  app.post("/register", (req, res) => {
    let email = req.body.email;
    let idd = shortid.generate();
    if (email) {
      db.findOne({ email }, (err, doc) => {
        if (doc) {
          res
            .status(400)
            .json({ status: "Failed", reason: "Already registered" });
        } else {
          db.insertOne({ email });
          res.json({ status: "success", id: idd });
        }
      });
    } else {
      res.status(400).json({ status: "Failed", reason: "wrong input" });
    }
  });
  //TODO update w/ pw logic
  app.post("/login", (req, res) => {
    let email = req.body.email;
    if (email) {
      db.findOne({ email }, (err, doc) => {
        if (doc) {
          res.json({ status: "success", id: doc.id });
        } else {
          res.status(400).json({ status: "Failed", reason: "Not recognised" });
        }
      });
    } else {
      res.status(400).json({ status: "Failed", reason: "wrong input" });
    }
  });
  //TODO change to something non trivial instead of music
  app.post("/upload", (req, res) => {
    let buffer = req.body.buffer;
    let name = req.body.name;
    let title = req.body.title;
    if (buffer && title) {
    } else {
      res.status(400).json({ status: "Failed", reason: "wrong input" });
    }
  });
  //TODO change access logic
  app.get("/access/:email/:id", (req, res) => {
    if (req.params.id && req.params.email) {
    } else {
      res.status(400).json({ status: "Failed", reason: "wrong input" });
    }
  });
}
module.exports = routes;
