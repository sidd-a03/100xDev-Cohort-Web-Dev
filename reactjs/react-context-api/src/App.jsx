import { BulbProvider } from "./providers";
import { LightBulb } from "./components";
import './App.css'

export default function App() {
    return (
        <BulbProvider>
            <LightBulb />
        </BulbProvider>
    );
}
