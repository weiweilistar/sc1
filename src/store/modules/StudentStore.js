import axios from 'axios'
import Vue from 'vue'
export default{

	state:{
		students:[]
	},
	getters:{
		students:state=>state.students
	},
	mutations:{
		alterStudent(state,data){
			state.students=data
		}
	},
	actions:{
		findAllStudent(context){
			axios.get('http://192.168.127.1:3000/student/findAll').then(({data})=>{
				context.commit('alterStudent',data)
			})
		},
		saveStudent(context,form){
			//告诉调用者是成功还是失败
			return new Promise(function(resolve,reject){
				axios.post('http://192.168.127.1:3000/student/save',form).then((result)=>{
				//保存成功刷新页面
				context.dispatch('findAllStudent')
				resolve(result)
				}).catch(function(error){
					reject(error)
				})
			})
		},
		betchDeleteStudent(context,ids){
			return new Promise(function(resolve,reject){
				axios.post('http://192.168.127.1:3000/student/batchDelete',{ids:ids}).then((result)=>{
					context.dispatch('findAllStudent')
					resolve(result);
				}).catch(function(error){
					reject(error);
				})
			})
		}
		
	}
}