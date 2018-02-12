import React, { Component } from 'react';
import MenuPanel from './MenuPanel/MenuPanel';
import DashboardVideos from './DashboardVideos/DashboardVideos';
import './DashboardApp.css';

class DashboardApp extends Component {
	constructor() {
		super();

		this.state = {
			data: [],
		};

	}

	addVideosSearch = event => {
		console.log(event.target.value);
		this.fetchDataVideos(event.target.value);
	}

	fetchDataVideos(query) {
		console.log(query);
		const API_KEY = 'AIzaSyBLpdSHjmB7ZctSem1SemM1q_Lyxh0MGRQ';
		const URL = "https://www.googleapis.com/youtube/v3/search?key="+API_KEY+"&part=snippet&maxResults=9&type=video&q="+query;
		fetch(URL)
			.then(res => res.json())
			.then(res => this.setState({
				data: res.items,
			}))
	}

	render() {
		return (
			<div className='dashboard'>
				<MenuPanel 
					title="Biblioteca"
				/>
				<DashboardVideos 
					addVideosSearch={this.addVideosSearch}
					videos={this.state.data}
				/>
			</div>
		);
	}
}

export default DashboardApp;