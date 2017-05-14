import React, {Component} from 'react';
import {render} from 'react-dom';
import {Row, Col} from 'antd';
import {getGithubData} from './ajax';
export default
class Widget extends Component{
	state={
		githubData : null
	}
	componentDidMount(){
		getGithubData().then(data=>{
			this.setState({
				githubData : data
			})
		})
	}
	renderGithubData(){
		let {githubData} = this.state
		if(githubData){
			let {avatar_url, public_repos, followers} = githubData
			console.log(public_repos)
			return [
				<Row key="1">
					<Row type="flex" justify="center" align="center" >
						<img className="avatar-img" src={avatar_url}/>
					</Row>
					<Row type="flex" justify="center" align="center" >
						<h2>Simon</h2>
					</Row>
				</Row>,
				<Row key="2" type="flex" justify="center" align="center">
					<Col span={12}>
						<Row type="flex" justify="center" align="center">
							<h3>{public_repos}</h3>
						</Row>
						<Row type="flex" justify="center" align="center">
							<h3>项目数</h3>
						</Row>
					</Col>
					<Col span={8}>
						<Row type="flex" justify="center" align="center">
							<h3>{followers}</h3>
						</Row>
						<Row type="flex" justify="center" align="center">
							<h3>关注数</h3>
						</Row>
					</Col>
				</Row>
			]
		}else{
			return null
		}
	}
	render(){
		return (
			<div className="w-container">
				<Row type="flex" justify="center" align="center">
					<h1>github名片</h1>
				</Row>
				{this.renderGithubData()}
			</div>
		)
		
	}
}