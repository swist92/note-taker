// // ===============================================================================
// // LOAD DATA
// // We are linking our routes to a series of "data" sources.
// // These data sources hold arrays of information on notes data.
// // ===============================================================================
const fs = require("fs");

// // ===============================================================================
// // ROUTING
// // ===============================================================================

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    fs.readFile("/etc/passwd", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    res.json(waitListData);

    app.post("/api/notes", function (req, res) {
      fs.appendFile("./db/db.json", "data to append", (err) => {
        if (err) throw err;
        console.log('The note was appended to file!');
      });

    //   if (tableData.length < 5) {
    //     tableData.push(req.body);
    //     res.json(true);
    //   } else {
    //     waitListData.push(req.body);
    //     res.json(false);
    //   }
    });
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
  });
};
