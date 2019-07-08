import { createElement as $ } from 'react'
import styles from './style.styl'
import IconTrash from '@/assets/svg/icon-cart-trash.svg'
import IconGold from '@/assets/svg/icon-gold.svg'
import { formatMoney } from '@/helpers'
import Quantity from '@/components/Quantity'

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
    minDiscount > 0 && $('div', { className: styles.itemPriceWrapper },
      $('span', { className: styles.itemPriceLabel }, 'Минимально к оплате с личного счета '),
      $('span', { className: styles.itemPriceAmount }, formatMoney(minDiscount))))

const GiftText = () =>
  $('div', { className: styles.gold },
    $('span', null, 'Подарок от '),
    $(IconGold),
    $('span', { className: styles.goldLabel }, ' GOLD статуса'))

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
  onDelete,
  onChangeQuantity,
  isGift,
}) =>
  $('div', { className: styles.item },
    $('header', { className: styles.itemHeader },
      $('a', { href: '/', className: styles.itemTitle }, title),
      $(IconTrash, {
        role: 'button',
        tabIndex: 0,
        className: styles.itemIcon,
        onClick: () => onDelete(id),
      })),
    $('div', { className: styles.itemContent },
      $('img', { src: image, className: styles.itemImage }),
      $('div', { className: styles.itemSettings },
        $('div', { className: styles.itemSpecifications },
          color && $(ItemColor, { color }),
          size && $(ItemSize, { size })),
        !isGift && $(Quantity, {
          value: quantity,
          onChange: value => onChangeQuantity(id, value)
        })),
      isGift
        ? $(GiftText)
        : $(ItemPrice, {
          quantity,
          price,
          minDiscount,
          maxDiscount,
        })))

export default CartItem