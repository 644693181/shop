<template>
	<view class='productSort copy-data'>
		<view class='header acea-row row-center-wrapper'>
			<view class='acea-row row-between-wrapper input'>
				<text class='iconfont icon-sousuo'></text>
				<input type='text' placeholder='点击搜索商品信息' @confirm="searchSubmitValue" confirm-type='search' name="search"
				 placeholder-class='placeholder'></input>
			</view>
		</view>
		<view class='aside'>
			<view class='item acea-row row-center-wrapper' :class='index==navActive?"on":""' v-for="(item,index) in productList"
			 :key="index" @click='tap(index,"b"+index)'><text>{{item.cate_name}}</text></view>
		</view>
		<view class='conter'>
			<scroll-view scroll-y="true" :scroll-into-view="toView" :style='"height:"+height+"rpx;"' @scroll="scroll"
			 scroll-with-animation='true'>
				<block v-for="(item,index) in productList" :key="index">
					<view class='listw' :id="'b'+index">
						<view class='title acea-row row-center-wrapper'>
							<view class='line'></view>
							<view class='name'>{{item.cate_name}}</view>
							<view class='line'></view>
						</view>
						<view class='list acea-row'>
							<block v-for="(itemn,indexn) in item.children" :key="indexn">
								<navigator hover-class='none' :url='"/pages/goods_list/index?sid="+itemn.id+"&title="+itemn.cate_name + "&classifyId=" + item.id'class='item acea-row row-column row-middle'>
									<view class='picture'>
										<image :src='itemn.pic'></image>
									</view>
									<view class='name line1'>{{itemn.cate_name}}</view>
								</navigator>
							</block>
						</view>
					</view>
				</block>
				<view :style='"height:"+(height-300)+"rpx;"' v-if="number<15"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		getCategoryList
	} from '@/api/store.js';
	export default {
		data() {
			return {
				navlist: [],
				productList: [],
				navActive: 0,
				number: "",
				height: 0,
				hightArr: [],
				toView: ""
			}
		},
		onLoad(options) {
			// this.getAllCategory();
			let that = this
			setTimeout(function(){
				that.infoScroll();
			},500)
			this.productList = 
					 [
						{
							"id": 75,
							"pid": 0,
							"cate_name": "健康食品",
							"pic": "http://www.lzyp178.com/uploads/attach/2020/07/20200710/f72ba33638b682dc4b34c918445ad9c0.jpg",
							"children": [
								{
									"id": 77,
									"cate_name": "脂大医",
									"pic": "http://www.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg"
								},
								{
									"id": 76,
									"cate_name": "瀜栓",
									"pic": "http://www.lzyp178.com/uploads/attach/2020/08/20200821/7f37e32fd74190bfd67bb9c0207fe4cc.jpg"
								}
							]
						},
						{
							"id": 9,
							"pid": 0,
							"cate_name": "再生食品",
							"pic": "http://www.lzyp178.com/uploads/attach/2020/04/20200402/a7b035a7ad5403f528577133023a238f.jpg",
							"children": [
								{
									"id": 66,
									"cate_name": "再生源黑芝麻乳",
									"pic": "http://www.lzyp178.com/uploads/attach/2020/07/20200707/f4562fc69a0a49243c18f392e07fd8f7.jpg"
								},
								{
									"id": 30,
									"cate_name": "美宝牌胃肠胶囊",
									"pic": "http://new.lzyp178.com/uploads/attach/2020/10/20201016/9faefc3408d05d736c21c3c2673186fc.jpg"
								}
							]
						},
						{
							"id": 67,
							"pid": 0,
							"cate_name": "代谢管理",
							"pic": "http://www.lzyp178.com/uploads/attach/2020/06/20200609/118532242c2fc5b2afe60d904b3596d1.jpg",
							"children": [
								{
									"id": 73,
									"cate_name": "糖宝康",
									"pic": "http://www.lzyp178.com/uploads/attach/2020/07/20200708/65268d2db353b20a29ff9213608c48aa.jpg"
								},
								{
									"id": 74,
									"cate_name": "笑呤康植物凝萃",
									"pic": "http://www.lzyp178.com/uploads/attach/2020/07/20200709/6acc30f83c7175d6c82578f1a26d1d3c.jpg"
								}
							]
						},
						{
							"id": 12,
							"pid": 0,
							"cate_name": "皮肤护理",
							"pic": "http://www.lzyp178.com/uploads/attach/2020/04/20200402/d32fab271a3cbb56ecbf803d4d3d75de.jpg",
							"children": [
								{
									"id": 72,
									"cate_name": "美宝至美防晒乳",
									"pic": "http://www.lzyp178.com/uploads/attach/2020/06/20200618/030ea54a04a9b8ca62a13a4b22173c1b.jpg"
								},
								{
									"id": 33,
									"cate_name": "青春定格礼盒",
									"pic": "http://new.lzyp178.com/uploads/attach/2020/11/20201109/32592363965e54285537407457d65a5a.jpg"
								},
								{
									"id": 58,
									"cate_name": "唇部啫喱",
									"pic": "http://new.lzyp178.com/uploads/attach/2020/11/20201110/e23feb667334f5cdc1dec6bffcdaae02.jpg"
								},
								{
									"id": 53,
									"cate_name": "皮肤修护膏",
									"pic": "http://www.lzyp178.com/uploads/attach/2020/04/20200402/18823901b9a11f208e5af3b79153f161.jpg"
								},
								{
									"id": 59,
									"cate_name": "免洗膜膏",
									"pic": "http://new.lzyp178.com/uploads/attach/2020/11/20201110/ef18ef1b3bd6d9382d7bdb082411b9a7.jpg"
								},
								{
									"id": 54,
									"cate_name": "玫瑰纤手霜",
									"pic": "http://new.lzyp178.com/uploads/attach/2020/11/20201109/344889a1e0231d5d0d767247ee40873c.jpg"
								},
								{
									"id": 55,
									"cate_name": "眼部精华",
									"pic": "http://new.lzyp178.com/uploads/attach/2020/11/20201109/dbde1bf5d5beb286f74e627f25168f26.jpg"
								},
								{
									"id": 57,
									"cate_name": "温和柔肤液",
									"pic": "http://new.lzyp178.com/uploads/attach/2020/11/20201109/94477c3ef6d937a6b7073ff81164df1d.jpg"
								},
								{
									"id": 60,
									"cate_name": "柔澈洁面乳",
									"pic": "http://new.lzyp178.com/uploads/attach/2020/11/20201109/58525109395e813aedd63e3e6ab0a6d8.jpg"
								},
								{
									"id": 56,
									"cate_name": "紧致营养乳",
									"pic": "http://new.lzyp178.com/uploads/attach/2020/11/20201109/2ac7b468911106abf1e1ec69cd39d350.jpg"
								}
							]
						}
					]			
		},
		methods: {
			infoScroll: function() {
				let that = this;
				let len = that.productList.length;
				this.number = that.productList[len - 1].children.length;
				//设置商品列表高度
				uni.getSystemInfo({
					success: function(res) {
						that.height = (res.windowHeight) * (750 / res.windowWidth) - 98;
					},
				});
				let height = 0;
				let hightArr = [];
				for (let i = 0; i < len; i++) {
					//获取元素所在位置
					let query = uni.createSelectorQuery().in(this);
					let idView = "#b" + i;
					query.select(idView).boundingClientRect();
					query.exec(function(res) {
						let top = res[0].top;
						hightArr.push(top);
						that.hightArr = hightArr
					});
				};
			},
			tap: function(index, id) {
				this.toView = id;
				this.navActive = index;
			},
			getAllCategory: function() {
				let that = this;
				getCategoryList().then(res => {
					that.productList = res.data;
					setTimeout(function(){
						that.infoScroll();
					},500)
				})
			},
			scroll: function(e) {
				let scrollTop = e.detail.scrollTop;
				let scrollArr = this.hightArr;
				for (let i = 0; i < scrollArr.length; i++) {
					if (scrollTop >= 0 && scrollTop < scrollArr[1] - scrollArr[0]) {
						this.navActive = 0
					} else if (scrollTop >= scrollArr[i] - scrollArr[0] && scrollTop < scrollArr[i + 1] - scrollArr[0]) {
						this.navActive = i
					} else if (scrollTop >= scrollArr[scrollArr.length - 1] - scrollArr[0]) {
						this.navActive = scrollArr.length - 1
					}
				}
			},
			searchSubmitValue: function(e) {
				if (this.$util.trim(e.detail.value).length > 0)
					uni.navigateTo({
						url: '/pages/goods_list/index?searchValue=' + e.detail.value
					})
				else
					return this.$util.Tips({
						title: '请填写要搜索的产品信息'
					});
			},
		}
	}
