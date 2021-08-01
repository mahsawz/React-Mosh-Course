import React, {Component} from 'react';
import _, {ceil} from 'lodash';

const Pagination = (props) => {
    const {itemCount, pageSize, currentPage} = props;
    const pageCount = Math.ceil(itemCount / pageSize);
    const pages = _.range(1, pageCount + 1);

    if (pageCount === 1) return null;
    return (
        <React.Fragment>
            <nav aria-label="...">
                <ul className="pagination pagination-lg">
                    {pages.map(page =>
                        <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}
                            aria-current="page">
                            <a className="page-link" onClick={() => props.onChangePage(page)}>{page}</a></li>)}
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default Pagination;
 