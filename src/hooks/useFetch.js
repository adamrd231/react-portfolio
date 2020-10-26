import { useState, useEffect } from 'react';
import { API } from '../api-service';


function useFetch() {

    const [data, setData] = useState([]);
    const token = "Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad"

    useEffect( () => {
        async function fetchData() {
            const data = await API.getPortfolioWork(token)
            setData(data);

        }
        fetchData();
    }, []);

    return [data]
}

export { useFetch }