<template>
	<view class="container">
		<swiper id="banner" style="height: calc(100vw / 750 * 340);" :indicator-dots="false" :autoplay="true" :interval="3000"
		 :duration="500" :circular="true">
			<swiper-item item-id="banner_1">
				<view class="">
					<image src="https://tcdc-backstage.oss-cn-beijing.aliyuncs.com/zsx/20200926101052.jpg" style="width: 100vw;height: calc(100vw / 750 * 340);"></image>
				</view>
			</swiper-item>
			<swiper-item item-id="banner_2">
				<view class="">
					<image src="https://tcdc-backstage.oss-cn-beijing.aliyuncs.com/zsx/20200926123631.png" style="width: 100vw;height: calc(100vw / 750 * 340);"></image>
				</view>
			</swiper-item>
			<!-- 	<swiper-item item-id="banner_3">
				<view class="">
					<image src="https://tcdc-backstage.oss-cn-beijing.aliyuncs.com/company/business/tongzhi.png" style="width: 100vw;height: 340rpx;"></image>
				</view>
			</swiper-item> -->
		</swiper>
		<uni-grid :column="3" :square='false'>
			<uni-grid-item>
				<view style="text-align: center;display: flex; align-items: center; flex-direction: column; justify-content: center; height: 100%;">
					<view class="">
						第三方
					</view>
					<view class="">
						第三方
					</view>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view style="text-align: center;display: flex; align-items: center; flex-direction: column; justify-content: center; height: 100%;">
					<view class="">
						第三方
					</view>
					<view class="">
						第三方
					</view>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view style="text-align: center;display: flex; align-items: center; flex-direction: column; justify-content: center; height: 100%;">
					<view class="">
						第三方
					</view>
					<view class="">
						第三方
					</view>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view style="text-align: center;display: flex; align-items: center; flex-direction: column; justify-content: center; height: 100%;">
					<view class="">
						第三方
					</view>
					<view class="">
						第三方
					</view>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view style="text-align: center;display: flex; align-items: center; flex-direction: column; justify-content: center; height: 100%;">
					<view class="">
						第三方
					</view>
					<view class="">
						第三方
					</view>
				</view>
			</uni-grid-item>
		<uni-grid-item>
			<view style="text-align: center;display: flex; align-items: center; flex-direction: column; justify-content: center; height: 100%;">
				<view class="">
					第三方
				</view>
				<view class="">
					第三方
				</view>
			</view>
		</uni-grid-item>
		</uni-grid>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">

</style>
