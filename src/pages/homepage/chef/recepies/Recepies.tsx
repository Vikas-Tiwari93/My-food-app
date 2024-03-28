import React, { useCallback, useState } from "react";
import Cards from "../../../../components/pageComponents/homepageComponents/cards/Cards";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import SearchComponent from "../../../../components/common/searchComponent/SearchComponent";
import { Outlet, useNavigate } from "react-router-dom";


const RecepiePageChef = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card-contsiner {
    margin-top: 30px;
    padding: 10px;
  }
  .add-recepie {
    padding: 10px;
    color: orange;
  }
  .add-recepie-root {
    text-align: end;
    width: 100%;
  }
`;

export default function Recepies() {
  const [searchRecepies, setSearchRecepies] = useState("");
  const navigate=useNavigate()


  return (
    <RecepiePageChef>
      <div className="add-recepie-root">
        <Button variant="text" color="primary" onClick={()=>navigate("/homepage/chef/recepies/add")}>
          Add a Recepie <i className="dx-icon-add add-recepie "></i>
        </Button>
      </div>

      <SearchComponent
        onChange={(e) => {
          setSearchRecepies(e.target.value);
        }}
        value={searchRecepies}
        searchTitle="Search Recepies"
      />

      <Outlet/>
    </RecepiePageChef>
  );
}
