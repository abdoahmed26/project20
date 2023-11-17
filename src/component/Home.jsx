import React from "react";
import Sale from "./HomePages/Sale";
import FeeIcon from "./HomePages/FeeIcon";
import Feat from "./HomePages/Feat";
import Arrival from "./HomePages/Arrival";
import Best from "./HomePages/Best";
import Year from "./HomePages/Year";
import Offer from "./HomePages/Offer";

const Home = () => {
    return (
        <div>
            <Sale />
            <FeeIcon />
            <Feat />
            <Arrival />
            <Best />
            <Year />
            <Offer />
        </div>
    );
};

export default Home;
