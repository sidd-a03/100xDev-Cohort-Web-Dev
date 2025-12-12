import { useState } from "react";
import { BulbContext } from "../context";

export default function BulbProvider({ children }) {
    const [bulbOn, setBulbOn] = useState(true);

    return (
        <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
            {children}
        </BulbContext.Provider>
    );
}
