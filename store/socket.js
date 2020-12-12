export default { //全局变量定义
	state: {
		socket:null
	},
	mutations: {
		initSocket(state,socket) {
			state.socket=socket;
		}
	},
	actions: {}
}
