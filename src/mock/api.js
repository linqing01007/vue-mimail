import Mock from 'mockjs'

const getPostData = function (dataStr, name) {
  const values = dataStr
    .replace(/\{(\w+)\}/g, '$1')
    .replace(/"/g, '')
    .split(',')
  for (const value of values) {
    const [key, val] = value.split(':')
    if (key === name) return val
  }
  return ''
}

Mock.mock('/api/user/login', 'post', (options) => {
  console.log('mock api user login post')
  return {
    status: 0,
    data: {
      id: 12,
      username: 'admin',
      email: 'admin@51.com',
      phone: null,
      role: 0,
      createTime: 1479048325000,
      updateTime: 1479048325000
    }
  }
})

Mock.mock('/api/user/logout', 'post', {
  status: 0
})

Mock.mock(/\/api\/products\?/, 'get', (options) => {
  console.log('mock api/products?categoryId= && pageSize=')
  return {
    status: 0,
    data: {
      total: 19,
      list: [
        {
          id: 30,
          categoryId: 100012,
          name: '小米CC9',
          subtitle: '3200万+4800万 前后双旗舰相机',
          mainImage:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png',
          price: 1799.0,
          status: 1,
          imageHost: 'http://img.springboot.cn'
        },
        {
          id: 31,
          categoryId: 100012,
          name: '小米CC9e',
          subtitle: '3200万+4800万 前后双旗舰相机',
          mainImage:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png',
          price: 1299.0,
          status: 1,
          imageHost: 'http://img.springboot.cn'
        },
        {
          id: 32,
          categoryId: 100012,
          name: '小米CC9 美图定制版',
          subtitle: '直出超质感美颜',
          mainImage:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png',
          price: 2599.0,
          status: 1,
          imageHost: 'http://img.springboot.cn'
        },
        {
          id: 33,
          categoryId: 100012,
          name: '小米9',
          subtitle: '小米9 战斗天使',
          mainImage:
            'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png',
          price: 2599.0,
          status: 1,
          imageHost: 'http://img.springboot.cn'
        },
        {
          id: 34,
          categoryId: 100012,
          name: '小米9 Pro 5G',
          subtitle: '快的不只是5G',
          mainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41c566d825a3ae3b5751a78d4c7cffdb.png',
          price: 3699.0,
          status: 1,
          imageHost: 'http://img.springboot.cn'
        },
        {
          id: 35,
          categoryId: 100012,
          name: '小米MIX Alpha',
          subtitle: '5G环绕屏概念手机',
          mainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png',
          price: 19999.0,
          status: 1,
          imageHost: 'http://img.springboot.cn'
        },
        {
          id: 35,
          categoryId: 100012,
          name: '小米MIX Alpha',
          subtitle: '5G环绕屏概念手机',
          mainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png',
          price: 19999.0,
          status: 1,
          imageHost: 'http://img.springboot.cn'
        },
        {
          id: 35,
          categoryId: 100012,
          name: '小米MIX Alpha',
          subtitle: '5G环绕屏概念手机',
          mainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png',
          price: 19999.0,
          status: 1,
          imageHost: 'http://img.springboot.cn'
        }
      ],
      pageNum: 1,
      pageSize: 6,
      size: 6,
      startRow: 1,
      endRow: 6,
      pages: 4,
      prePage: 0,
      nextPage: 2,
      isFirstPage: true,
      isLastPage: false,
      hasPreviousPage: false,
      hasNextPage: true,
      navigatePages: 8,
      navigatepageNums: [1, 2, 3, 4],
      navigateFirstPage: 1,
      navigateLastPage: 4
    }
  }
})

// 商品详情Detail
Mock.mock(/\/api\/products\/\d+/, 'get', (options) => {
  console.log('mock api/products/id')
  return {
    status: 0,
    data: {
      id: 35,
      categoryId: 100012,
      name: '小米MIX Alpha',
      subtitle: '5G环绕屏概念手机',
      mainImage:
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png',
      subImages: null,
      detail: null,
      price: 19999.0,
      stock: 9999613,
      status: 1,
      createTime: '2019-09-05 12:12:06',
      updateTime: '2019-09-05 12:12:09',
      imageHost: 'http://img.springboot.cn',
      parentCategoryId: 100002
    }
  }
})

Mock.mock('/api/user', 'get', {
  status: 0,
  data: {
    id: 3,
    username: 'admin',
    password: '',
    email: 'admin2@qq.com',
    phone: null,
    question: null,
    answer: null,
    role: 0,
    createTime: 1565075520000,
    updateTime: 1565075520000
  }
})

// 购物车相关接口 start

Mock.mock('/api/carts/products/sum', 'get', { status: 0, data: 2 })

Mock.mock('/api/carts', 'post', (options) => {
  console.log('mock api/carts post')
  return {
    status: 0,
    data: {
      cartProductVoList: [
        {
          productId: 36,
          quantity: 1,
          productName: 'Redmi Note 8 Pro',
          productSubtitle: '6400万全场景四摄',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
          productPrice: 1399.0,
          productStatus: 1,
          productTotalPrice: 1399.0,
          productStock: 9999999,
          productSelected: true
        },
        {
          productId: 37,
          quantity: 1,
          productName: 'Redmi Note 8',
          productSubtitle: '千元4800万四摄',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
          productPrice: 999.0,
          productStatus: 1,
          productTotalPrice: 999.0,
          productStock: 9999999,
          productSelected: true
        },
        {
          productId: 38,
          quantity: 1,
          productName: 'Redmi K20 Pro 尊享版',
          productSubtitle: '骁龙855 Plus， 弹出全面屏',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
          productPrice: 2699.0,
          productStatus: 1,
          productTotalPrice: 2699.0,
          productStock: 9999999,
          productSelected: true
        }
      ],
      cartTotalPrice: 5097.0,
      imageHost: 'http://img.springboot.cn',
      selectedAll: true,
      cartTotalQuantity: 3
    }
  }
})

Mock.mock('/api/carts', 'get', (options) => {
  console.log('mock api/carts get')
  return {
    status: 0,
    data: {
      cartProductVoList: [
        {
          productId: 36,
          quantity: 1,
          productName: 'Redmi Note 8 Pro',
          productSubtitle: '6400万全场景四摄',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
          productPrice: 1399.0,
          productStatus: 1,
          productTotalPrice: 1399.0,
          productStock: 9999999,
          productSelected: true
        },
        {
          productId: 37,
          quantity: 1,
          productName: 'Redmi Note 8',
          productSubtitle: '千元4800万四摄',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
          productPrice: 999.0,
          productStatus: 1,
          productTotalPrice: 999.0,
          productStock: 9999999,
          productSelected: true
        },
        {
          productId: 38,
          quantity: 1,
          productName: 'Redmi K20 Pro 尊享版',
          productSubtitle: '骁龙855 Plus， 弹出全面屏',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
          productPrice: 2699.0,
          productStatus: 1,
          productTotalPrice: 2699.0,
          productStock: 9999999,
          productSelected: true
        }
      ],
      cartTotalPrice: 5097.0,
      imageHost: 'http://img.springboot.cn',
      selectedAll: true,
      cartTotalQuantity: 3
    }
  }
})

Mock.mock(/\/api\/carts\/.+/, 'put', (options) => {
  console.log('mock api/carts put')
  return {
    status: 0,
    data: {
      cartProductVoList: [
        {
          productId: 36,
          quantity: Mock.Random.integer(2, 8),
          productName: 'Redmi Note 8 Pro',
          productSubtitle: '6400万全场景四摄',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
          productPrice: 1399.0,
          productStatus: 1,
          productTotalPrice: 2798.0,
          productStock: 9999999,
          productSelected: true
        },
        {
          productId: 37,
          quantity: 1,
          productName: 'Redmi Note 8',
          productSubtitle: '千元4800万四摄',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
          productPrice: 999.0,
          productStatus: 1,
          productTotalPrice: 999.0,
          productStock: 9999999,
          productSelected: true
        },
        {
          productId: 38,
          quantity: 1,
          productName: 'Redmi K20 Pro 尊享版',
          productSubtitle: '骁龙855 Plus， 弹出全面屏',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
          productPrice: 2699.0,
          productStatus: 1,
          productTotalPrice: 2699.0,
          productStock: 9999999,
          productSelected: true
        }
      ],
      cartTotalPrice: 6496.0,
      imageHost: 'http://img.springboot.cn',
      selectedAll: true,
      cartTotalQuantity: 4
    }
  }
})

Mock.mock(/\/api\/carts\/.+/, 'delete', (options) => {
  console.log('mock api/carts delete')
  return {
    status: 0,
    data: {
      cartProductVoList: [
        {
          productId: 37,
          quantity: Mock.Random.integer(1, 6),
          productName: 'Redmi Note 8',
          productSubtitle: '千元4800万四摄',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
          productPrice: 999.0,
          productStatus: 1,
          productTotalPrice: 999.0,
          productStock: 9999999,
          productSelected: true
        },
        {
          productId: 38,
          quantity: 1,
          productName: 'Redmi K20 Pro 尊享版',
          productSubtitle: '骁龙855 Plus， 弹出全面屏',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
          productPrice: 2699.0,
          productStatus: 1,
          productTotalPrice: 2699.0,
          productStock: 9999999,
          productSelected: true
        }
      ],
      cartTotalPrice: 3698.0,
      imageHost: 'http://img.springboot.cn',
      selectedAll: true,
      cartTotalQuantity: 2
    }
  }
})

Mock.mock('/api/carts/selectAll', 'put', options => {
  console.log('mock api carts selectall put')
  return {
    status: 0,
    data: {
      cartProductVoList: [
        {
          productId: 37,
          quantity: 1,
          productName: 'Redmi Note 8',
          productSubtitle: '千元4800万四摄',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
          productPrice: 999.0,
          productStatus: 1,
          productTotalPrice: 999.0,
          productStock: 9999999,
          productSelected: true
        },
        {
          productId: 38,
          quantity: 1,
          productName: 'Redmi K20 Pro 尊享版',
          productSubtitle: '骁龙855 Plus， 弹出全面屏',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
          productPrice: 2699.0,
          productStatus: 1,
          productTotalPrice: 2699.0,
          productStock: 9999999,
          productSelected: true
        }
      ],
      cartTotalPrice: 3698.0,
      imageHost: 'http://img.springboot.cn',
      selectedAll: true,
      cartTotalQuantity: 2
    }
  }
})

Mock.mock('/api/carts/unSelectAll', 'put', options => {
  console.log('mock api carts unselectall')
  return {
    status: 0,
    data: {
      cartProductVoList: [
        {
          productId: 37,
          quantity: 1,
          productName: 'Redmi Note 8',
          productSubtitle: '千元4800万四摄',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
          productPrice: 999.0,
          productStatus: 1,
          productTotalPrice: 999.0,
          productStock: 9999999,
          productSelected: false
        },
        {
          productId: 38,
          quantity: 1,
          productName: 'Redmi K20 Pro 尊享版',
          productSubtitle: '骁龙855 Plus， 弹出全面屏',
          productMainImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
          productPrice: 2699.0,
          productStatus: 1,
          productTotalPrice: 2699.0,
          productStock: 9999999,
          productSelected: false
        }
      ],
      cartTotalPrice: 0,
      imageHost: 'http://img.springboot.cn',
      selectedAll: false,
      cartTotalQuantity: 2
    }
  }
})

// 购物车相关 end

// 获取地址列表
Mock.mock(/\/api\/shippings?.+/, 'get', {
  status: 0,
  data: {
    total: 2,
    list: [
      {
        id: 9435,
        userId: 3,
        receiverName: '阿萨德',
        receiverPhone: null,
        receiverMobile: '13412334566',
        receiverProvince: '天津',
        receiverCity: '天津',
        receiverDistrict: '河北',
        receiverAddress: 'hhh',
        receiverZip: '144444',
        createTime: null,
        updateTime: null
      },
      {
        id: 9504,
        userId: 3,
        receiverName: '小玲',
        receiverPhone: null,
        receiverMobile: '18216320011',
        receiverProvince: '北京',
        receiverCity: '北京',
        receiverDistrict: '天津',
        receiverAddress: '小上广场',
        receiverZip: '524233',
        createTime: null,
        updateTime: null
      }
    ],
    pageNum: 1,
    pageSize: 10,
    size: 2,
    startRow: 1,
    endRow: 2,
    pages: 1,
    prePage: 0,
    nextPage: 0,
    isFirstPage: true,
    isLastPage: true,
    hasPreviousPage: false,
    hasNextPage: false,
    navigatePages: 8,
    navigatepageNums: [1],
    navigateFirstPage: 1,
    navigateLastPage: 1
  }
})

// 修改地址
Mock.mock(/\/api\/shippings/, 'post', { status: 0, data: '更新地址成功' })

// 增加地址
Mock.mock(/\/api\/shippings\/\d*/, 'put', {
  status: 0,
  msg: '新建地址成功',
  data: { shippingId: 9509 }
})

// 删除地址
Mock.mock(/\/api\/shippings\/\d*/, 'delete', {
  status: 0,
  data: '删除地址成功'
})

// 创建订单
Mock.mock('/api/orders', 'post', (options) => {
  console.log('mock api/orders post')
  return {
    status: 0,
    data: {
      orderNo: 1629964443706,
      payment: 3698.0,
      paymentType: 1,
      paymentTypeDesc: '在线支付',
      postage: 0,
      status: 10,
      statusDesc: '未支付',
      paymentTime: '',
      sendTime: '',
      endTime: '',
      closeTime: '',
      createTime: '',
      orderItemVoList: [
        {
          orderNo: 1629964443706,
          productId: 37,
          productName: 'Redmi Note 8',
          productImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
          currentUnitPrice: 999.0,
          quantity: 1,
          totalPrice: 999.0,
          createTime: ''
        },
        {
          orderNo: 1629964443706,
          productId: 38,
          productName: 'Redmi K20 Pro 尊享版',
          productImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
          currentUnitPrice: 2699.0,
          quantity: 1,
          totalPrice: 2699.0,
          createTime: ''
        }
      ],
      imageHost: null,
      shippingId: 9435,
      receiverName: '阿萨德',
      shippingVo: {
        receiverName: '阿萨德',
        receiverPhone: null,
        receiverMobile: '13412334566',
        receiverProvince: '天津',
        receiverCity: '天津',
        receiverDistrict: '河北',
        receiverAddress: 'hhh',
        receiverZip: '144446'
      }
    }
  }
})

// 订单列表
Mock.mock(/\/api\/orders\?/, 'get', (options) => {
  console.log('mock api/orders/? get 订单列表')
  return {
    status: 0,
    data: {
      total: 6939,
      list: [
        {
          orderNo: 1629964443706,
          payment: 3698.0,
          paymentType: 1,
          paymentTypeDesc: '在线支付',
          postage: 0,
          status: 10,
          statusDesc: '未支付',
          paymentTime: '',
          sendTime: '',
          endTime: '',
          closeTime: '',
          createTime: '2021-08-26 15:54:03',
          orderItemVoList: [
            {
              orderNo: 1629964443706,
              productId: 37,
              productName: 'Redmi Note 8',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
              currentUnitPrice: 999.0,
              quantity: 1,
              totalPrice: 999.0,
              createTime: '2021-08-26 15:54:03'
            },
            {
              orderNo: 1629964443706,
              productId: 38,
              productName: 'Redmi K20 Pro 尊享版',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
              currentUnitPrice: 2699.0,
              quantity: 1,
              totalPrice: 2699.0,
              createTime: '2021-08-26 15:54:03'
            }
          ],
          imageHost: null,
          shippingId: 9435,
          receiverName: '阿萨德',
          shippingVo: {
            receiverName: '阿萨德',
            receiverPhone: null,
            receiverMobile: '13412334566',
            receiverProvince: '天津',
            receiverCity: '天津',
            receiverDistrict: '河北',
            receiverAddress: 'hhh',
            receiverZip: '144446'
          }
        },
        {
          orderNo: 1629895602974,
          payment: 6995.0,
          paymentType: 1,
          paymentTypeDesc: '在线支付',
          postage: 0,
          status: 10,
          statusDesc: '未支付',
          paymentTime: '',
          sendTime: '',
          endTime: '',
          closeTime: '',
          createTime: '2021-08-25 20:46:42',
          orderItemVoList: [
            {
              orderNo: 1629895602974,
              productId: 39,
              productName: 'Redmi Note 7',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg',
              currentUnitPrice: 1099.0,
              quantity: 3,
              totalPrice: 3297.0,
              createTime: '2021-08-25 20:46:43'
            },
            {
              orderNo: 1629895602974,
              productId: 38,
              productName: 'Redmi K20 Pro 尊享版',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
              currentUnitPrice: 2699.0,
              quantity: 1,
              totalPrice: 2699.0,
              createTime: '2021-08-25 20:46:43'
            },
            {
              orderNo: 1629895602974,
              productId: 37,
              productName: 'Redmi Note 8',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
              currentUnitPrice: 999.0,
              quantity: 1,
              totalPrice: 999.0,
              createTime: '2021-08-25 20:46:43'
            }
          ],
          imageHost: null,
          shippingId: 9504,
          receiverName: '小玲',
          shippingVo: {
            receiverName: '小玲',
            receiverPhone: null,
            receiverMobile: '18216320011',
            receiverProvince: '北京',
            receiverCity: '北京',
            receiverDistrict: '天津',
            receiverAddress: '小上广场',
            receiverZip: '524233'
          }
        },
        {
          orderNo: 1629895563043,
          payment: 11474.0,
          paymentType: 1,
          paymentTypeDesc: '在线支付',
          postage: 0,
          status: 10,
          statusDesc: '未支付',
          paymentTime: '',
          sendTime: '',
          endTime: '',
          closeTime: '',
          createTime: '2021-08-25 20:46:03',
          orderItemVoList: [
            {
              orderNo: 1629895563043,
              productId: 41,
              productName: 'Redmi 7A',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg',
              currentUnitPrice: 579.0,
              quantity: 1,
              totalPrice: 579.0,
              createTime: '2021-08-25 20:46:03'
            },
            {
              orderNo: 1629895563043,
              productId: 42,
              productName: '小米CC9',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd25cc614a670f4d5546fe82e239ef86.jpg',
              currentUnitPrice: 1799.0,
              quantity: 4,
              totalPrice: 7196.0,
              createTime: '2021-08-25 20:46:03'
            },
            {
              orderNo: 1629895563043,
              productId: 43,
              productName: '小米9 Pro 5G',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg',
              currentUnitPrice: 3699.0,
              quantity: 1,
              totalPrice: 3699.0,
              createTime: '2021-08-25 20:46:03'
            }
          ],
          imageHost: null,
          shippingId: 9504,
          receiverName: '小玲',
          shippingVo: {
            receiverName: '小玲',
            receiverPhone: null,
            receiverMobile: '18216320011',
            receiverProvince: '北京',
            receiverCity: '北京',
            receiverDistrict: '天津',
            receiverAddress: '小上广场',
            receiverZip: '524233'
          }
        },
        {
          orderNo: 1629894968199,
          payment: 1399.0,
          paymentType: 1,
          paymentTypeDesc: '在线支付',
          postage: 0,
          status: 10,
          statusDesc: '未支付',
          paymentTime: '',
          sendTime: '',
          endTime: '',
          closeTime: '',
          createTime: '2021-08-25 20:36:08',
          orderItemVoList: [
            {
              orderNo: 1629894968199,
              productId: 36,
              productName: 'Redmi Note 8 Pro',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
              currentUnitPrice: 1399.0,
              quantity: 1,
              totalPrice: 1399.0,
              createTime: '2021-08-25 20:36:08'
            }
          ],
          imageHost: null,
          shippingId: 9504,
          receiverName: '小玲',
          shippingVo: {
            receiverName: '小玲',
            receiverPhone: null,
            receiverMobile: '18216320011',
            receiverProvince: '北京',
            receiverCity: '北京',
            receiverDistrict: '天津',
            receiverAddress: '小上广场',
            receiverZip: '524233'
          }
        },
        {
          orderNo: 1629894788237,
          payment: 1399.0,
          paymentType: 1,
          paymentTypeDesc: '在线支付',
          postage: 0,
          status: 10,
          statusDesc: '未支付',
          paymentTime: '',
          sendTime: '',
          endTime: '',
          closeTime: '',
          createTime: '2021-08-25 20:33:08',
          orderItemVoList: [
            {
              orderNo: 1629894788237,
              productId: 36,
              productName: 'Redmi Note 8 Pro',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
              currentUnitPrice: 1399.0,
              quantity: 1,
              totalPrice: 1399.0,
              createTime: '2021-08-25 20:33:08'
            }
          ],
          imageHost: null,
          shippingId: 9435,
          receiverName: '阿萨德',
          shippingVo: {
            receiverName: '阿萨德',
            receiverPhone: null,
            receiverMobile: '13412334566',
            receiverProvince: '天津',
            receiverCity: '天津',
            receiverDistrict: '河北',
            receiverAddress: 'hhh',
            receiverZip: '144446'
          }
        },
        {
          orderNo: 1629894437934,
          payment: 2798.0,
          paymentType: 1,
          paymentTypeDesc: '在线支付',
          postage: 0,
          status: 10,
          statusDesc: '未支付',
          paymentTime: '',
          sendTime: '',
          endTime: '',
          closeTime: '',
          createTime: '2021-08-25 20:27:17',
          orderItemVoList: [
            {
              orderNo: 1629894437934,
              productId: 36,
              productName: 'Redmi Note 8 Pro',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg',
              currentUnitPrice: 1399.0,
              quantity: 2,
              totalPrice: 2798.0,
              createTime: '2021-08-25 20:27:18'
            }
          ],
          imageHost: null,
          shippingId: 9435,
          receiverName: '阿萨德',
          shippingVo: {
            receiverName: '阿萨德',
            receiverPhone: null,
            receiverMobile: '13412334566',
            receiverProvince: '天津',
            receiverCity: '天津',
            receiverDistrict: '河北',
            receiverAddress: 'hhh',
            receiverZip: '144446'
          }
        },
        {
          orderNo: 1629884064908,
          payment: 8893.0,
          paymentType: 1,
          paymentTypeDesc: '在线支付',
          postage: 0,
          status: 10,
          statusDesc: '未支付',
          paymentTime: '',
          sendTime: '',
          endTime: '',
          closeTime: '',
          createTime: '2021-08-25 17:34:24',
          orderItemVoList: [
            {
              orderNo: 1629884064908,
              productId: 38,
              productName: 'Redmi K20 Pro 尊享版',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
              currentUnitPrice: 2699.0,
              quantity: 2,
              totalPrice: 5398.0,
              createTime: '2021-08-25 17:34:24'
            },
            {
              orderNo: 1629884064908,
              productId: 40,
              productName: 'Redmi 7',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aab8a7fa9005ef918c9aa2d5f17c806.jpg',
              currentUnitPrice: 699.0,
              quantity: 5,
              totalPrice: 3495.0,
              createTime: '2021-08-25 17:34:24'
            }
          ],
          imageHost: null,
          shippingId: 9435,
          receiverName: '阿萨德',
          shippingVo: {
            receiverName: '阿萨德',
            receiverPhone: null,
            receiverMobile: '13412334566',
            receiverProvince: '天津',
            receiverCity: '天津',
            receiverDistrict: '河北',
            receiverAddress: 'hhh',
            receiverZip: '144446'
          }
        },
        {
          orderNo: 1629880590329,
          payment: 579.0,
          paymentType: 1,
          paymentTypeDesc: '在线支付',
          postage: 0,
          status: 10,
          statusDesc: '未支付',
          paymentTime: '',
          sendTime: '',
          endTime: '',
          closeTime: '',
          createTime: '2021-08-25 16:36:30',
          orderItemVoList: [
            {
              orderNo: 1629880590329,
              productId: 41,
              productName: 'Redmi 7A',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg',
              currentUnitPrice: 579.0,
              quantity: 1,
              totalPrice: 579.0,
              createTime: '2021-08-25 16:36:30'
            }
          ],
          imageHost: null,
          shippingId: 9435,
          receiverName: '阿萨德',
          shippingVo: {
            receiverName: '阿萨德',
            receiverPhone: null,
            receiverMobile: '13412334566',
            receiverProvince: '天津',
            receiverCity: '天津',
            receiverDistrict: '河北',
            receiverAddress: 'hhh',
            receiverZip: '144446'
          }
        },
        {
          orderNo: 1629880498014,
          payment: 2378.0,
          paymentType: 1,
          paymentTypeDesc: '在线支付',
          postage: 0,
          status: 10,
          statusDesc: '未支付',
          paymentTime: '',
          sendTime: '',
          endTime: '',
          closeTime: '',
          createTime: '2021-08-25 16:34:57',
          orderItemVoList: [
            {
              orderNo: 1629880498014,
              productId: 42,
              productName: '小米CC9',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd25cc614a670f4d5546fe82e239ef86.jpg',
              currentUnitPrice: 1799.0,
              quantity: 1,
              totalPrice: 1799.0,
              createTime: '2021-08-25 16:34:58'
            },
            {
              orderNo: 1629880498014,
              productId: 41,
              productName: 'Redmi 7A',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg',
              currentUnitPrice: 579.0,
              quantity: 1,
              totalPrice: 579.0,
              createTime: '2021-08-25 16:34:58'
            }
          ],
          imageHost: null,
          shippingId: 9435,
          receiverName: '阿萨德',
          shippingVo: {
            receiverName: '阿萨德',
            receiverPhone: null,
            receiverMobile: '13412334566',
            receiverProvince: '天津',
            receiverCity: '天津',
            receiverDistrict: '河北',
            receiverAddress: 'hhh',
            receiverZip: '144446'
          }
        },
        {
          orderNo: 1629880442716,
          payment: 2699.0,
          paymentType: 1,
          paymentTypeDesc: '在线支付',
          postage: 0,
          status: 10,
          statusDesc: '未支付',
          paymentTime: '',
          sendTime: '',
          endTime: '',
          closeTime: '',
          createTime: '2021-08-25 16:34:02',
          orderItemVoList: [
            {
              orderNo: 1629880442716,
              productId: 38,
              productName: 'Redmi K20 Pro 尊享版',
              productImage:
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg',
              currentUnitPrice: 2699.0,
              quantity: 1,
              totalPrice: 2699.0,
              createTime: '2021-08-25 16:34:02'
            }
          ],
          imageHost: null,
          shippingId: 9435,
          receiverName: '阿萨德',
          shippingVo: {
            receiverName: '阿萨德',
            receiverPhone: null,
            receiverMobile: '13412334566',
            receiverProvince: '天津',
            receiverCity: '天津',
            receiverDistrict: '河北',
            receiverAddress: 'hhh',
            receiverZip: '144446'
          }
        }
      ],
      pageNum: 1,
      pageSize: 10,
      size: 10,
      startRow: 1,
      endRow: 10,
      pages: 694,
      prePage: 0,
      nextPage: 2,
      isFirstPage: true,
      isLastPage: false,
      hasPreviousPage: false,
      hasNextPage: true,
      navigatePages: 8,
      navigatepageNums: [1, 2, 3, 4, 5, 6, 7, 8],
      navigateFirstPage: 1,
      navigateLastPage: 8
    }
  }
})

// 获取订单信息
Mock.mock(/\/api\/orders\/\d+/, 'get', (options) => {
  console.log('mock api/orders/d+ get 订单详情')
  return {
    status: 0,
    data: {
      orderNo: 1629965066075,
      payment: 999.0,
      paymentType: 1,
      paymentTypeDesc: '在线支付',
      postage: 0,
      status: 10,
      statusDesc: '未支付',
      paymentTime: '',
      sendTime: '',
      endTime: '',
      closeTime: '',
      createTime: '',
      orderItemVoList: [
        {
          orderNo: 1629965066075,
          productId: 37,
          productName: 'Redmi Note 8',
          productImage:
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg',
          currentUnitPrice: 999.0,
          quantity: 1,
          totalPrice: 999.0,
          createTime: ''
        }
      ],
      imageHost: null,
      shippingId: 9435,
      receiverName: '阿萨德',
      shippingVo: {
        receiverName: '阿萨德',
        receiverPhone: null,
        receiverMobile: '13412334566',
        receiverProvince: '天津',
        receiverCity: '天津',
        receiverDistrict: '河北',
        receiverAddress: 'hhh',
        receiverZip: '144446'
      }
    }
  }
})

// 微信支付
Mock.mock('/api/pay', 'post', (options) => {
  const payType = getPostData(options.body, 'payType')
  if (payType === 1) {
    return {
      status: 0,
      data: {
        content:
          '<form id=\'bestPayForm\' name="punchout_form" method="post" action="https://openapi.alipay.com//gateway.do?charset=utf-8&method=alipay.trade.page.pay&sign=d%2F9JA%2BkLJENCoZGgBfxS0c1l4L%2FpYnutW8SsKYdgk47%2F%2BvJn1OchBzgWC2gNlboJO3siFuZISM%2FeRvzPpOCl%2FD2yr%2BS05eXh4GBwn4kCHmMZ2YogjQBtE5h3DHc0ie2TyzlkRXDnTI4K4KtQwUryONSYlboJ%2B4tOi7lC87ybPP3n0CVYAWdH5OYJzJtuZ9Au4yzv6ONlVt0AQL9o1sZAanNd3MXjM6iQPwrPuetcs3ULxj7%2BWplorSzN%2Fi4qi8lbXVHgMcUyZ2NQEr7IfByan44jGIpBAXL1YgNcH8cfQBz06DdTdOU3RtlzH%2B5XmPmPz1sYtQ5MODhdYM2We4Wt9A%3D%3D&return_url=http%3A%2F%2Fmi.futurefe.com%2F%23%2Forder%2Flist&notify_url=http%3A%2F%2Fmall-pre.springboot.cn%2Fpay%2Fnotify&app_id=2018062960540016&sign_type=RSA2&version=1.0&timestamp=2021-08-26+16%3A23%3A36">\n<input type="hidden" name="biz_content" value="{&quot;out_trade_no&quot;:&quot;1629965066075&quot;,&quot;total_amount&quot;:&quot;0.01&quot;,&quot;subject&quot;:&quot;vue-高仿小米商城&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}">\n<input type="submit" value="立即支付" style="display:none" >\n</form>\n<script>document.getElementById(\'bestPayForm\').submit();</script>'
      }
    }
  } else {
    return {
      status: 0,
      data: { content: 'weixin://wxpay/bizpayurl?pr=DutbUMOzz' }
    }
  }
})

// 支付宝支付
Mock.mock('')
