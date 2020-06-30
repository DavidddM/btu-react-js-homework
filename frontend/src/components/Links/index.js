import React, { useMemo } from "react";

import PropTypes from "prop-types";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

import { useHistory } from "react-router-dom";

function LinksComponent({ data }) {
    const history = useHistory();
    const columns = useMemo(() => [
        { name: "ID", selector: "id", sortable: true },
        { name: "URL", selector: "url", sortable: true },
        { name: "Rating", selector: "rating", sortable: true },
        {
            name: "Categories",
            selector: "categories",
            sortable: true,
            cell: (l) => (
                <span>
                    {l.categories.map((cat) => cat.categoryName).join(", ")}
                </span>
            ),
        },
        { name: "Create Date", selector: "created_at", sortable: true },
    ]);

    return (
        <DataTableExtensions columns={columns} data={data}>
            <DataTable
                highlightOnHover={true}
                noHeader={true}
                pagination={true}
                subHeader={true}
                pointerOnHover={true}
                onRowClicked={(e) => history.push(`/ratelink/${e.id}`)}
            />
        </DataTableExtensions>
    );
}

LinksComponent.propTypes = {
    data: PropTypes.array.isRequired,
};

export default LinksComponent;