</script>

<style scoped lang="scss">
	.productSort .header {
		width: 100%;
		height: 96rpx;
		background-color: #fff;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
		border-bottom: 1rpx solid #f5f5f5;
	}

	.productSort .header .input {
		width: 700rpx;
		height: 60rpx;
		background-color: #f5f5f5;
		border-radius: 50rpx;
		box-sizing: border-box;
		padding: 0 25rpx;
	}

	.productSort .header .input .iconfont {
		font-size: 35rpx;
		color: #555;
	}

	.productSort .header .input .placeholder {
		color: #999;
	}

	.productSort .header .input input {
		font-size: 26rpx;
		height: 100%;
		width: 597rpx;
	}

	.productSort .aside {
		position: fixed;
		width: 180rpx;
		left: 0;
		bottom: 0;
		top:0;
		background-color: #f7f7f7;
		overflow-y: auto;
		overflow-x: hidden;
		margin-top: 96rpx;
	}

	.productSort .aside .item {
		height: 100rpx;
		width: 100%;
		font-size: 26rpx;
		color: #424242;
	}

	.productSort .aside .item.on {
		background-color: #fff;
		border-left: 4rpx solid #fc4141;
		width: 100%;
		text-align: center;
		color: #fc4141;
		font-weight: bold;
	}

	.productSort .conter {
		margin: 96rpx 0 0 180rpx;
		padding: 0 14rpx;
		background-color: #fff;
	}

	.productSort .conter .listw {
		padding-top: 20rpx;
	}

	.productSort .conter .listw .title {
		height: 90rpx;
	}

	.productSort .conter .listw .title .line {
		width: 100rpx;
		height: 2rpx;
		background-color: #f0f0f0;
	}

	.productSort .conter .listw .title .name {
		font-size: 28rpx;
		color: #333;
		margin: 0 30rpx;
		font-weight: bold;
	}

	.productSort .conter .list {
		flex-wrap: wrap;
	}

	.productSort .conter .list .item {
		width: 177rpx;
		margin-top: 26rpx;
	}

	.productSort .conter .list .item .picture {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
	}

	.productSort .conter .list .item .picture image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.productSort .conter .list .item .name {
		font-size: 24rpx;
		color: #333;
		height: 56rpx;
		line-height: 56rpx;
		width: 120rpx;
		text-align: center;
	}
</style>
