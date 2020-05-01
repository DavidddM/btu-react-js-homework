import React, { useState, useEffect } from "react";
import axios from "axios";
import CSSEComponent from "../../components/CSSEComponent";

function CSSEContainer() {
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);

    const searchHandler=(value) =>{
        setData(fullData.filter((d) => d.country.toLowerCase().startsWith(value.toLowerCase()) || (d.province && d.province.toLowerCase().startsWith(value.toLowerCase()))));
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "https://disease.sh/v2/jhucsse"
                );
                setData(response.data);
                setFullData(response.data);
            } catch (err) {
                console.error(err.message);
            }
        })();
    }, []);

    return <CSSEComponent data={data} searchHandler={searchHandler}/>;
}

export default CSSEContainer;
