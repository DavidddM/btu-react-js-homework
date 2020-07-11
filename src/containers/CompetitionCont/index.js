import React, { useEffect } from "react";
import { useAsyncGet } from "../../hooks/asyncGet";
import CompetitionComp from "../../components/CompetitionComp";

function CompetitionCont() {
    const { asyncExecution, data } = useAsyncGet();

    useEffect(() => {
        (async () => {
            asyncExecution("competitions", (data) => data.competitions);
        })();
    }, [asyncExecution]);

    return data && <CompetitionComp data={data} />;
}

export default CompetitionCont;
