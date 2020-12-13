<template>
	<view>
		<zy-search :is-focus="false" :theme="themeClass" :show-want="true" :speechEngine="speechEngine"
		:hot-list="hotList" @getSearchText="getSearchText" isFocus></zy-search>
		<view class="">
			水电费
		</view>
	</view>
</template>

<script>
	import zySearch from './zy-search.vue'
	export default {
		components: {
			zySearch
		},
		data() {
			return {
				themeClass: 'block',
				speechEngine: 'baidu', //语音识别引擎
				hotList: ['栏目1','栏目2','栏目3','栏目4']	//初始化推荐列表
			}
		},
		methods: {
			getSearchText(e) {
				uni.showToast({
					title:'回调的搜索信息: ' + e,
					icon:"none"
				})
			}
		},
	}
</script>

<style lang="scss">

</style>
