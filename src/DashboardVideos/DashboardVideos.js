import React from 'react';
import Search from './Search';
import VideosList from './VideosList';
import './DashboardVideos.css';

const DashboardVideos = props => {
	return (
		<div className="container">
			<Search 
				addVideosSearch={props.addVideosSearch}
			/>
			<VideosList videos={props.videos} />
		</div>
	)
}

export default DashboardVideos;