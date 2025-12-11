import './App.css'
import { useState, useEffect } from 'react'

function App() {
    const [countVisible, setCountVisible] = useState(true);

    useEffect(() => {
        const id = setInterval(() => {
            setCountVisible(count => !count);
        }, 5000)
        return () => {
            clearInterval(id)
        }
    }, [])

    return <div>
        <h1>Hi</h1>
        {countVisible && <Counter></Counter>}
        <h1>Hello</h1>
    </div>

}

// mounting, re-rendering, unmounting
function Counter() {
    const [count, setCount] = useState(0);

    console.log("Counter");

    useEffect(() => {
        console.log("on mount");
        const id = setInterval(() => {
            console.log("from inside set interval");
            setCount(count => count + 1);
        }, 1000)
        return () => {
            console.log("on unmount");
            clearInterval(id);
        }
    }, []);

    return <div>
        <h1>{count}</h1>
    </div>
}

export default App
