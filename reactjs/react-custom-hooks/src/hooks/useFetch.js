import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw Error("Failed to fetch data.");
                setData(await response.json());
            } catch (error) {
                setError(error.message);
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

        const id = setInterval(() => {
            fetchData()
        }, 10 * 1000)

        return () => clearInterval(id);

    }, [url]);

    return { data, loading, error };
}
