import React, { useEffect } from "react";
import { useAsyncGet } from "../../hooks/asyncGet";
import AreaComp from "../../components/AreaComp";

function AreaCont() {
    const { asyncExecution, data } = useAsyncGet();

    useEffect(() => {
        (async () => {
            asyncExecution("areas", (data) => data.areas);
        })();
    }, [asyncExecution]);

    return data && <AreaComp data={data} />;
}

export default AreaCont;
