import React from "react";

export default class UserClass extends React.Component {
  // Constructor called first
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    console.log(this.props.name + "==Constructor- 1 call");
  }

  // componentDidMount called third
  async componentDidMount() {
    const data = await fetch(`https://api.github.com/users/${this.props.name}`);
    const json = await data.json();
    this.setState({user: json});
    console.log(this.props.name + "--ComponentDidMount-- 3 call");
  }

  // getSnapshotBeforeUpdate called fourth
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(this.props.name + "=getSnapshotBeforeUpdate-- 6 call");
    return null;
  }

  // componentDidUpdate called fifth
  componentDidUpdate(prevProps) {
    console.log(this.props.name + "ComponentDidUpdate -- 7 call");
  }

  // render function called second
  render() {
    console.log(this.props.name + "--Render 2 call then 5 call");
    const {name, location, bio, avatar_url, login} = this.state.user || {};

    return (
      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto'>
        <div className='flex justify-center mb-4'>
          <img
            src={avatar_url}
            alt='Avatar'
            className='w-32 h-32 rounded-full object-cover border-4 border-orange-500 dark:border-gray-600'
          />
        </div>
        <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center'>
          {name}
        </h3>
        <p className='text-gray-600 dark:text-gray-300 text-center mb-2'>
          <strong>Location:</strong> {location || "Not available"}
        </p>
        <p className='text-gray-500 dark:text-gray-400 text-sm text-center mb-4'>
          <strong>Bio:</strong> {bio || "No bio available."}
        </p>
        <div className='flex justify-center'>
          <a
            href={`https://github.com/${login}`}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300'
          >
            👨🏻‍💻 Github
          </a>
        </div>
      </div>
    );
  }
}
