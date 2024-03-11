import styled from '@emotion/styled'
import React from 'react'
import Cards from '../../../../../components/pageComponents/homepageComponents/cards/Cards'
const StyledRecepieList= styled.div`
width:100%;

`
export default function RecepieList() {
    const cardobj = {
        title: "fghj",
        type: "dfghj",
        ingredients: ["fghjm,", "gghjk"],
        description: "sdfghjkdfghjkdcvbnm drtyguhcgvhbjnsdvyu ",
        ratings: 4.5,
        views: 4000,
      };
  return (
    <StyledRecepieList>
        <div className="card-contsiner">
        <Cards cardData={cardobj} />
      </div>
   
    
    </StyledRecepieList>
  )
}
