import React from "react";
import cardFrontSource from "../assets/images/bg-card-front.png";
import cardBackSource from "../assets/images/bg-card-back.png";

const CardFront = () =>  {
    return (
        <div>
            <img src={cardFrontSource} alt={cardFrontSource} />

        </div>
    )
}

const CardBack = () =>  {
    return (
        <div>
            <img src={cardBackSource} alt={cardBackSource} />

        </div>
    )
}

export { CardFront, CardBack };