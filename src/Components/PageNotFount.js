import { useRouteError } from 'react-router';

const PageNotFount = () => {
    const err = useRouteError();
    // console.log(err);

    return (
        <>
            <h1>Oops!!!</h1>
            <h2>Somthing went wrong!!!</h2>
            <h3>
                {err.status} {err.statusText}
            </h3>
        </>
    );
};

export default PageNotFount;
