<template>
	<view class="container">
		<!-- 搜索 -->
		<view class="" style="display: flex;align-items: center; box-sizing: border-box; padding-left: 30rpx; margin-top: 20rpx;">
			<image src="../../static/api.png" style="width: 132rpx; height: 42rpx;" mode=""></image>
			<view
				@click="toSearch"
				style="width: 400rpx; background-color: #f7f7f7; height: 50rpx; border-radius: 25rpx; display: flex;align-items: center; box-sizing: border-box; padding-left: 25rpx;"
			>
				<image src="../../static/api.png" style="width: 40rpx; height: 40rpx; margin-right: 10rpx; " mode=""></image>
				<text style="font-size:16rpx ; color: #bbb;">搜索商品</text>
			</view>
		</view>
		<swiper id="banner" style="height: calc(100vw / 750 * 340); margin-top: 20rpx;" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="500" :circular="true">
			<swiper-item item-id="banner_1">
				<view class="">
					<image
						src="http://new.lzyp178.com/uploads/attach/2020/10/20201018/93a28822eee873e7173cd122bb835062.png"
						style="width: 100vw;height: calc(100vw / 750 * 340);"
					></image>
				</view>
			</swiper-item>
			<swiper-item item-id="banner_2">
				<view class="">
					<image
						src="http://www.lzyp178.com/uploads/attach/2020/06/20200628/2e6396121eabdb91f62e1f814b72dc8c.jpg"
						style="width: 100vw;height: calc(100vw / 750 * 340);"
					></image>
				</view>
			</swiper-item>
			<!-- 	<swiper-item item-id="banner_3">
				<view class="">
					<image src="https://tcdc-backstage.oss-cn-beijing.aliyuncs.com/company/business/tongzhi.png" style="width: 100vw;height: 340rpx;"></image>
				</view>
			</swiper-item> -->
		</swiper>
		<uni-grid :column="4" :square="false" :showBorder="false">
			<uni-grid-item>
				<view style="text-align: center;display: flex; align-items: center; flex-direction: column; justify-content: center; height: 100%;">
					<view class="">
						<image
							src="http://www.lzyp178.com/uploads/attach/2020/04/20200405/902cfb352e52c479d3c5a21c667efbda.png"
							style="width: 82rpx; height: 82rpx;"
							mode=""
						></image>
					</view>
					<view class="" style="font-size: 24rpx; color: #333;">商品分类</view>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view style="text-align: center;display: flex; align-items: center; flex-direction: column; justify-content: center; height: 100%;">
					<view class="">
						<image
							src="http://www.lzyp178.com/uploads/attach/2020/04/20200405/8c62ec1807868855cbbfc8f4e10486c0.png"
							style="width: 82rpx; height: 82rpx;"
							mode=""
						></image>
					</view>
					<view class="" style="font-size: 24rpx; color: #333;">平台资讯</view>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view style="text-align: center;display: flex; align-items: center; flex-direction: column; justify-content: center; height: 100%;">
					<view class="">
						<image
							src="http://www.lzyp178.com/uploads/attach/2020/04/20200405/b9133f7dc9c2297c74c53c8ac92035f3.png"
							style="width: 82rpx; height: 82rpx;"
							mode=""
						></image>
					</view>
					<view class="" style="font-size: 24rpx; color: #333;">我要签到</view>
				</view>
			</uni-grid-item>
			<uni-grid-item>
				<view style="text-align: center;display: flex; align-items: center; flex-direction: column; justify-content: center; height: 100%;">
					<view class="">
						<image
							src="http://www.lzyp178.com/uploads/attach/2020/04/20200405/598c585738dbe405dd1e6bab16d429b3.png"
							style="width: 82rpx; height: 82rpx;"
							mode=""
						></image>
					</view>
					<view class="" style="font-size: 24rpx; color: #333;">砍价活动</view>
				</view>
			</uni-grid-item>
		</uni-grid>
		<view
			class=""
			style="display: flex;align-items: center; margin-top: 30rpx; border-top: 1rpx solid #eee;border-bottom: 1rpx solid #eee; padding: 20rpx; box-shadow: 0 5px 15px #f5f5f5;"
		>
			<view class="" style="padding-right: 20rpx; border-right: #bbb solid 1rpx;">
				<image src="https://new.lzyp178.com/static/xcx/images/news.png" style="width: 124rpx; height: 28rpx;" mode=""></image>
			</view>
			<view class="" style="font-size: 12rpx; color: #666;padding-left: 20rpx; flex: 1; box-sizing: border-box;">
				<view class="" style="height: 50rpx; width: 100%; line-height: 50rpx;">
					<swiper
						class="swiper"
						:indicator-dots="false"
						:autoplay="true"
						:interval="3000"
						:duration="400"
						:vertical="true"
						:circular="true"
						style="width: 100%; height: 100%;"
					>
						<swiper-item
							style="font-size: 24rpx; color: #666;text-overflow: ellipsis;
    white-space: nowrap; overflow:hidden;"
						>
						<view class=""  style="display: flex;align-items: center;justify-content: space-between; padding-right: 30rpx;">
							<text>祝贺脂大医体脂管理方案上市</text>
							<text
								style="width: 12rpx; height: 12rpx; border-top:1rpx solid #333;border-right:1rpx solid #333; transform: rotate(45deg); display: block;margin-left: 10rpx;"
							></text>
						</view>
						
						</swiper-item>
						<swiper-item
							style="font-size: 24rpx; color: #666;text-overflow: ellipsis;
    white-space: nowrap; overflow:hidden"
						>
						<view class=""  style="display: flex;align-items: center;justify-content: space-between; padding-right: 30rpx;">
							<text>全新政策升级改版隆重上线</text>
							<text
								style="width: 12rpx; height: 12rpx; border-top:1rpx solid #333;border-right:1rpx solid #333; transform: rotate(45deg); display: block;margin-left: 10rpx;"
							></text>
						</view>
							
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="" style=" padding:30rpx; box-sizing: border-box; margin-top: 10rpx;display: flex; align-items: center; justify-content: space-between;">
			<view class="">
				<view class="" style="font-size: 30rpx; font-weight: 700; color: #282828; margin-bottom: 4rpx;">快速选择</view>
				<view class="" style="font-size: 24rpx; color: #999;">数十种商品分类任您选择</view>
			</view>

			<view class="" style="font-size: 26rpx; color: #333;display: flex;align-items: center; padding-right: 20rpx;">
				更多
				<text
					style="width: 12rpx; height: 12rpx; border-top:1rpx solid #333;border-right:1rpx solid #333; transform: rotate(45deg); display: block;margin-left: 10rpx;"
				></text>
			</view>
		</view>
		<view class="">
			<scroll-view class="uni-scroll-view" :scroll-with-animation="true" scroll-x="true" scroll-left="120" style="width: auto; overflow: hidden;">
				<view
					class=""
					style="width: 100%; overflow: auto hidden; box-sizing: border-box;white-space: nowrap; padding-bottom: 20rpx; border-bottom: 1rpx solid #eee; padding-left: 20rpx;"
				>
					<view id="demo1" class="item">
						<image
							src="http://www.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg"
							mode=""
							style="width: 180rpx; height: 180rpx;"
						></image>
						<view class="title">脂大医</view>
					</view>
					<view id="demo1" class="item">
						<image
							src="http://www.lzyp178.com/uploads/attach/2020/07/20200707/f4562fc69a0a49243c18f392e07fd8f7.jpg"
							mode=""
							style="width: 180rpx; height: 180rpx;"
						></image>
						<view class="title">再生源黑芝麻乳</view>
					</view>
					<view id="demo1" class="item">
						<image
							src="http://www.lzyp178.com/uploads/attach/2020/08/20200821/7f37e32fd74190bfd67bb9c0207fe4cc.jpg"
							mode=""
							style="width: 180rpx; height: 180rpx;"
						></image>
						<view class="title">瀜栓</view>
					</view>
					<view id="demo1" class="item">
						<image
							src="http://www.lzyp178.com/uploads/attach/2020/07/20200708/65268d2db353b20a29ff9213608c48aa.jpg"
							mode=""
							style="width: 180rpx; height: 180rpx;"
						></image>
						<view class="title">糖宝康</view>
					</view>
					<view id="demo1" class="item">
						<image
							src="http://www.lzyp178.com/uploads/attach/2020/07/20200709/6acc30f83c7175d6c82578f1a26d1d3c.jpg"
							mode=""
							style="width: 180rpx; height: 180rpx;"
						></image>
						<view class="title">笑呤康植物凝萃</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="" style=" padding:30rpx; box-sizing: border-box; margin-top: 10rpx;display: flex; align-items: center; justify-content: space-between;">
			<view class="">
				<view class="" style="font-size: 30rpx; font-weight: 700; color: #282828; margin-bottom: 4rpx;">精品推荐</view>
				<view class="" style="font-size: 24rpx; color: #999;">诚意推荐品质商品</view>
			</view>

			<view class="" style="font-size: 26rpx; color: #333;display: flex;align-items: center; padding-right: 20rpx;">
				更多
				<text
					style="width: 12rpx; height: 12rpx; border-top:1rpx solid #333;border-right:1rpx solid #333; transform: rotate(45deg); display: block;margin-left: 10rpx;"
				></text>
			</view>
		</view>

		<view class="">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" style="margin-top: 10rpx;">
				<swiper-item>
					<image src="http://new.lzyp178.com/uploads/attach/2020/12/20201207/5b4ac87db283e881d776e608a4ca8958.jpg" mode="" style="width: 100%; height: 100%;"></image>
				</swiper-item>
				<swiper-item>
					<image src="http://new.lzyp178.com/uploads/attach/2020/12/20201207/bb9e4b92c40e3b3fcb764f61a8886fcc.jpg" mode="" style="width: 100%; height: 100%;"></image>
				</swiper-item>
				<swiper-item>
					<image src="http://www.lzyp178.com/uploads/attach/2020/07/20200707/a073c92fa6c224fae419f9b637e38994.jpg" mode="" style="width: 100%; height: 100%;"></image>
				</swiper-item>
				<swiper-item>
					<image src="http://www.lzyp178.com/uploads/attach/2020/07/20200708/7bfbb4fd7c56b0767b588b85ab92a6a3.jpg" mode="" style="width: 100%; height: 100%;"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="list">
			<view class="leftImg">
				<image
					src="http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg"
					mode=""
					style="width: 180rpx; height: 180rpx; margin-right: 20rpx;"
				></image>
			</view>
			<view class="under_line">
				<view class="">脂大医营养餐</view>
				<view class="" style="margin-top: 50rpx; font-size: 34rpx; color: #fc4141; font-weight: 700;">￥1180.00</view>
			</view>
		</view>
		<view class="list">
			<view class="leftImg">
				<image
					src="http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg"
					mode=""
					style="width: 180rpx; height: 180rpx; margin-right: 20rpx;"
				></image>
			</view>
			<view class="under_line">
				<view class="">脂大医营养餐</view>
				<view class="" style="margin-top: 50rpx; font-size: 34rpx; color: #fc4141; font-weight: 700;">￥1180.00</view>
			</view>
		</view>
		<view class="list">
			<view class="leftImg">
				<image
					src="http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg"
					mode=""
					style="width: 180rpx; height: 180rpx; margin-right: 20rpx;"
				></image>
			</view>
			<view class="under_line">
				<view class="">脂大医营养餐</view>
				<view class="" style="margin-top: 50rpx; font-size: 34rpx; color: #fc4141; font-weight: 700;">￥1180.00</view>
			</view>
		</view>
		<view class="list">
			<view class="leftImg">
				<image
					src="http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg"
					mode=""
					style="width: 180rpx; height: 180rpx; margin-right: 20rpx;"
				></image>
			</view>
			<view class="under_line">
				<view class="">脂大医营养餐</view>
				<view class="" style="margin-top: 50rpx; font-size: 34rpx; color: #fc4141; font-weight: 700;">￥1180.00</view>
			</view>
		</view>
		<view class="" style=" padding:30rpx; box-sizing: border-box; margin-top: 10rpx;display: flex; align-items: center; justify-content: space-between;">
			<view class="">
				<view class="" style="font-size: 30rpx; font-weight: 700; color: #282828; margin-bottom: 4rpx;">超值套组</view>
				<view class="" style="font-size: 24rpx; color: #999;">诚意精品超值套组</view>
			</view>

			<view class="" style="font-size: 26rpx; color: #333;display: flex;align-items: center; padding-right: 20rpx;">
				更多
				<text
					style="width: 12rpx; height: 12rpx; border-top:1rpx solid #333;border-right:1rpx solid #333; transform: rotate(45deg); display: block;margin-left: 10rpx;"
				></text>
			</view>
		</view>

		<view class="list">
			<view class="leftImg">
				<image
					src="http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg"
					mode=""
					style="width: 180rpx; height: 180rpx; margin-right: 20rpx;"
				></image>
			</view>
			<view class="under_line">
				<view class="">脂大医营养餐</view>
				<view class="" style="margin-top: 50rpx; font-size: 34rpx; color: #fc4141; font-weight: 700;">￥1180.00</view>
			</view>
		</view>
		<view class="list">
			<view class="leftImg">
				<image
					src="http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg"
					mode=""
					style="width: 180rpx; height: 180rpx; margin-right: 20rpx;"
				></image>
			</view>
			<view class="under_line">
				<view class="">脂大医营养餐</view>
				<view class="" style="margin-top: 50rpx; font-size: 34rpx; color: #fc4141; font-weight: 700;">￥1180.00</view>
			</view>
		</view>
		<view class="list">
			<view class="leftImg">
				<image
					src="http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg"
					mode=""
					style="width: 180rpx; height: 180rpx; margin-right: 20rpx;"
				></image>
			</view>
			<view class="under_line">
				<view class="">脂大医营养餐</view>
				<view class="" style="margin-top: 50rpx; font-size: 34rpx; color: #fc4141; font-weight: 700;">￥1180.00</view>
			</view>
		</view>
		<view class="list">
			<view class="leftImg">
				<image
					src="http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg"
					mode=""
					style="width: 180rpx; height: 180rpx; margin-right: 20rpx;"
				></image>
			</view>
			<view class="under_line">
				<view class="">脂大医营养餐</view>
				<view class="" style="margin-top: 50rpx; font-size: 34rpx; color: #fc4141; font-weight: 700;">￥1180.00</view>
			</view>
		</view>
		<!-- <custom-tab-bar direction="horizontal" :show-icon="false" :selected="selected" @onTabItemTap="onTabItemTap" /> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			nbTitle: '标题',
			titleIcon: '/static/logo.png',
			titleIconRadius: '20px',
			subtitleText: 'subtitleText',
			nbLoading: false,
			nbFrontColor: '#000000',
			nbBackgroundColor: '#ffffff',
			
		};
	},
	methods: {
		toSearch(){
			uni.navigateTo({
				url:'../goods_search/index'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
	display: none;
}
.list {
	display: flex;
	align-items: center;
	padding-left: 20rpx;
	margin-top: 20rpx;
	box-sizing: border-box;
	.under_line {
		border-bottom: 1rpx solid #f5f5f5;
		padding: 30rpx;
		padding-left: 0;
		flex: 1;
	}
}
.item {
	width: 180rpx;
	display: inline-block;
	margin-right: 18rpx;
	border-bottom: 4rpx solid #47b479;
	&:nth-child(3n) {
		border-bottom: 4rpx solid #ff6960;
	}
	&:nth-child(3n-1) {
		border-bottom: 4rpx solid #579afe;
	}
	// box-shadow: 0 40rpx 30rpx -10rpx #eee;
	.title {
		font-size: 24rpx;
		width: 100%;
		color: #282828;
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		border: 1rpx solid #f5f5f5;
		border-bottom: 0;
		border-top: 0;
		padding: 0 10rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
.uni-scroll-view::-webkit-scrollbar {
	/* 隐藏滚动条，但依旧具备可以滚动的功能 */
	display: none;
}
</style>
