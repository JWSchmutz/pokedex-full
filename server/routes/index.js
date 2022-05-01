const path = require("path");
const router = require("express").Router();
const pokemonRoutes = require("./pokemon");
// user routes
router.use("/pokemon", pokemonRoutes);
// For anything else, render the html page
router.use(function (req, res) {
  res.send(__dirname + "../../../client/build/index.html");
});

module.exports = router;
