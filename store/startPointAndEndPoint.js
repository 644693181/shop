export default{ //全局变量定义
	state: {
		startPoint: {
				name: '请选择起点',
				desc: '',
				latitude: null,
				longitude: null
			},
		endPoint:{
				name: '请选择终点',
				desc: '',
				latitude: null,
				longitude: null
			},
		liftStart:null,
		liftEnd:null
	},
	mutations: {
		setStart(state,startPoint) {
			state.startPoint=startPoint;
		},
		setEnd(state,endPoint){
			state.endPoint=endPoint;
		},
		setLiftStart(state,startPoint){
			state.liftStart=startPoint;
		},
		setLiftEnd(state,endPoint){
			state.liftEnd=endPoint;
		}
	},
	actions: {}
}
