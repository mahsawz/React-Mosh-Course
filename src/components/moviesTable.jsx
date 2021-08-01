import React, {Component} from 'react';
import Like from './common/like';
import Table from "./common/table";

class MoviesTable extends Component {
    state = {
        columns: [
            {col: 'title', label: 'Title'},
            {col: 'genre.name', label: 'Genre'},
            {col: 'numberInStock', label: 'Stock'},
            {col: 'dailyRentalRate', label: 'Rate'},
            {key: 'like', content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>},
            {
                key: 'delete',
                content: movie => <button onClick={() => this.props.onDelete(movie._id)}
                                          className="btn btn-sm btn-danger">Delete</button>
            }]
    }

    render() {
        const {movies, onSort, sortColumns} = this.props;
        return (
            <Table columns={this.state.columns}
                   sortColumns={sortColumns}
                   onSort={onSort}
                   data={movies}/>
        );
    }
}

export default MoviesTable;