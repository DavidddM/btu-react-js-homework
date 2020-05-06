import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DataTable from "react-data-table-component";

const MainDiv = styled.div`
    margin-top: 25px;
`;

function CountriesComponent({ searchHandler, data }) {
    const columns = [
        { name: "Country", selector: "country", sortable: true },
        { name: "Total Cases", selector: "cases", sortable: true },
        { name: "Cases Today", selector: "todayCases", sortable: true },
        { name: "Active Cases", selector: "active", sortable: true },
        { name: "Total Deaths", selector: "deaths", sortable: true },
        { name: "Deaths Today", selector: "todayDeaths", sortable: true },
        { name: "Recovered", selector: "recovered", sortable: true },
    ];
    return (
        <MainDiv>
            <DataTable
                columns={columns}
                data={data}
                highlightOnHover={true}
                noHeader={true}
                pagination={true}
                subHeader={true}
                subHeaderComponent={
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            className="form-control"
                            placeholder="Search"
                            variant="outlined"
                            size="small"
                            style={{ margin: "5px" }}
                            onChange={({target})=> {searchHandler(target.value)}}
                        />
                    </div>
                }
            />
        </MainDiv>
    );
}

CountriesComponent.propTypes = {
    data: PropTypes.array.isRequired,
    searchHandler: PropTypes.func.isRequired
};

export default CountriesComponent;
