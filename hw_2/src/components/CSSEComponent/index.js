import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DataTable from "react-data-table-component";

const MainDiv = styled.div`
    margin-top: 25px;
`;
const TotalSpan = styled.span`
    color: purple;
`; 
const RecoveredSpan = styled.span`
    color: green;
`;
const DeathSpan = styled.span`
    color: red;
`;
const ExpandableDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 15px 0 15px 0;
`;

function CSSEComponent({ searchHandler, data }) {
    const columns = [
        { name: "Country", selector: "country", sortable: true },
        { name: "Province", selector: "province", sortable: true },
    ];
    const ExpanableComponent = ({ data }) => (
        <ExpandableDiv>
            <div>Total Cases: <TotalSpan>{data.stats.confirmed}</TotalSpan></div>
            <div>
                Deaths: <DeathSpan>{data.stats.deaths}</DeathSpan>
            </div>
            <div>
                Recovered: <RecoveredSpan>{data.stats.recovered}</RecoveredSpan>
            </div>
        </ExpandableDiv>
    );
    return (
        <MainDiv>
            <DataTable
                columns={columns}
                data={data}
                highlightOnHover={true}
                noHeader={true}
                pointerOnHover={true}
                expandableRows={true}
                expandOnRowClicked={true}
                pagination={true}
                expandableRowsComponent={<ExpanableComponent />}
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

CSSEComponent.propTypes = {
    data: PropTypes.array.isRequired,
    searchHandler: PropTypes.func.isRequired,
};

export default CSSEComponent;
