import './App.css'
import useDebounce from "./hooks/useDebounce.js";
import {useEffect, useState} from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 500);

  useEffect(() => {
      // expensive operation
      console.log("expensive operation", debouncedValue);
  }, [debouncedValue]);


  return (
    <>
        {/*<input type={'text'} placeholder={'Search here'} onChange={debounceFn} />*/}
        <input type={"text"} placeholder={'Search...'} onChange={e => setInputVal(e.target.value)} />
    </>
  )
}

export default App
