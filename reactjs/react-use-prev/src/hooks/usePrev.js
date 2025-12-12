import {useEffect, useRef} from "react";

const usePrev = (count) => {
    const ref = useRef(null);
    useEffect(() => {
        ref.current = count;
    }, [count]);
    return ref;
}

export default usePrev;
