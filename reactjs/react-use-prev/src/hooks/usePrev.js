import {useEffect, useRef} from "react";

const usePrev = (count) => {
    const ref = useRef(null);
    console.log(`From inside usePrev hook. the count is ${count} and ref.current is ${ref.current}`);
    useEffect(() => {
        console.log(`From inside useEffect before initialize ref.current is ${ref.current}`);
        ref.current = count;
        console.log(`From inside useEffect after initialize ref.current is ${ref.current}`);
    }, [count]);
    console.log(`Outside useEffect after initialize ref.current is ${ref.current}`);
    return ref;
}

export default usePrev;
