import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { Pokemon } from "./Pokemon";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Pokemon: Pokemon,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredPokemon = this.state.Pokemon.filter(Pokemon => {
      return Pokemon.name && Pokemon.type
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>Pokédex</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList Pokemon={filteredPokemon} />
      </div>
    );
  }
}

export default App;
