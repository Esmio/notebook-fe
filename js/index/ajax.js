/*
 * 采用 axios 
 */
import axios from 'axios';
const githubApi = 'https://api.github.com/users/esmio'
export const getGithubData = ()=>{
	return axios.get(githubApi).then(data=>{
		return data
	})
}
 