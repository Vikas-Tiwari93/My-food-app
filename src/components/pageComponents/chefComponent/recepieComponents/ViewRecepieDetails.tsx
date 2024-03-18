import styled from "@emotion/styled";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export type RecepieDetailsResponse = {
  name: string;
  detailedType: string;
  type: boolean;
  shortDescription: string;
  ingredients: {
    name: string;
    amount: string;
  }[];
  steps: {
    step: string;
    details: string;
  }[];
};
type ViewRecepieDetailsProps = {
  recepie: RecepieDetailsResponse;
};
const StyledRecepieDetailsCard = styled.div`
  margin-top: 20px;
  padding: 25px;
  width: 100%;
.row-with-image{
  padding:20px;
  display:flex;
  justify-content:space-between;
}
.card-top{
  margin-bottom:17px;
}
  .image-recepie-view{
width:132px;
height:132px;
border:1px solid silver;
border-radius:10px;
  }
  .image-recepie-view img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
  .ingredient-root-view {
    border: 1px solid silver;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    gap: 10px;
  }
  .each-ingedient-root {
    display: flex;
    gap: 17px;
  }
  .one-ingredient {
    display: flex;
    gap: 5px;
  }
`;

export default function ViewRecepieDetails({
  recepie,
}: ViewRecepieDetailsProps) {
  const navigate = useNavigate();
  return (
    <StyledRecepieDetailsCard>
      <div className="card-top">
        <Typography variant="h4" component="h1">
          Recepie Details
        </Typography>
        <span className="buttons-view-recepie">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/homepage/chef/recepies/edit")}
          >
            Edit Recepie
          </Button>
          <Button variant="contained" color="primary">
            Delete
          </Button>
        </span>
      </div>
      <div className="row-with-image">
        <div>
          <Typography variant="h5" component="h2" gutterBottom>
            {recepie.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {recepie.shortDescription}
          </Typography>
        </div>
        <div className="image-recepie-view">
<img src="/images/no-image.jpeg" alt="" />
        </div>
      </div>
      <div className="ingredient-root-view">
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Ingredients:
        </Typography>
        <ul className="each-ingedient-root">
          {recepie.ingredients.map((elm, index) => (
            <ul key={index}>
              <span className="one-ingredient">
                <Typography variant="body2">{elm.name}</Typography>
                <Typography variant="body2">{elm.amount}gm</Typography>,
              </span>
            </ul>
          ))}
        </ul>
      </div>

      <Typography variant="body2" color="textSecondary" gutterBottom>
        Instructions:
      </Typography>
      <ol>
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
      </ol>
    </StyledRecepieDetailsCard>
  );
}
