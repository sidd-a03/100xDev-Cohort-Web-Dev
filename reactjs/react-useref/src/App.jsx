import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
    const [currentCount, setCurrentCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timer = useRef(null);

    useEffect(() => {
        if (isRunning) {
            timer.current = setInterval(() => {
                setCurrentCount((c) => c + 1);
            }, 1000);
        }
        return () => clearInterval(timer.current);
    }, [isRunning]);

    const startCount = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    const stopCount = () => {
        setIsRunning(false);
    };

    return (
        <div>
            {currentCount}
            <br />

            <button onClick={startCount} disabled={isRunning}>
                Start
            </button>

            <button onClick={stopCount} disabled={!isRunning}>
                Stop
            </button>
        </div>
    );
}

export default App;
