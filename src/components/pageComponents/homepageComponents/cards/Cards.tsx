import React, { useMemo } from "react";
import "./cards.style.css";
type CardDataProps = {
  cardData: {
    title: string;
    type: string;
    ingredients: string[];
    description: string;
    ratings: number;
    views: number;
  };
};
export default function Cards({ cardData }: CardDataProps) {
  const numberOfStars = useMemo(() => {
    if (cardData.ratings === Math.floor(cardData.ratings)) {
      return [Math.floor(cardData.ratings), 0];
    } else {
      return [Math.floor(cardData.ratings), 1];
    }
  }, [cardData]);
  const convertViews = useMemo(() => {
    let views = cardData.views;
    if (views > 900) {
      views = views / 100;
      return views + "K";
    }
    return String(views);
  }, [cardData]);

  return (
    <div className="home-card">
      <div className="card-image">
        <img
          src="https://lh3.googleusercontent.com/gTpuBpuyvMnF34-pyJjmVkudUjUrwkWGJ9Qzs9xJsiQJfIzRxyju0Le_Yogs7VSykSdv6yrW-cBcCygFn3Ac=w440-h440-c-rw-v1-e365"
          alt=""
        />
      </div>
      <div className="card-details">
        <p className="title-logo-root">
          <span className="title-type">
            {cardData.title}
            <p className="food-type">{cardData.type}</p>
          </span>

          <span className="title-logo">
            <p className="logo-image-card">
              <img src="/yummlywhite.svg" alt="" />
            </p>

            <p>{convertViews}</p>
          </span>
        </p>

        <p className="ingredients row">
          {cardData.ingredients.map((elm, index) => {
            return <span key={index + 1}>{elm}</span>;
          })}
        </p>
        <p className="short-description row">{cardData.description}</p>
      </div>
      <div className="card-star">
        {new Array(numberOfStars[0]).fill("").map((elm, index) => {
          return (
            <i
              key={index}
              className="dx-icon-favorites dx-icon-custom-style "
            ></i>
          );
        })}

        {new Array(numberOfStars[1]).fill("").map((elm, index) => {
          return (
            <i
              key={index}
              className="dx-icon-favorites dx-icon-custom-style-two "
            ></i>
          );
        })}
      </div>
    </div>
  );
}
