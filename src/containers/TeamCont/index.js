import React, { useEffect } from "react";
import { useAsyncGet } from "../../hooks/asyncGet";
import TeamComp from "../../components/TeamComp";

// როგორც არაერთხელ აღვნიშნე, უცუდესი API-ა. უფასო ვერსიაზე მარტო ინგლისის თიმებს გიბრუნებს, რანაირად არ ვატრიალე, ვერაფერი შევცვალე
// ენდფოინთების 90%-ზე დაშვება არ მაქვს, მიუხედავად რეგისტრაციისა
function TeamCont() {
    const { asyncExecution, data } = useAsyncGet();

    useEffect(() => {
        (async () => {
            asyncExecution("teams", (data) => data.teams);
        })();
    }, [asyncExecution]);

    return data && <TeamComp data={data} />;
}

export default TeamCont;
