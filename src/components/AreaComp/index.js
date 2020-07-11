import React from "react";

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

function AreaComp(props) {
    const columns = [
        { name: "ID", selector: "id", sortable: true, omit: true },
        { name: "Name", selector: "name", sortable: true },
        { name: "Country Code", selector: "countryCode", sortable: true },
        { name: "Parent Area", selector: "parentArea", sortable: true },
        { name: "Parent Area", selector: "parentArea", sortable: true },
    ];

    return (
        <DataTableExtensions columns={columns} data={props.data}>
            <DataTable
                highlightOnHover={true}
                noHeader={true}
                pagination={true}
                subHeader={true}
                pointerOnHover={true}
            />
        </DataTableExtensions>
    );
}

export default AreaComp;
