import Vue from 'vue'
import Vuex from 'vuex'
import messageStore from './message.js'
import userInfoStore from './userInfo.js'
import socketStore from './socket.js'
import startPointAndEndPointStore from './startPointAndEndPoint.js'
import enterpriseUserStore from'./isEnterpriseUser.js'
Vue.use(Vuex)
const plugin = store => {
	let userInfo = uni.getStorageSync('userInfo');
	if (userInfo) {
		store.commit("login", JSON.parse(userInfo))
	}
	let storagedLocation = uni.getStorageSync('storagedLocation');
	if (storagedLocation) {
		store.commit("storageLocation", JSON.parse(storagedLocation))
	}
	store.subscribe((mutation, state) => {
		try {
			uni.setStorageSync("userInfo", state.userInfoStore.userInfo?JSON.stringify(state.userInfoStore.userInfo):null);
			uni.setStorageSync("storagedLocation", state.userInfoStore.storagedLocation?JSON.stringify(state.userInfoStore.storagedLocation):null);
		} catch (e) {

		}

	})
}
const store = new Vuex.Store({ //全局变量定义
	state: {},
	mutations: {},
	actions: {},
	modules: {
		messageStore: messageStore,
		userInfoStore: userInfoStore,
		socketStore: socketStore,
		startPointAndEndPointStore: startPointAndEndPointStore,
		enterpriseUserStore
	},
	plugins: [plugin]
})
export default store
