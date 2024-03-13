import React from 'react'
import AddRecepieForm from '../../../../../components/pageComponents/chefComponent/addRecepieComponents/AddRecepieForm';
import styled from '@emotion/styled';
const StyledRecepieAdd= styled.div`
width:100%;
.signup-form{
  width:100%;
}`
export default function RecepieAdd() {

  return (
    <StyledRecepieAdd>
      <h3 style={{ marginBottom: "20px" }}> Add Recepie</h3>
      <div className="signup-form">
     <AddRecepieForm/>
      
       
      </div>
    </StyledRecepieAdd>
  );

}
