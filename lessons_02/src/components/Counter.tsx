import React, {useState, useEffect} from "react"
import "./Counter.sass"

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [counterColor, setCounterColor] = useState('blue');

    // setValue(counter + 1); // 0 + 1 \
    // setValue( (prevState) => prevState+1 ) //actualState + 1
    // Реакт - лише зміна данних

    const handleDecrement = () => {
        setCounter(counter - 1);
        console.log(counter);
    }

    useEffect(() => {
        console.log('use useEffect');
        setTimeout(() => {
            console.log('after 2 seconds', counter);
            setCounter(
                prevState => prevState + 1,
            );
        }, 1000);

    }, [])

    useEffect(() => {
        console.log('use useEffect in counter');
        if (counter === 3) setCounterColor('green');
    }, [counter]);

    useEffect(() => {
        console.log(counter, counterColor);
    }, [counter, counterColor]);

    const handleIncrement = () => {
        setCounter( counter + 1);
        console.log(counter);
    }

    const handleColor = () => {
        setCounterColor('red');
    }

    const handleTimeout = () => {
        // setTimeout(() => {
        //     console.log('after 2 seconds', counter);
        //     setCounter(
        //         prevState => prevState + 1,
        //     );
        // }, 1000);
        setInterval (() => {
            setCounter( prevState => prevState + 1);
        }, 1000)
    };


    return (
        <div className="counter">
            <button onClick={handleDecrement} > - </button>
            <span style={{color: counterColor} } >{counter}</span>
            {/*<button onClick={handleIncrement}> + </button>*/}
            <button onClick={handleColor}> Red </button>
            <button onClick={handleTimeout}> increment counter after 1 sec.</button>
        </div>
    )
}