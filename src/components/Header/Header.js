import {useState} from "react";
import {useSelector, useDispatch} from "react-redux"; // Import useDispatch for theme toggle
import {toogleTheme} from "../../Rduex/cartSlice"; // Import theme action
import LOGO from "../../Utils/img/RestaurantLogo.png";
import {Link} from "react-router-dom";
import {BsCart3} from "react-icons/bs"; // Cart icon
import {AiFillHome, AiOutlineInfoCircle, AiFillPhone} from "react-icons/ai"; // Icons for Home, About, and Contact
import {RiLoginCircleFill, RiLogoutCircleFill} from "react-icons/ri"; // Icons for Login/Logout
import {MdOutlineDarkMode, MdLightMode} from "react-icons/md"; // Icons for Theme toggle

const Header = () => {
  const [login, setLogin] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Get totalQuantity from Redux
  const darkMode = useSelector((state) => state.cart.darkMode); // Get theme state from Redux
  const dispatch = useDispatch();

  return (
    <div className='flex justify-between items-center bg-orange-400 dark:bg-gray-800 shadow-md px-4 py-3 transition-colors duration-300'>
      {/* Logo */}
      <img className='w-36 flex-shrink-0' src={LOGO} alt='Logo' />

      {/* Navigation Menu */}
      <ul className='flex items-center space-x-6 text-white font-medium'>
        <li>
          <Link
            to='/'
            className='hover:text-gray-200 dark:hover:text-gray-400 flex items-center'
          >
            <AiFillHome className='text-2xl lg:mr-2' />
            <span className='hidden md:inline ml-2'>Home</span>
          </Link>
        </li>
        {/* <li>
          <Link
            to='/about'
            className='hover:text-gray-200 dark:hover:text-gray-400 flex items-center'
          >
            <AiOutlineInfoCircle className='text-2xl lg:mr-2' />
            <span className='hidden md:inline ml-2'>About</span>
          </Link>
        </li> */}
        <li>
          <Link
            to='/contact'
            className='hover:text-gray-200 dark:hover:text-gray-400 flex items-center'
          >
            <AiFillPhone className='text-2xl lg:mr-2' />
            <span className='hidden md:inline ml-2'>Contact</span>
          </Link>
        </li>
        <li>
          <Link
            to='/cart'
            className='hover:text-gray-200 dark:hover:text-gray-400 flex items-center relative'
          >
            <BsCart3 className='text-2xl lg:mr-2' />
            {totalQuantity > 0 && (
              <span className='absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-white text-orange-500 dark:bg-gray-600 dark:text-gray-200 font-semibold text-sm px-2 py-1 rounded-full'>
                {totalQuantity}
              </span>
            )}
            <span className='hidden md:inline ml-2'>Cart</span>
          </Link>
        </li>
        <li>
          <button
            className='bg-white dark:bg-gray-700 text-orange-500 dark:text-gray-200 px-4 py-2 rounded-full shadow hover:bg-orange-100 dark:hover:bg-gray-600 transition flex items-center'
            onClick={() => setLogin(!login)}
          >
            {login ? (
              <>
                <RiLogoutCircleFill className='text-2xl mr-2 lg:mr-2' />
                <span className='hidden md:inline ml-2'>Logout</span>
              </>
            ) : (
              <>
                <RiLoginCircleFill className='text-2xl lg:mr-2' />
                <span className='hidden md:inline ml-2'>Login</span>
              </>
            )}
          </button>
        </li>
        <li>
          <button
            className='bg-white dark:bg-gray-700 text-orange-500 dark:text-gray-200 px-4 py-2 rounded-full shadow hover:bg-orange-100 dark:hover:bg-gray-600 transition flex items-center'
            onClick={() => dispatch(toogleTheme())}
          >
            {darkMode ? (
              <>
                <MdLightMode className='text-2xl lg:mr-2' />
                <span className='hidden md:inline ml-2'>Light Mode</span>
              </>
            ) : (
              <>
                <MdOutlineDarkMode className='text-2xl lg:mr-2' />
                <span className='hidden md:inline ml-2'>Dark Mode</span>
              </>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
