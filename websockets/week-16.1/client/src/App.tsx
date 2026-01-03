import './App.css'
import {useEffect, useRef, useState} from "react";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const sendMessage = () =>  {
      const message = inputRef.current?.value;

      message ? socket?.send(message) : null;
  }
  useEffect(() => {
      const ws = new WebSocket('ws://localhost:8000');
      setSocket(ws);

      ws.onmessage = (ev) => alert(ev.data);
  }, [])

  return (
    <>
        <div>
            <input ref={inputRef} type="text" placeholder="message..." />
            <button onClick={sendMessage} >Send</button>
        </div>
    </>
  )
}

export default App
