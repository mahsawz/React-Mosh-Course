import React, {Component} from 'react';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import MoviesTable from '../components/moviesTable';
import {paginate} from '../utils/paginate';
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1,
        genres: getGenres(),
        selectedGenre: "All Genres",
        sortColumns: {col: 'title', order: 'asc'}
    };

    styles = {
        fontWeight: 'bold',
        fontSize: 20
    };

    handleDelete = mov => {
        const newMovies = this.state.movies.filter(m => m._id !== mov);
        this.setState({movies: newMovies});
    };

    handleLike = mov => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(mov);
        movies[index].liked = movies[index].liked !== true;
        this.setState({movies})
    };

    handleChangePage = p => {
        this.setState({currentPage: p});
    };

    handleGenresSelect = i => {
        this.setState({selectedGenre: i.name, currentPage: 1});
    };

    handleSort = sortColumns => {
        this.setState({sortColumns});
    };


    getPageData = (allMovies, selectedGenre, sortColumns, currentPage, pageSize) => {
        // filter by genres:
        const filteredMovie = (selectedGenre !== "All Genres") ? allMovies.filter(m => m.genre.name === selectedGenre) : allMovies;
        // sort by columns:
        const sortedMovie = _.orderBy(filteredMovie, [sortColumns.col], [sortColumns.order])
        // paginate by pageNo:
        const movies = paginate(sortedMovie, currentPage, pageSize);

        return {totalCount: filteredMovie.length, movies: movies}
    }

    render() {
        const {currentPage, pageSize, itemCount, movies: allMovies, genres, selectedGenre, sortColumns} = this.state;

        const result = this.getPageData(allMovies, selectedGenre, sortColumns, currentPage, pageSize);

        if (itemCount === 0)
            return <h3 className="m-5">There is no movies in the database.</h3>;

        return (
            <div style={this.state.styles} className="container row">
                <ListGroup
                    items={[{_id: "0", name: "All Genres"}, ...genres]}
                    selectedGenre={selectedGenre}
                    onItemSelect={this.handleGenresSelect}
                />
                <div className="col-8">
                    <h4 className="m-3">Showing {result.totalCount} movies in the database</h4>
                    <hr/>
                    <MoviesTable
                        movies={result.movies}
                        sortColumns={sortColumns}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        currentPage={currentPage}
                        itemCount={result.totalCount}
                        pageSize={pageSize}
                        onChangePage={this.handleChangePage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;