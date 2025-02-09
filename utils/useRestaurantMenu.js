import { MENU_API } from './constants';
import { useEffect, useState } from 'react';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    // fetchData

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const url =
            MENU_API + resId + '&catalog_qa=undefined&submitAction=ENTER';

        const data = await fetch(url);
        const json = await data.json();
        // console.log(json);
        // console.log(json?.data?.cards[2]?.card.card.info);
        setResInfo(json.data);
    };
    return resInfo;
};

export default useRestaurantMenu;
