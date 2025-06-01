import { CDN_URL } from "../utils/constants";

const Restaurants = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, sla :{deliveryTime} } = resData?.info;
    
    return (
        <div className='res-card'>
            <img className='res-img' alt='res-img' src={CDN_URL + resData.info.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <span>{avgRating} star</span>
            <span>{deliveryTime} minutes</span>
        </div>
    )
}
export default Restaurants;