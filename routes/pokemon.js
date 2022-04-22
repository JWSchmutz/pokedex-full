const express = require("express");
const router = express.Router();
const Pokemon = require("../database/Pokemon");
router.get("/:number", (req, res) => {
  console.log(typeof parseInt(req.params.number));
  if (!isNaN(parseInt(req.params.number))) {
    console.log(
      "req.params.number",
      req.params.number,
      "typeof parseInt(req.params.number) === 'number'",
      parseInt(req.params.number)
    );
    Pokemon.findOne({ number: req.params.number }).then((response) => {
      res.send(response);
    });
  } else {
    Pokemon.findOne({ name: req.params.number.toLowerCase() }).then(
      (response) => {
        res.send(response);
      }
    );
  }
});

// add pokemon to db

// router.post("/", (req, res) => {
//   ({
//     name,
//     evolvesFrom,
//     pokedexEntry,
//     genus,
//     generation,
//     is_baby,
//     is_legendary,
//     is_mythical,
//     number,
//     type1,
//     type2,
//     stats,
//   } = req.body);
//   console.log(name);
//   const newPokemon = new Pokemon({
//     name,
//     evolvesFrom,
//     pokedexEntry,
//     genus,
//     generation,
//     is_baby,
//     is_legendary,
//     is_mythical,
//     number,
//     type1,
//     type2,
//     stats,
//   });
//   newPokemon
//     .save()
//     .then((poke) => {
//       res.send("pokemon added to pokedex!");
//     })
//     .catch((err) => console.log(err));
// });

// update pronunciation

// router.put("/", async (req, res) => {
//   const filter = { number: req.body.nameToSearch };
//   const update = { pronunciation: req.body.pronunciation };
//   let doc = await Pokemon.findOneAndUpdate(filter, update);
//   console.log("doc", doc);
//   res.end();
// });

//abnormal image naming conventions for pokemon numbers: 487, 492, 741, 745, 875, 877, 892

module.exports = router;
