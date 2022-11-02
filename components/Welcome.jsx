// import React library
import React from 'react';

// create function component
const Welcome = () => {
    // create state object named 'name'
    const [name, setName] = React.useState('');

    // if name is empty, display form
    if (!name) {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setName(e.target.elements.name.value);
                }}>
                    <label htmlFor="name">Enter your name: </label>
                    <input id="name" type="text" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    } else {
        // if name is not empty, display greeting
        return (
            <div>
                <h1>Hello, {name}</h1>
            </div>
        );
    }
}

// export component
export default Welcome;
