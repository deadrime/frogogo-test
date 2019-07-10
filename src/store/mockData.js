const mockData = {
  accountAmount: 4700,
  usedAccountAmount: 0,
  freeShippingValue: 4000,
  deliveryPrice: 299,
  goldStatusBonus: 20,
  cartItems: [
    {
      id: 0,
      title: 'Стакан YPSILON BRIO CAPPUCCINO 220 мл',
      color: '#e1eb31',
      price: 1790,
      maxDiscount: 1000,
      quantity: 2,
      image: require('../assets/images/img-product-cart-01@2x.jpg'),
    },
    {
      id: 1,
      title: 'Одеяло Woolfield Sunrise',
      size: '170x200',
      price: 2000,
      maxDiscount: 1000,
      quantity: 1,
      image: require('../assets/images/img-product-cart-02@2x.jpg'),
    },
    {
      id: 2,
      title: 'Беспроводная колонка Goodyear Bluetooth speaker',
      price: 5000,
      maxDiscount: 2500,
      quantity: 1,
      image: require('../assets/images/img-product-cart-05@2x.jpg'),
    },
  ],
  gift: {
    id: 3,
    title: 'Очки солнцезащитные спортивные антибликовые с поляризацией',
    quantity: 1,
    image: require('../assets/images/img-product-cart-06@2x.jpg'),
    isGift: true,
  },
}

export default mockData