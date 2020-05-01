import React, { useState, useEffect } from "react";
import axios from "axios";
import StatesComponent from "../../components/StatesComponent";

function StatesContainer() {
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([])

    const searchHandler=(value) =>{
        setData(fullData.filter((d) => d.state.toLowerCase().startsWith(value.toLowerCase())));
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "https://corona.lmao.ninja/v2/states"
                );
                setData(response.data);
                setFullData(response.data);
            } catch (err) {
                console.error(err.message);
            }
        })();
    }, []);

    return <StatesComponent data={data} searchHandler={searchHandler} />;
}

export default StatesContainer;
