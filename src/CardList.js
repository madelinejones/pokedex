import React from "react";
import Card from "./Card";

const CardList = ({ Pokemon }) => {
  return (
    <div>
      {Pokemon.map((user, i) => {
        return (
          <Card
            key={Pokemon[i].id}
            id={Pokemon[i].id}
            name={Pokemon[i].name}
            type={Pokemon[i].type}
          />
        );
      })}
    </div>
  );
};

export default CardList;
