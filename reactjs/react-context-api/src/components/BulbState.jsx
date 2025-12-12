import { useBulb } from "../hooks";

export default function BulbState() {
    const { bulbOn } = useBulb();
    return <div>{bulbOn ? "ON" : "OFF"}</div>;
}
