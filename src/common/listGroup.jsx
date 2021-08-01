import React, {Component} from 'react';

const Filter = (props) => {
    const {selectedGenre, items, onItemSelect} = props;
    return (
        <div className="col-2" style={{margin: 50}}>
            <div className="list-group">
                {items.map(item =>
                    <a key={item._id}
                       className={`list-group-item list-group-item-action ${selectedGenre === item.name ? "active" : ""}`}
                       onClick={() => onItemSelect(item)}
                       style={{cursor: "pointer"}}>
                        {item.name}</a>
                )}
            </div>
        </div>
    );
}

export default Filter;