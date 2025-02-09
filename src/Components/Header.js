import { Link } from 'react-router';
import { LOGO_URL } from '../../utils/constants';
import { useState, useContext } from 'react';
import useOnlineStatus from '../../utils/useOnlineStatus';
import UserContext from '../../utils/UserContext';

const Header = () => {
    const [btn, setBtn] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    return (
        <div className="min-w-full flex justify-between p-5 sticky top-0 left-0 bg-white shadow-xl z-50">
            <div className="w-20 ml-5">
                <img
                    className="hover:cursor-pointer rounded-full border-2 border-black"
                    src={LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex align-center gap-x-8 mx-5 p-2">
                    <li className="text-red-600">
                        Online Status: {onlineStatus ? '✅' : '🔴'}
                    </li>
                    <li className="text-red-800 text-xl font-semibold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-red-800 text-xl font-semibold">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="text-red-800 text-xl font-semibold">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="text-red-800 text-xl font-semibold">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="text-red-800 text-xl font-semibold">Cart</li>
                </ul>
                <button
                    className="mx-5 w-24 py-2 bg-green-700 font-semibold hover:cursor-pointer text-lg text-white rounded-md"
                    onClick={() => {
                        btn === 'Login' ? setBtn(`Logout -  ${loggedInUser}`) : setBtn('Login');
                    }}
                >
                    {btn}
                </button>
            </div>
        </div>
    );
};

export default Header;
