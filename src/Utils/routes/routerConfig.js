import {lazy, Suspense} from "react";
import AppLayout from "../../components/AppLayout.js";
import {createBrowserRouter} from "react-router-dom";
import Cart from "../../components/Cart.js";

const RestaurantMenu = lazy(() =>
  import("../../components/RestaureantUtils/RestaurantMenu.js"),
);
const Contact = lazy(() => import("../../components/Contact.js"));
const Error = lazy(() => import("../../components/Error.js"));
const Body = lazy(() => import("../../components/Body.js"));
const About = lazy(() => import("../../components/About.js"));
export const routerConfig = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: (
        <Suspense fallback={<h1>Loading...Error...</h1>}>
          <Error />
        </Suspense>
      ),
      children: [
        {
          path: "/about",
          element: (
            <Suspense fallback={<h1>Loading...About...</h1>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<h1>Loading...Contact...</h1>}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "/",
          element: (
            <Suspense fallback={<h1>Loading...Body...</h1>}>
              <Body />
            </Suspense>
          ),
        },

        {
          path: "/restaurant/:restaurant_id",
          element: (
            <Suspense fallback={<h1>Loading...RestaurantMenu...</h1>}>
              <RestaurantMenu />
            </Suspense>
          ),
          errorElement: (
            <Suspense fallback={<h1>Loading...Error...</h1>}>
              <Error />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<h1>Loading...Cart...</h1>}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<h1>Loading...Error...</h1>}>
              <Error />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_skipActionStatusRevalidation: true,
    },
  },
);
