import RestaturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            <div className="Filter">
                <button className="filter-btn" onClick={() => {
                    
                    const filteredList =  listOfRestaurant.filter((res) => 
                        res.rating > 4
                    );
                    setListOfRestaurant(filteredList);

                }} >Top Rated restaurant</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) => (
                        <RestaturantCard key={restaurant.id} resData={restaurant} />
                 ))
                }
            </div>
        </div>
    );
};

export default Body;