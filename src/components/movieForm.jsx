import React from 'react';

const MovieForm = (props) => {
    return (
        <div style={{marginTop: 50, marginLeft: 100}}>
            <h1>
                Movies Form {props.match.params.id}
            </h1>
            <button className={"btn btn-sm btn-primary"} onClick={() => props.history.push("/movies")}>Save</button>
        </div>
    );
}

export default MovieForm;