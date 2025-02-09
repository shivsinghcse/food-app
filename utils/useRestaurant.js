import { useEffect, useState } from 'react';
import { RES_API } from './constants';

const useRestaurant = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [inMinds, setInMinds] = useState([]);
    const data = [listOfRestaurant, filteredRestaurant, inMinds];
    // fetch data
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_API);
        const json = await data.json();
        setListOfRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        console.log("json",json);
        
        setFilteredRestaurant(
            // optional chaining

            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setInMinds(
            json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
        );
    };

    return data;
};

export default useRestaurant;
