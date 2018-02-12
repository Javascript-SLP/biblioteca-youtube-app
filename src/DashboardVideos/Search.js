import React from 'react';

const Search = props => {
	return <input type="text" placeholder="Buscar" onChange={props.addVideosSearch}/>;
}

export default Search;