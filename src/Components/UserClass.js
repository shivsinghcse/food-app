import React from 'react';
import { Link } from 'react-router';
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            userInfo: {
                name: 'Jhon Doe',
                location: 'default',
                image: 'xxx',
                gitURL: 'xxxx',
            },
        };
        // console.log(this.props.name + 'Child Constructor');
    }
    async componentDidMount() {
        // console.log(this.props.name + 'Child componentDidMount called');
        const data = await fetch('https://api.github.com/users/shivsinghcse');
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo: {
                name: json.name,
                location: json.location,
                image: json.avatar_url,
                gitURL: json.html_url,
            },
        });
    }

    componentDidUpdate() {
        // console.log(`Component did update`);
    }
    componentWillUnmount() {
        // console.log('Component will unmount');
    }
    render() {
        const { name, location, image, gitURL } = this.state.userInfo;

        // console.log('Child Render');

        return (
            <>
                <div className="w-[50%] mt-5 py-5 mb-[2rem]   flex flex-col items-center justify-center shadow-2xl shadow-[#142852]-600 rounded">
                    <img
                        src={image}
                        alt="team-member-image"
                        className="rounded-2xl w-[50%] shadow-inner shadow-[#142852]-100"
                    />
                    <h2 className=" font-semibold mt-5 mb-1 text-3xl text-sky-500">
                        {name}
                    </h2>
                    <h3 className="text-xl text-sky-400 mb-4">
                        {location}
                    </h3>

                    <button className="border-2 px-4 py-2 rounded-md bg-[#142852] text-white text-xl font-semibold ">
                        
                        <Link to={gitURL} target="_blank">
                            Github
                        </Link>
                    </button>
                </div>
            </>
        );
    }
}

export default UserClass;
