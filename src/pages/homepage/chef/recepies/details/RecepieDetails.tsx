import React from "react";

import styled from "@emotion/styled";
import ViewRecepieDetails from "../../../../../components/pageComponents/chefComponent/recepieComponents/ViewRecepieDetails";


const StyledRecepieDetails = styled.div`
width:100%;
box-shadow:2px 2px 2px silver;
.card-top{
  display:flex;
  align-Items:center;
  justify-content:space-between;
}
.buttons-view-recepie{
  display:flex;
  height:40px;
  gap:15px;
}
}
`;
export const recepie = {
  name: "Chole",
  type: true,
  detailedType:"North Indian",
  shortDescription:"dfghjsdfghjkdfghj",
  ingredients: [
    { name: "masala", amount: "22", sysId: "fghjkl" },
    { name: "masala", amount: "22", sysId: "fghjkl" },
  ],
  steps: [
    { step: "1", details: "sdfghjcvbnmcvbnm" },
    { step: "1", details: "sdfghjcvbnmcvbnm" },
    { step: "1", details: "sdfghjcvbnmcvbnm" },
  ],
};
const RecipeDetails = () => {


  // recepie data from Redux Strore
  // update the recepie
  // delete Api;


  return (
    <StyledRecepieDetails>
     <ViewRecepieDetails recepie={recepie}/>
    </StyledRecepieDetails>
  );
};

export default RecipeDetails;
