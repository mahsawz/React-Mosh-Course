import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class TableBody extends Component {

    renderCell = (movie, column) => {
        if (column.content)
            return column.content(movie)
        const cell = _.get(movie, column.col);
        if (column.col === "title")
            return <Link to={`/movies/${movie._id}`}> {cell} </Link>;
        return cell
    }

    createKey = (movie, column) => {
        return movie._id + (column.col || column.key)
    }

    render() {
        const {columns, movies} = this.props;
        return (<React.Fragment>
                <tbody>
                {movies.map(movie =>
                    <tr key={movie._id}>
                        {columns.map(column =>
                            <td key={this.createKey(movie, column)}>
                                {this.renderCell(movie, column)}
                            </td>)}
                    </tr>
                )}
                </tbody>
            </React.Fragment>
        )
    };
}

export default TableBody;