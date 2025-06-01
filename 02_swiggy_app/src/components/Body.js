import Restaurants from "./Restaurants";
import resArr from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listofRes, setListOfRes] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listofRes.length === 0) {
        return <Shimmer />
    }

    return (
        <div className='body'>
            <div className='filter'>

                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>
                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredRes = listofRes.filter((res) => res.info.name.includes(searchText));
                        setFilteredRes(filteredRes);
                    }}>Search</button>
                </div>
                <button onClick={() => {
                    const filteredRes = listofRes.filter((res) => {
                        return res.info.avgRating >= 4.4
                    })
                    setListOfRes(filteredRes);
                }} className="top-rated-res">Top rated Restaurants</button>
            </div>
            {/* displaying all restro cards */}
            <div className='restaurant-container'>
                {filteredRes.map((res) => <Restaurants key={res.info.id} resData={res} />)}
            </div>
        </div>
    )
}
export default Body;