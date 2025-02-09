import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import PageNotFount from './Components/PageNotFount';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import Shimmer from './Components/Shimmer';
import RestaurantMenu from './Components/RestaurantMenu';
// import Grocery from './Components/Grocery';

const Grocery = lazy(() => import('./Components/Grocery'));
// const RestaurantMenu = lazy(() => import('./Components/RestaurantMenu'));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <AboutUs />,
            },
            {
                path: '/contact',
                element: <ContactUs />,
            },
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<h1>Loading...................</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <PageNotFount />,
    },
    // {
    //     path: '*',
    //     element: <PageNotFount />,
    // },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
