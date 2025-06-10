import { useRef,useState } from "react";

const Hero = () => {
    const renderCount = useRef(0);
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
        renderCount.current += 1;
    }

    return (
        <div>
            <p>Button clicked {count} times</p>
            <p>Rendered {renderCount.current} times</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default Hero;