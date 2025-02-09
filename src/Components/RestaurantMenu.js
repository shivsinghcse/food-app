import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(0);

    const resInfo = useRestaurantMenu(resId);

    // console.log(resInfo);

    if (resInfo === null) return <Shimmer />;

    const {
        name,
        cuisines,
        costForTwoMessage,
        totalRatingsString,
        areaName,
        sla,
        avgRating,
    } = resInfo?.cards[2]?.card?.card?.info;
    console.log('resinfo', resInfo);

    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (card) => {
                return (
                    card?.card?.card?.['@type'] ===
                    'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
                );
            }
        );

    // console.log('Categoies', categories);

    return (
        <>
            <div className=" flex flex-col gap-y-10 w-[60%] mx-auto p-5 my-12">
                <h1 className="font-sans  text-2xl font-extrabold">{name}</h1>
                <section
                    className="res-details"
                    style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        // height: '100px',
                        borderRadius: '0.8rem',
                        border: '1px solid #ccc',
                        boxShadow: ' rgba(0, 0, 0, 0.25) 0px 10px 10px 0px',
                        padding: '1rem',
                    }}
                >
                    <h3 className="text-lg font-bold">
                        <span className="text-green-700">&#9733;</span>{' '}
                        {avgRating} ({totalRatingsString}) - {costForTwoMessage}
                    </h3>
                    <h3 className="text-md font-semibold text-orange-600 underline cursor-pointer">
                        {cuisines.join(', ')}
                    </h3>
                    <div className="border-l-2 border-gray-400">
                        <h3 className="text-sm text-black font-semibold m-3">
                            Outlet{' '}
                            <span className="font-medium text-gray-400 mx-3">
                                {areaName}
                            </span>
                        </h3>
                        <h3 className="text-sm text-black font-semibold m-3">
                            {sla.slaString.toLowerCase()}
                        </h3>
                    </div>
                </section>
                {/* TODO: Deals for you */}
                <h4 className="text-md text-gray-400 font-medium tracking-[0.5rem] mx-auto my-2">
                    &larr;MENU&rarr;
                </h4>
                {/* TODO: search */}
                {/* TODO: filters */}
                {/* Accordino */}
            </div>
            {categories.map((category, index) => {
                return (
                    <RestaurantCategory
                        key={category.card.card.title}
                        data={category}
                        showItems={index === showIndex && true}
                        setShowIndex = {()=>setShowIndex(index)}
                    />
                );
            })}
        </>
    );
};

export default RestaurantMenu;
