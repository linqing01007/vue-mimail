import Mock from 'mockjs'

const data = Mock.mock('/api/getTestData', {
  navMenuItems: [
    {
      img: require('../assets/images/nav-img/nav-1.png'),
      name: '小米cc9',
      price: 1799,
      id: 1
    },
    {
      img: require('../assets/images/nav-img/nav-2.png'),
      name: '小米cc9',
      price: 1799,
      id: 2
    },
    {
      img: require('../assets/images/nav-img/nav-3.png'),
      name: '小米cc9',
      price: 1799,
      id: 3
    },
    {
      img: require('../assets/images/nav-img/nav-4.png'),
      name: '小米cc9',
      price: 1799,
      id: 4
    },
    {
      img: require('../assets/images/nav-img/nav-1.png'),
      name: '小米cc9',
      price: 1799,
      id: 5
    },
    {
      img: require('../assets/images/nav-img/nav-1.png'),
      name: '小米cc9',
      price: 1799,
      id: 6
    }
  ],
  slideItems: [
    {
      img: require('../assets/images/slider/slide-1.jpg'),
      id: 1
    },
    {
      img: require('../assets/images/slider/slide-2.jpg'),
      id: 2
    },
    {
      img: require('../assets/images/slider/slide-3.jpg'),
      id: 3
    },
    {
      img: require('../assets/images/slider/slide-4.jpg'),
      id: 4
    },
    {
      img: require('../assets/images/slider/slide-5.jpg'),
      id: 5
    }
  ]
})

export default data
