import React from "react";

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

function CompetitionComp(props) {
    const columns = [
        { name: "ID", selector: "id", sortable: true, omit: true },
        { name: "Name", selector: "name", sortable: true },
        {
            name: "Plan",
            selector: "plan",
            sortable: true,
            cell: (l) => <span>{l.plan.replace("_", " ")}</span>,
        },
        {
            name: "Current Season",
            selector: "currentSeason",
            sortable: true,
            cell: (l) => (
                <span>
                    {l.currentSeason
                        ? `${l.currentSeason.startDate} - ${l.currentSeason.endDate}`
                        : null}
                </span>
            ),
        },
        {
            name: "Available Seasons",
            selector: "numberOfAvailableSeasons",
            sortable: true,
        },
        {
            name: "Area",
            selector: "area",
            sortable: true,
            cell: (l) => (
                <span>
                    {l.area ? `${l.area.name} (${l.area.countryCode})` : null}
                </span>
            ),
        },
        { name: "Last Updated", selector: "lastUpdated", sortable: true },
    ];

    return (
        <DataTableExtensions columns={columns} data={props.data}>
            <DataTable
                highlightOnHover={true}
                noHeader={true}
                pagination={true}
                subHeader={true}
                pointerOnHover={true}
                expandableRowsHideExpander={true}
            />
        </DataTableExtensions>
    );
}

export default CompetitionComp;
