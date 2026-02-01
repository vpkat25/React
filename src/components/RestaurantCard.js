import { CDN_URL } from "../utils/Constants";

const RestaturantCard = (props) => {
    const {resData} = props;
    const {resName, cuisine, rating, time} = resData;
    return (
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo" 
                src={CDN_URL} 
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{time}</h4>
        </div>
    );
};


export default RestaturantCard;