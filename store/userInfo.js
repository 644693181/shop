export default { //全局变量定义
	state: {
		userInfo: null,
		storagedLocation: null,
		nowCity: null,
		systemInfo: null,
		hasOrder: [],
		hasScanInfo: false,
		journeyInfo: null,
		enterpressPassengerInfo: null
	},
	mutations: {
		login(state, userInfo) {
			state.userInfo = userInfo;

			// console.log('userInfo改变 ==>',JSON.parse(JSON.stringify(userInfo)));
		},
		logout(state) {
			state.userInfo = null
		},
		setHasOrder(state, hasOrder) {
			state.hasOrder = hasOrder
		},
		storageLocation(state, newStoragedLocation) {
			state.storagedLocation = newStoragedLocation;
		},
		setNowCity(state, nowCity) {
			state.nowCity = nowCity;
		},
		setSystemInfo(state, sysInfo) {
			state.systemInfo = sysInfo;
		},
		setHasScanInfo(state, payLoad) {
			state.hasScanInfo = payLoad
		},
		setJourneyInfo(state, payLoad) {
			state.journeyInfo = payLoad
		},
		setEnterprisePassengerInfo(state, payLoad) {
			state.enterpressPassengerInfo = payLoad
			console.log('setEnterprisePassengerInfo ==>',JSON.parse(JSON.stringify(payLoad)));
		}

	},
	actions: {}
}
