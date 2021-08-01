import React, {Component} from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
    const {data, onSort, sortColumns, columns} = props;
    return (
        <table className="table ml-7 mr-7">
            <TableHeader onSort={onSort}
                         columns={columns}
                         sortColumns={sortColumns}/>
            <TableBody columns={columns}
                       movies={data}/>
        </table>
    )
};

export default Table;