// // ===============================================================================
// // LOAD DATA
// // We are linking our routes to a series of "data" sources.
// // These data sources hold arrays of information on notes data.
// // ===============================================================================
const fs = require("fs");
const { uuid } = require("uuidv4");

// // ===============================================================================
// // ROUTING
// // ===============================================================================

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

//   } else {
//     waitListData.push(req.body);
//     res.json(false);
//   }
//   // API GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases when a user visits a link
//   // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//   // ---------------------------------------------------------------------------

//   app.get("/api/tables", function(req, res) {
//     res.json(tableData);
//   });

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// ---------------------------------------------------------------------------
