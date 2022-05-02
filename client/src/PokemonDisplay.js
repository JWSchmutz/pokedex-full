import "./PokemonDisplay.css";

const PokemonDisplay = (props) => {
  const {
    generation,
    genus,
    is_baby,
    is_legendary,
    is_mythical,
    name,
    number,
    pokedexEntry,
    stats,
    type1,
    type2,
    images,
  } = props.pokemon;

  const max = {
    hp: 255,
    attack: 181,
    "special-attack": 180,
    defense: 230,
    "special-defense": 230,
    speed: 200,
  };

  let hasBeenRead = false;
  hasBeenRead = true;

  return (
    <div className="PokemonDisplay">
      <h2>
        {name.charAt(0).toUpperCase() + name.slice(1)}
        <br />#{number}
      </h2>
      {images ? (
        <div>
          {" "}
          {images.map((imageUrl) => (
            <img alt={name} src={imageUrl} />
          ))}
        </div>
      ) : (
        <img src={`https://img.pokemondb.net/artwork/${name}.jpg`} alt={name} />
      )}

      <h3>{genus}</h3>
      <p>Gen {generation}</p>
      {(is_baby || is_legendary || is_mythical) && (
        <p>
          {is_baby ? "Baby " : ""}
          {is_mythical ? "Mythical " : ""}
          {is_legendary ? "Legendary" : ""}
        </p>
      )}
      <p className="type-holder">
        {type1 && <span className={`type ${type1}`}>{type1}</span>}
        {type2 && <span className={`type ${type2}`}>{type2}</span>}
      </p>
      <div className="stats">
        {stats.map((stat, i) => {
          return (
            <div className="stat" key={i}>
              <p className="stat-name">{stat.stat.name}:</p>
              <div className="stat-bar-outer">
                <div
                  style={{
                    width: `${100 * (stat.base_stat / max[stat.stat.name])}%`,
                  }}
                  className={`${stat.stat.name}-bar stat-bar`}
                >
                  &nbsp;{stat.base_stat}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="pokedex-entry">{pokedexEntry}</p>
    </div>
  );
};

export default PokemonDisplay;
