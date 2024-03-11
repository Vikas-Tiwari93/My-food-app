import React, { useState } from "react";
import SearchComponent from "../../../components/common/searchComponent/SearchComponent";
import Cards from "../../../components/pageComponents/homepageComponents/cards/Cards";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

export default function Chef() {
  const [searchvalue, setSearch] = useState("56");
  const cardobj = {
    title: "fghj",
    type: "dfghj",
    ingredients: ["fghjm,", "gghjk"],
    description: "sdfghjkdfghjkdcvbnm drtyguhcgvhbjnsdvyu ",
    ratings: 4.5,
    views: 4000,
  };

  const StyledProfile = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .card-contsiner {
      padding: 10px;
      width: 100%;
    }
  `;
  return (
    <StyledProfile>
      {/* <SearchComponent
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={searchvalue}
        searchTitle="Recepies"
      />
      <div className="card-contsiner">
        <Cards cardData={cardobj} />
      </div> */}

      <Outlet />
    </StyledProfile>
  );
}
