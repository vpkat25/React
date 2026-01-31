import React from "react";
import ReactDOM from "react-dom/client";


/*
*       Header
*            - Logo
*            - NavItems
*        Body
*            - Search
*            - RestaturantContainer
*                - RestaturantCard
*                   - Img
*                   - Name of Res, Start Rating, Cuisine, delivery time
*        Footer
*            - Copyright
*            - links
*            - Address
*            - Contact
*
*/


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )   
}

const RestaturantCard = (props) => {
    const {resData} = props;
    const {resName, cuisine, rating, time} = resData;
    return (
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/5/433eb354-f34f-48f5-b3fa-b6da2a1ff631_f04359bb-a5c3-4478-90a9-9ee439ffbd0f.jpg" 
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{time}</h4>
        </div>
    );
};

const resList = [
  {
    id: 1,
    resName: "Meghana Foods",
    cuisine: "Biryani, North Indian, Asian",
    rating: "4.4",
    time: "38 Minutes",
  },
  {
    id: 2,
    resName: "KFC",
    cuisine: "Burger, Fast Food",
    rating: "4.1",
    time: "30 Minutes",
  },
  {
    id: 3,
    resName: "Domino's Pizza",
    cuisine: "Pizza, Italian",
    rating: "4.2",
    time: "25 Minutes",
  },
  {
    id: 4,
    resName: "Burger King",
    cuisine: "Burger, Fast Food",
    rating: "4.0",
    time: "35 Minutes",
  },
  {
    id: 5,
    resName: "Subway",
    cuisine: "Healthy Food, Sandwich",
    rating: "3.9",
    time: "28 Minutes",
  },
];


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (
                        <RestaturantCard key={restaurant.id} resData={restaurant} />
                 ))
                }
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)

