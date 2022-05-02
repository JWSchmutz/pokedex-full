import "./App.css";
import axios from "axios";
import { useState } from "react";
import PokemonDisplay from "./PokemonDisplay";
import Input from "./Input";
import Button from "./Button";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const App = () => {
  const [nameToSearch, setNameToSearch] = useState("");
  const [pokemonResult, setPokemonResult] = useState("");
  const [pokemonNotFound, setPokemonNotFound] = useState(false);
  const handleQueryInputChange = (e) => {
    setNameToSearch(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") getStats();
  };

  // const [pronunciation, setPronunciation] = useState("");

  // const updatePronunciation = () => {
  //   axios.put("/pokemon", { pronunciation, nameToSearch });
  // };

  // const handlePronunciationChange = (e) => {
  //   setPronunciation(e.target.value);
  // };

  const getStats = () => {
    axiosInstance.get(`pokemon/${nameToSearch}`).then((res) => {
      res.data.name === undefined
        ? setPokemonNotFound(true)
        : setPokemonNotFound(false);
      setPokemonResult(res.data);
      var msg = new SpeechSynthesisUtterance();
      // msg.text = res.data.pronunciation || res.data.name;
      // console.log(msg.text);
      msg.text = `${
        res.data.pronunciation || res.data.name
      }, the ${res.data.genus.replace("Pokémon", "pokem awn")}: ${
        res.data.pokedexEntry
      }`;
      window.speechSynthesis.speak(msg);
    });
  };

  //==== get all pokemon starting at number to search ====

  // let numberToSearch = 0;
  // const getStats = () => {
  //   numberToSearch++;
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon-species/${numberToSearch}`)
  //     .then((response) => {
  //       const pokemon = {
  //         name: response.data.name,
  //         evolvesFrom: response.data.evolves_from_species?.name,
  //         pokedexEntry: response.data.flavor_text_entries
  //           .reduce((previous, current, index, array) => {
  //             if (
  //               current.language.name === "en" &&
  //               parseInt(current.version.url.split("/").at(-2)) >
  //                 parseInt(previous.version.url.split("/").at(-2))
  //             )
  //               return current;
  //             return previous;
  //           })
  //           .flavor_text.replace(/\n/g, " "),
  //         genus: response.data.genera.filter(
  //           (genus) => genus.language.name === "en"
  //         )[0].genus,
  //         generation: response.data.generation.name
  //           .split("-")
  //           .pop()
  //           .toUpperCase(),
  //         is_baby: response.data.is_baby,
  //         is_legendary: response.data.is_legendary,
  //         is_mythical: response.data.is_mythical,
  //         number: response.data.id,
  //       };
  //       console.log(response.data);
  //       console.log(`name: ${response.data.name}`);
  //       console.log(
  //         `evolves from: ${response.data.evolves_from_species?.name}`
  //       );
  //       console.log(
  //         `pokedex entry`,
  //         response.data.flavor_text_entries
  //           .reduce((previous, current, index, array) => {
  //             if (
  //               current.language.name === "en" &&
  //               parseInt(current.version.url.split("/").at(-2)) >
  //                 parseInt(previous.version.url.split("/").at(-2))
  //             )
  //               return current;
  //             return previous;
  //           })
  //           .flavor_text.replace(/\n/g, " ")
  //       );
  //       console.log(
  //         `genus: ${
  //           response.data.genera.filter(
  //             (genus) => genus.language.name === "en"
  //           )[0].genus
  //         }`
  //       );
  //       console.log(
  //         `generation: ${response.data.generation.name
  //           .split("-")
  //           .pop()
  //           .toUpperCase()}`
  //       );
  //       console.log(`is_baby: ${response.data.is_baby}`);
  //       console.log(`is_legendary: ${response.data.is_legendary}`);
  //       console.log(`is_mythical: ${response.data.is_mythical}`);
  //       console.log(`number: ${response.data.id}`);
  //       axios
  //         .get(`https://pokeapi.co/api/v2/pokemon/${numberToSearch}`)
  //         .then((response) => {
  //           pokemon.stats = response.data.stats;
  //           pokemon.type1 = response.data.types[0].type.name;
  //           pokemon.type2 = response.data.types?.[1]?.type?.name;
  //           console.log(response.data);
  //           console.log(response.data.stats);
  //           console.log(response.data.types[0].type.name);
  //           console.log(response.data.types?.[1]?.type?.name);
  //           axios.post("/pokemon", pokemon).then((res) => {
  //             console.log(res);
  //             getStats();
  //           });
  //         });
  //     })
  //     .catch((error) => {
  //       console.log("game creation error: ");
  //       console.log(error);
  //     });
  // };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          onChange={(e) => handleQueryInputChange(e)}
          onKeyUp={(e) => handleKeyUp(e)}
        />
        <br />
        <Button
          type="button"
          classes="query-btn"
          onClick={getStats}
          text="Find Pokemon"
        />
      </header>
      <div>
        {pokemonNotFound && (
          <p style={{ color: "red", textAlign: "center" }}>No Pokemon found</p>
        )}
        {pokemonResult.name && <PokemonDisplay pokemon={pokemonResult} />}
      </div>
      {/* update pronunciation code */}
      {/* <Input
        onChange={(e) => handlePronunciationChange(e)}
        onKeyUp={(e) => handleKeyUp(e)}
      />
      <Button
        type="button"
        classes="query-btn"
        onClick={updatePronunciation}
        text="Find Pokemon"
      /> */}
    </div>
  );
};

export default App;
