import styled from '@emotion/styled'
import React from 'react'

type ElmType={
  name:string,amount:string
}
type IngredientsBulletProps={
  onCancel?:()=>void
    elm:ElmType
}
const StyledBullets= styled.div`
position:relative;
padding: 7px 14px;
display:flex;
align-items:center;
justi-content:center;
background-color:orange;
color:white;
border-radius:12px;
.bullet-close{
  display:flex;
  align-items:center;
  justify-content:center;
  visibility:hidden;
  width:16px;
  height:16px;
  border-radius:50%;
  position:absolute;
  top:3px;
  right:3px;

}
.bullet-close: hover {
  visibility: visible;
}
.bullet-close i{
  font-size:12px;
} 
`
export default function IngredientsBullet({elm,onCancel}:IngredientsBulletProps) {
  return (
    <StyledBullets>
  <span>{elm.name} </span>  <span>{elm.amount} </span>  
   <div className='bullet-close'> <i className="dx-icon-close  " ></i></div>
    </StyledBullets>
  )
}
