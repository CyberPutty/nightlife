var express = require("express");
var router = express.Router();
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.API_KEY_YELP);

const match = alias =>
  client
    .businessMatch({
      alias: alias
    })
    .then(data => {
      console.log(data);
      res.json(data.body);
    })
    .catch(e => {
      console.log(e);
    });

router.post("/search", function(req, res) {
  if (req.body.type === "search") {
    const location = req.body.location;
    const query = req.body.search;
    client
      .search({
        term: query,
        location: location
      })
      .then(data => {
        let results = JSON.parse(data.body).businesses;
        console.log(results);
        res.json({ businesses: results });
      })
      .catch(e => {
        console.log(e);
      });
  }
  if (req.body.type === "business") {
    client
      .business(req.body.search.toString())
      .then(data => {
        res.json({ businesses: [JSON.parse(data.body)] });
      })
      .catch(e => {
        console.log(e);
      });
  }
});

/* preload state for venue */
router.get("/", function(req, res, next) {
  
});

module.exports = router;
