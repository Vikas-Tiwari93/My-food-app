import React, { useState } from "react";
import SearchComponent from "../../../../components/common/searchComponent/SearchComponent";

export default function Ingredients() {
  const [searchIngredients, setSearchIngredients] = useState("");

  return (
    <div>
      <SearchComponent
        onChange={(e) => {
          setSearchIngredients(e.target.value);
        }}
        value={searchIngredients}
        searchTitle="Search Ingredients"
      />
      <div></div>
    </div>
  );
}
