import React, { useState, useEffect } from "react";
import axios from "axios";
import CountriesComponent from "../../components/CountriesComponent";

function CountriesContainer() {
    // ვინაიდან სერჩის ველი მაქვს დამატებული, ცალკე ამ ენდფოინთს პარამეტრს აღარ გადავცემ და არსებულ დატაში ვეძებ
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([])

    const searchHandler=(value) =>{
        setData(fullData.filter((d) => d.country.toLowerCase().startsWith(value.toLowerCase())));
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "https://corona.lmao.ninja/v2/countries"
                );
                setData(response.data);
                setFullData(response.data);
            } catch (err) {
                console.error(err.message);
            }
        })();
    }, []);

    return <CountriesComponent data={data} searchHandler={searchHandler} />;
}

export default CountriesContainer;
