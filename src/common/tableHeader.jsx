import React, {Component} from 'react';

class TableHeader extends Component {
    raiseSort = col => {
        const sortColumns = {...this.props.sortColumns};
        if (sortColumns.col === col) {
            sortColumns.order = sortColumns.order === "asc" ? "desc" : "asc";
        } else {
            sortColumns.col = col;
            sortColumns.order = "asc";
        }
        this.props.onSort(sortColumns);
    }

    setSortIcon = (column) => {
        const {sortColumns} = this.props;
        if (column.col !== sortColumns.col)
            return null;
        if (sortColumns.order === "asc")
            return <i style={{marginLeft: 3}} className="fa fa-sort-asc"/>
        return  <i style={{marginLeft: 3}} className="fa fa-sort-desc"/>
    }

    render() {
        return (<React.Fragment>
                <thead>
                <tr>
                    {this.props.columns.map(column => (
                        <th key={column.label || column.key}
                            className={"clickable"}
                            onClick={() => this.raiseSort(column.col)}
                            scope="col">
                            {column.label}
                            {this.setSortIcon(column)}
                        </th>
                    ))}
                </tr>
                </thead>
            </React.Fragment>
        );
    }
}

export default TableHeader;