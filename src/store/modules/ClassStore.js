import axios from 'axios'

export default{
	state:{
		classes:[]
	},
	getters:{
		classes:state=>state.classes
	},
	mutations:{
		alertClasses(state,data){
			state.classes=data;
		}
	},
	actions:{
		findAllClasses(context){
			axios.get('http://192.168.127.1:3000/clazz/findAll').then(({data})=>{
				context.commit('alertClasses',data)
			})
		}
	}
}