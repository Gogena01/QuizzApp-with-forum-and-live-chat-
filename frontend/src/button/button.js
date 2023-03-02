import * as React from 'react';

const ButtonJs = () => {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button type="button" onClick={handleClick}>
                Click Me
            </button>

            <input value={count} disabled />
        </div>
    );
};

export default ButtonJs;