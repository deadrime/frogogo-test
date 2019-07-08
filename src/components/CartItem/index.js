import { createElement as $ } from 'react'
import styles from './style.styl'
import IconTrash from '@/assets/svg/icon-cart-trash.svg'
import { formatMoney } from '@/helpers'

const Quantity = ({ id, quantity, changeItemQuantity }) =>
  $('div', { className: styles.itemQuantity },
    $('button', {
      className: styles.itemControl,
      onClick: () => changeItemQuantity(id, -1)
    }, '−'),
    $('span', { className: styles.itemQuantityValue }, quantity),
    $('button', {
      className: styles.itemControl,
      onClick: () => changeItemQuantity(id, 1),
    }, '+'))

const ItemColor = ({ color }) =>
  $('div', { className: styles.itemColorWrapper },
    $('span', { className: styles.itemSpecificationsLabel }, 'Цвет'),
    $('div', {
      style: {
        backgroundColor: color,
      },
      className: styles.itemColorDroplet,
    }))

const ItemSize = ({ size }) =>
  $('div', { className: styles.itemSizeWrapper },
    $('span', { className: styles.itemSpecificationsLabel }, 'Размер'),
    $('span', { className: styles.itemSize }, size))

const ItemPrice = ({
  quantity,
  price,
  minDiscount,
  maxDiscount,
}) =>
  $('div', { className: styles.itemPrice },
    $('div', { className: styles.itemPriceWrapper },
      $('span', { className: styles.itemPriceFullLabel }, 'Полная цена '),
      $('span', { className: styles.itemPriceFull }, formatMoney(price * quantity))),
    $('div', { className: styles.itemPriceWrapper },
      $('span', { className: styles.itemPriceLabel }, 'Можно оплатить с личного счёта '),
      $('span', { className: styles.itemPriceAmount }, formatMoney(maxDiscount * quantity))),
    !!minDiscount && $('div', { className: styles.itemPriceWrapper },
      $('span', { className: styles.itemPriceLabel }, 'Минимально к оплате с личного счета '),
      $('span', { className: styles.itemPriceAmount }, formatMoney(minDiscount))))

const CartItem = ({
  id,
  title,
  image,
  color,
  size,
  quantity,
  price,
  minDiscount,
  maxDiscount,
  deleteCartItem,
  changeItemQuantity,
}) =>
  $('div', { className: styles.item },
    $('header', { className: styles.itemHeader },
      $('a', { href: '/', className: styles.itemTitle }, title),
      $(IconTrash, {
        role: 'button',
        tabIndex: 0,
        className: styles.itemIcon,
        onClick: () => deleteCartItem(id)
      })),
    $('div', { className: styles.itemContent },
      $('img', { src: image, className: styles.itemImage }),
      $('div', { className: styles.itemSettings },
        $('div', { className: styles.itemSpecifications },
          color && $(ItemColor, { color }),
          size && $(ItemSize, { size })),
        $(Quantity, { id, quantity, changeItemQuantity })),
      $(ItemPrice, {
        quantity,
        price,
        minDiscount,
        maxDiscount,
      })))

export default CartItem