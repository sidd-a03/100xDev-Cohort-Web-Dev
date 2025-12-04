import axios from "axios";

const fetchApi = async () => {
    const response = await axios.get("https://jsonplaceholder.org/users");
    console.table(response.data);
}

fetchApi();