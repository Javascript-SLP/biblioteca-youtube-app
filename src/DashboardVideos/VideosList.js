import React from 'react';
import './VideosList.css';

const VideosList = props => {
	const videos = props.videos.map(video => (
		<iframe
			className="video-list__iframe"
			key={video.id.videoId}
			src={"https://www.youtube.com/embed/" + video.id.videoId }
			title={video.snippet.title}
		/>
	));
	console.log(props);
	return (
		<div className='video-list'>
			{videos}
		</div>
	);
}

export default VideosList;
