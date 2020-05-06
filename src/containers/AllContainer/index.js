import React, { useState, useEffect } from "react";
import axios from "axios";
import AllComponent from "../../components/AllComponent";

function AllContainer() {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "https://disease.sh/v2/all"
                );
                setData(Array(response.data));
            } catch (err) {
                console.error(err.message);
            }
        })();
    }, []);

    return <AllComponent data={data} />;
}

export default AllContainer;
