export default { //全局变量定义
	state: {
		messageList: [],
		orderMessageList:[],
		getBlockRequest:{},
		driverPosition:{},
	},
	mutations: {
		recieveMessage(state, message) {
			state.messageList.push(message);
		},
		revieveGetBlockRequest(state, getBlockRequest) {
			state.getBlockRequest=getBlockRequest;
		},
		recieveOrderMessage(state, orderMessage) {
			state.orderMessageList=orderMessage;
		},
		recieveDriverPosition(state, driverPosition) {
			state.driverPosition=driverPosition;
		},
	},
	actions: {},
	getters: {
		getMessagesById: (state) => (id) => {
			return state.messageList.filter((message) => {
				return message.from == id || message.to == id
			})
		}
	}
}
