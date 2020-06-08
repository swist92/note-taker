// // LOAD DATA
// // We are linking our routes to a series of "data" sources.
// // These data sources hold arrays of information on notes data.
// // ===============================================================================
const fs = require("fs");
const { uuid } = require("uuidv4");

// // ===============================================================================
// // ROUTING

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    fs.readFile("db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  app.post("/api/notes", function (req, res) {
    fs.readFile("db/db.json", (err, data) => {
      let input = req.body;
      let jsonOutput = JSON.parse(data);
      input.id = uuid();
      jsonOutput.push(input);
      fs.writeFile("db/db.json", JSON.stringify(jsonOutput, null, 2), (err) => {
        if (err) throw err;
        res.json(req.body);
      });
    });
  });

  app.delete("/api/notes/:id", function (req, res) {
    fs.readFile("db/db.json", (err, data) => {
      let input = JSON.parse(data);
      let parsedOutput = input.filter((item) => item.id != req.params.id);
      fs.writeFile(
        "db/db.json",
        JSON.stringify(parsedOutput, null, 2),
        (err) => {
          if (err) throw err;
          res.json(req.body);
        }
      );
    });
  });
};