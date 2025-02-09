// import User from './User';

import UserClass from './UserClass';
import { Component } from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        console.log('Parent Constructor');
    }
    componentDidMount() {
        console.log('parent componentDidMount called');
    }

    render() {
        console.log('Parent Render');
        return (
            <>
                <div className="bg-white w-[90%] mx-auto my-[2rem] flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold underline">
                        About Us
                    </h1>
                    <p className="text-2xl text-gray-400 m-4">
                        This is a swiggy like food ordering web application.
                    </p>
                    <h2 className='font-semibold text-3xl  underline my-[2.5rem]'>Meet Our Developer</h2>
                    <UserClass
                        name={'Shiv Singh (class)'}
                        location={'Lucknow(class'}
                    />
                </div>
            </>
        );
    }
}

export default AboutUs;
