import RestaurantCard, { withOfferedLabel } from './RestaurantCard';
import { useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router';
import FoodInMind from './FoodInMind';
import useRestaurant from '../../utils/useRestaurant';
import useOnlineStatus from '../../utils/useOnlineStatus';

const Body = () => {
    const [searchText, setSearchText] = useState('');

    const [listOfRestaurant, filteredRestaurant, inMinds] = useRestaurant();
    const onlineStatus = useOnlineStatus();

    const WithOfferRestaurantCard = withOfferedLabel(RestaurantCard);
    // console.log(listOfRestaurant[0].info.aggregatedDiscountInfoV3);

    if (onlineStatus === false)
        return (
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1>
                    Looks like you're offline....!! Please check your internet
                    connection.
                </h1>
            </div>
        );

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body w-[100vw]">
            {/* <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        value={searchText}
                        placeholder="search...."
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            // Filter the restaurant card and update the UI
                            // search text
                            console.log(searchText);
                            const filteredList = listOfRestaurant.filter(
                                (res) => {
                                    return res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase());
                                }
                            );
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="top-rated">
                    <button
                        className="top-rated-btn"
                        onClick={() => {
                            // filter logic
                            const filteredList = listOfRestaurant.filter(
                                (res) => {
                                    return res.info.avgRating > 4;
                                }
                            );
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
            </div> */}
            <div
                className="in-minds"
                style={{
                    width: '90%',
                    // border: '10px solid red',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div className="carousal-titel">
                    <h1 className="my-10 text-3xl font-semibold ">
                        What's on your mind?
                    </h1>
                </div>
                <div
                    className="carousal-cuisines"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        columnGap: '0.7rem',
                    }}
                >
                    {inMinds.map((items) => {
                        return <FoodInMind resData={items} key={items.id} />;
                    })}
                </div>
            </div>
            {/*  restaurant container body */}
            <div className="w-[90%]   mx-auto p-4">
                {/* Top chain in Lucknow */}
                <div className="top-res-chain-title">
                    <h1 className="my-10 text-3xl font-semibold ">
                        Top restaurant chains in Lucknow
                    </h1>
                </div>
                {/* Restaurant container */}
                <div className="flex flex-wrap gap-x-[3%] gap-y-[5vh] justify-center ">
                    {filteredRestaurant.map((restaurant) => {
                        return (
                            <Link
                                key={restaurant.info.id}
                                to={'/restaurant/' + restaurant.info.id}
                            >
                                {/* offered restaurant */}
                                {restaurant.info.aggregatedDiscountInfoV3 ===
                                undefined ? (
                                    <RestaurantCard
                                        key={restaurant.info.id}
                                        resData={restaurant}
                                    />
                                ) : (
                                    <WithOfferRestaurantCard
                                        key={restaurant.info.id}
                                        resData={restaurant}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Body;
