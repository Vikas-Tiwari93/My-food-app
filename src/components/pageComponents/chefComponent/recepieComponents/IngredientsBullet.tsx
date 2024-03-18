import styled from "@emotion/styled";
import React from "react";

type ElmType = {
  name: string;
  amount: string;
};
type IngredientsBulletProps = {
  indexItem?: number | undefined;
  onCancel: (key: number | undefined) => void;
  elm: ElmType;
};
const StyledBullets = styled.div`
  position: relative;
  padding: 13px 15px;
  display: flex;
  align-items: center;
  justi-content: center;
  background-color: orange;
  color: white;
  border-radius: 12px;
  &:hover .bullet-close {
    visibility: visible;
  }
  .bullet-close {
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    width: 16px;
    height: 16px;
    background:#ffffff24;;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    right: 3px;
  }
  .buttle-text{
    display:flex;

    gap:12px;
  }
 
  .bullet-close i {
    font-size: 12px;
  }
`;
export default function IngredientsBullet({
  indexItem,
  elm,
  onCancel,
}: IngredientsBulletProps) {

  return (
    <StyledBullets>
      <div className="buttle-text"><span>{elm.name} </span> <span>{elm.amount}gm </span></div>
      <div className="bullet-close" onClick={() => onCancel(indexItem)}>
      
        <i className="dx-icon-close  "></i>
      </div>
    </StyledBullets>
  );
}
