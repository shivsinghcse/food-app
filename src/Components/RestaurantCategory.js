import { useEffect, useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // console.log('data', data);
    const { title, itemCards } = data.card.card;
    // console.log('itemcard', itemCards);

    

    const handleClick = () => {
       setShowIndex()
    };


    return (
        <>
            <div id={title} className="w-[60%] mx-auto mb-5  hover:cursor-pointer shadow-lg border-t-[1px]">
                {/* Header */}
                <div
                    className="w-full p-3 flex justify-between "
                    onClick={handleClick}
                >
                    <h3 className="text-xl font-bold">
                        {`${title}(${itemCards.length})`}
                    </h3>
                    <span className="text-xl">{showItems ? '➖' : '➕'}</span>
                </div>

                {/* body */}

                {showItems && <ItemList items={itemCards} />}
            </div>
        </>
    );
};

export default RestaurantCategory;
