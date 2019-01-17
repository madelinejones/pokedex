import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className="pa3 ba b--green b-lightest-blue"
        type="search"
        placeholder="Search Pokémon..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
