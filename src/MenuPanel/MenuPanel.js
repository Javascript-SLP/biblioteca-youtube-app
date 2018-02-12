import React from 'react';
import './MenuPanel.css';

const MenuPanel = (props) => {
	return (
		<div className='menu-panel'>
			<h1>{props.title}</h1>
		</div>
	);
};

export default MenuPanel;