const fetchAPI = async () => {
    try {
        const response = await fetch("https://jsonplaceholdder.org/users");
        if(!response.ok) throw new Error("Failed to fetch users");

        const data = await response.json();
        console.table(data);
    } catch (error) {
        console.log(error)
    }
}

fetchAPI();