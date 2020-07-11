import React from "react";

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

import styled from "styled-components";

const ExpandableDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 15px 0 15px 0;
`;

function AreaComp(props) {
    const columns = [
        { name: "ID", selector: "id", sortable: true, omit: true },
        { name: "Name", selector: "name", sortable: true },
        { name: "Website", selector: "website", sortable: true },
        { name: "Address", selector: "address", sortable: true },
        { name: "crestUrl", selector: "crestUrl", omit: true },
    ];
    const ExpanableComponent = ({ data }) => (
        <ExpandableDiv>
            {data.crestUrl ? (
                <img src={data.crestUrl} alt="logo" />
            ) : (
                <span>Sowwyyy :(</span>
            )}
        </ExpandableDiv>
    );
    return (
        <DataTableExtensions columns={columns} data={props.data}>
            <DataTable
                highlightOnHover={true}
                noHeader={true}
                pagination={true}
                subHeader={true}
                pointerOnHover={true}
                expandableRows={true}
                expandOnRowClicked={true}
                expandableRowsComponent={<ExpanableComponent />}
            />
        </DataTableExtensions>
    );
}

export default AreaComp;
