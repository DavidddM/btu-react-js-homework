import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DataTable from "react-data-table-component";

const MainDiv = styled.div`
    margin-top: 25px;
`;

function AllComponent({ data }) {
    const columns = [
        { name: "Total Cases", selector: "cases", sortable: false },
        { name: "Cases Today", selector: "todayCases", sortable: false },
        { name: "Deaths", selector: "deaths", sortable: false },
        { name: "Deaths Today", selector: "todayDeaths", sortable: false },
        { name: "Recovered", selector: "recovered", sortable: false },
        { name: "Active", selector: "active", sortable: false },
        { name: "Critical", selector: "critical", sortable: false },
        {
            name: "Affected Countries",
            selector: "affectedCountries",
            sortable: false,
        },
    ];

    return (
        <MainDiv>
            <DataTable
                columns={columns}
                data={data}
                highlightOnHover={true}
                noHeader={true}
            />
        </MainDiv>
    );
}

AllComponent.propTypes = {
    data: PropTypes.array.isRequired,
};

export default AllComponent;
