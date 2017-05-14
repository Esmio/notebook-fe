/*
 * 首页
 * @simon
 */
require('./scss/index.scss')
 import React, {Component} from 'react';
 import {render} from 'react-dom';
 import Widget from './widget';
 class Index extends Component{

 	render(){
 		return (
			<div className='container clearfix'>
 				<div className="blog-list">Hello hi</div>
 				<div className="widgets">
                	<Widget />
                </div>
            </div>
 		)
 	}
 }

 render(<Index />, document.getElementById('mod-index'))