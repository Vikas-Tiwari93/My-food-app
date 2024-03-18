import React from 'react'
import AddRecepieForm from '../../../../../components/pageComponents/chefComponent/recepieComponents/AddRecepieForm'
import styled from '@emotion/styled';

const StyledRecepieAdd= styled.div`
width:100%;
.signup-form{
  width:100%;
}
`
export default function RecepieEdit() {
  //get recepie from Store.
  const recepie = {
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
  return (
    <StyledRecepieAdd>
    <h3> Update Recepie</h3>
    <div className="signup-form">
    <AddRecepieForm recepie={recepie}/>
    </div>
    </StyledRecepieAdd>
  )
}
