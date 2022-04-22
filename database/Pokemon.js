const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
  },
  evolvesFrom: {
    type: String,
    trim: true,
  },
  pokedexEntry: {
    type: String,
    trim: true,
  },
  genus: {
    type: String,
    trim: true,
  },
  generation: {
    type: String,
    trim: true,
  },
  is_baby: {
    type: Boolean,
  },
  is_legendary: {
    type: Boolean,
  },
  is_mythical: {
    type: Boolean,
  },
  number: {
    type: Number,
  },
  pronunciation: {
    type: String,
    trim: true,
  },
  type1: {
    type: String,
    trim: true,
  },
  type2: {
    type: String,
    trim: true,
  },
  stats: {
    type: Array,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Pokemon = mongoose.model("Pokemon", PokemonSchema);

// Export the Pokemon model
module.exports = Pokemon;
