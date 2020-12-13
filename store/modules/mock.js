export default { //全局变量定义
	namespaced: true,
	state: {
		classify: [{
				"id": 75,
				"pid": 0,
				"cate_name": "健康食品",
				"pic": "http://www.lzyp178.com/uploads/attach/2020/07/20200710/f72ba33638b682dc4b34c918445ad9c0.jpg",
				"children": [{
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
				"children": [{
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
				"children": [{
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
				"children": [{
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
		],
		
		productClassify: [{
				"id": 101,
				"store_name": "脂大医营养餐",
				"cate_id": "77",
				"image": "http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg",
				"sales": "157",
				"price": "1180.00",
				"vip_price": "891.00",
				"stock": 9843,
				"cost": "230.00",
				"activity": []
			},
			{
				"id": 113,
				"store_name": "脂大医感恩套餐（10盒）",
				"cate_id": "77",
				"image": "http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg",
				"sales": "1",
				"price": "11800.00",
				"vip_price": "7990.00",
				"stock": 99,
				"cost": "2300.00",
				"activity": []
			}
		],
		productDetail: {
			"uid": 0,
			"storeInfo": {
				"add_time": 1598599399,
				"browse": 0,
				"cate_id": "77",
				"code_path": "",
				"cost": "230.00",
				"ficti": 0,
				"give_integral": "0.00",
				"id": 101,
				"image": "http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg",
				"is_sub": 0,
				"is_bargain": null,
				"is_benefit": 0,
				"is_best": 1,
				"is_del": 0,
				"is_hot": 1,
				"is_new": 1,
				"is_postage": 0,
				"is_seckill": 0,
				"is_show": 1,
				"is_unsale": 0,
				"is_agent_stock": 0,
				"keyword": "代餐,减肥",
				"mer_id": 0,
				"mer_use": 0,
				"ot_price": "1180.00",
				"postage": "0.00",
				"price": "1180.00",
				"sales": 157,
				"slider_image": [
					"http://new.lzyp178.com/uploads/attach/2020/08/20200828/ca5b08a73eac0334a84d7be51f73b091.jpg",
					"http://new.lzyp178.com/uploads/attach/2020/08/20200828/2ecd844ae6fb236a1a2e16d7f18a2c70.jpg",
					"http://new.lzyp178.com/uploads/attach/2020/08/20200828/e68963e3f86e8eb6d4f5029fd5ecc311.jpg",
					"http://new.lzyp178.com/uploads/attach/2020/08/20200828/7f11a9eecc6ffdc5c484f07c7058a9fb.jpg"
				],
				"sort": 188,
				"stock": 9843,
				"store_info": "营养·让健康触手可及！",
				"store_name": "脂大医营养餐",
				"unit_name": "盒",
				"vip_price": "891.00",
				"spec_type": 1,
				"fsales": "157",
				"video_link": "",
				"image_base": "http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg",
				"code_base": "http://new.lzyp178.com/uploads/qrcode/101_product_detail_wap.jpg",
				"description": "<p><img src=\"http://www.lzyp178.com/uploads/attach/2020/08/20200828/8a440bfee3ab18116df8f3c5ab9759bd.jpg\"/></p><p><img src=\"http://www.lzyp178.com/uploads/attach/2020/08/20200828/2fb71279b1e61ded74fb6b1205b4961d.jpg\" style=\"\"/></p><p><img src=\"http://www.lzyp178.com/uploads/attach/2020/08/20200828/75a27e2c0d61dcfac4ba5808dfd16b35.jpg\" style=\"\"/></p><p><img src=\"http://www.lzyp178.com/uploads/attach/2020/08/20200828/987ea1c30786a5023016fb250afb998f.jpg\"/></p><p><img src=\"http://www.lzyp178.com/uploads/attach/2020/08/20200828/49df8c827df78b64bda190948f03d626.jpg\" style=\"\"/></p><p><img src=\"http://www.lzyp178.com/uploads/attach/2020/08/20200828/f4ecfcb9a51ffd9d1eae08e55a14acaa.jpg\" style=\"\"/></p><p><img src=\"http://www.lzyp178.com/uploads/attach/2020/08/20200828/1ac4ce5e357d14ae92705a7a599ac6ee.jpg\" style=\"\"/></p><p><img src=\"http://www.lzyp178.com/uploads/attach/2020/08/20200831/a054538890c13fe8e721daf76cbbb71a.jpg\"/></p><p><img src=\"http://www.lzyp178.com/uploads/attach/2020/08/20200828/df26cdb2c52dffee1df227048f15d17d.jpg\" style=\"\"/></p><p><img src=\"http://www.lzyp178.com/uploads/attach/2020/07/20200707/abe3376293d4b032d167a4c2828feb98.jpg\"/></p>",
				"userCollect": false,
				"userLike": false,
				"agent_stock": 9843
			},
			"similarity": [{
					"id": 101,
					"store_name": "脂大医营养餐",
					"image": "http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg",
					"price": "1180.00",
					"sales": 157,
					"ficti": 0
				},
				{
					"id": 100,
					"store_name": "瀜栓乌梢蛇牡蛎片",
					"image": "http://www.lzyp178.com/uploads/attach/2020/08/20200821/7f37e32fd74190bfd67bb9c0207fe4cc.jpg",
					"price": "399.00",
					"sales": 28,
					"ficti": 0
				},
				{
					"id": 113,
					"store_name": "脂大医感恩套餐（10盒）",
					"image": "http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg",
					"price": "11800.00",
					"sales": 1,
					"ficti": 0
				}
			],
			"productAttr": [{
				"product_id": 101,
				"attr_name": "规格",
				"attr_values": [
					"默认"
				],
				"type": 0,
				"attr_value": [{
					"attr": "默认",
					"check": false
				}]
			}],
			"productValue": {
				"默认": {
					"product_id": 101,
					"suk": "默认",
					"stock": 9843,
					"sales": 42,
					"price": "1180.00",
					"image": "http://www.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg",
					"unique": "6cd0dcb5",
					"cost": "230.00",
					"bar_code": "",
					"ot_price": "1180.00",
					"vip_price": "891.00",
					"level2_price": "699.00",
					"level3_price": "538.00",
					"level4_price": "420.00",
					"level5_price": "330.00",
					"weight": "1.50",
					"volume": "0.00",
					"brokerage": "0.00",
					"brokerage_two": "0.00",
					"brokerage_three": "0.00",
					"type": 0,
					"quota": 0,
					"quota_show": 0
				}
			},
			"priceName": 0,
			"reply": {
				"product_score": 5,
				"service_score": 5,
				"comment": "味道和减脂效果杠杠滴",
				"merchant_reply_content": null,
				"merchant_reply_time": "1970-01-01 08:00",
				"pics": null,
				"add_time": "2020-11-20 14:08",
				"nickname": "艾***************1",
				"avatar": "http://thirdwx.qlogo.cn/mmopen/UOJzh9Cm0yu541kx8aq7tczpySVicLvgrsLaZZ2DL5ODrKqqneZ19YT9TZVDzgLk9MNGupD6rHIsMg5EruZb2z6NKhZaT7yQr/132",
				"suk": "默认",
				"star": "5"
			},
			"replyCount": 7,
			"replyChance": "100.00",
			"mer_id": 0,
			"system_store": [],
			"good_list": [{
					"image": "http://new.lzyp178.com/uploads/attach/2020/08/20200828/317dc026cabf5a4fc8cbd74dc1ec86ac.jpg",
					"store_name": "脂大医营养餐",
					"price": "1180.00",
					"vip_price": "891.00",
					"id": 101,
					"ot_price": "1180.00",
					"activity": []
				},
				{
					"image": "http://www.lzyp178.com/uploads/attach/2020/07/20200707/f4562fc69a0a49243c18f392e07fd8f7.jpg",
					"store_name": "美宝再生源黑芝麻乳",
					"price": "333.00",
					"vip_price": "299.00",
					"id": 94,
					"ot_price": "333.00",
					"activity": []
				},
				{
					"image": "http://new.lzyp178.com/uploads/attach/2020/10/20201016/9faefc3408d05d736c21c3c2673186fc.jpg",
					"store_name": "美宝牌胃肠胶囊60粒装",
					"price": "336.00",
					"vip_price": "290.00",
					"id": 102,
					"ot_price": "336.00",
					"activity": []
				},
				{
					"image": "http://www.lzyp178.com/uploads/attach/2020/08/20200821/7f37e32fd74190bfd67bb9c0207fe4cc.jpg",
					"store_name": "瀜栓乌梢蛇牡蛎片",
					"price": "399.00",
					"vip_price": "368.00",
					"id": 100,
					"ot_price": "399.00",
					"activity": []
				},
				{
					"image": "http://www.lzyp178.com/uploads/attach/2020/07/20200708/65268d2db353b20a29ff9213608c48aa.jpg",
					"store_name": "糖宝康活性益生菌",
					"price": "528.00",
					"vip_price": "498.00",
					"id": 98,
					"ot_price": "528.00",
					"activity": []
				},
				{
					"image": "http://www.lzyp178.com/uploads/attach/2020/07/20200709/6acc30f83c7175d6c82578f1a26d1d3c.jpg",
					"store_name": "笑呤康益生菌植物凝萃复合粉",
					"price": "618.00",
					"vip_price": "588.00",
					"id": 99,
					"ot_price": "618.00",
					"activity": []
				},
				{
					"image": "http://new.lzyp178.com/uploads/attach/2020/11/20201110/e23feb667334f5cdc1dec6bffcdaae02.jpg",
					"store_name": "美宝唇部啫喱",
					"price": "270.00",
					"vip_price": "238.00",
					"id": 86,
					"ot_price": "270.00",
					"activity": []
				},
				{
					"image": "http://www.lzyp178.com/uploads/attach/2020/06/20200618/030ea54a04a9b8ca62a13a4b22173c1b.jpg",
					"store_name": "美宝至美防晒乳",
					"price": "275.00",
					"vip_price": "190.00",
					"id": 96,
					"ot_price": "275.00",
					"activity": []
				}
			],
			"mapKey": "CJGBZ-7FBPO-VJVWR-SQ3SP-XF6AS-3CBVU",
			"store_self_mention": 0,
			"activity": []

		}

	},

	mutations: {},
	actions: {}
}
