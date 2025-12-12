import { useBulb } from "../hooks";

export default function ToggleBulbState() {
    const { setBulbOn } = useBulb();

    return <button onClick={() => setBulbOn(prev => !prev)}>Toggle</button>;
}
