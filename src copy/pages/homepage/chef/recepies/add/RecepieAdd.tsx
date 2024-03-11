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
      <h2 style={{ marginBottom: "20px" }}> Add Recepie</h2>
      <div className="signup-form">
     <AddRecepieForm/>
        <div className="seperator"></div>
        <div className="sepearotor-text">
          Any issues ? Please reach out to us.
        </div>
      </div>
    </StyledRecepieAdd>
  );

}
