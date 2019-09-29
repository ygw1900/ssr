import Vue from 'vue'
import Axios from 'axios'

let axios = {
	async get(url, params){
		let resData = {}
		await Axios.get(url, params, {header: {
			Authorization: 'Bear ' + '123fjisjsidJIDISHijfijis23i939439'
		}}).then(res=>{
			resData = res
		}).catch(err=>{
			console.log(err)
		})
		return resData
	},
	async post(url, params){
		let resData = {}
		await Axios.post(url, params, {headers: {
			Authorization: 'Bear ' + '123fjisjsidJIDISHijfijis23i939439'
		}}).then(res=>{
			resData = res
		}).catch(err=>{
			console.log(err)
		})
		return resData
	}
}

if (process.server) {
  global.axios = axios
} else {
  window.axios = axios
}