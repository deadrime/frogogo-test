import { createElement as $ } from 'react'
import { getNoun, formatMoney } from '@/helpers'
import styles from './style.styl'
import RangeSlider from '@/components/RangeSlider'
import IconGold from '@/assets/svg/icon-gold.svg'
import cn from 'classnames'
import SubmitButton from '@/components/SubmitButton'

const countText = totalCount => `${totalCount} ${getNoun(totalCount, ['товар', 'товара', 'товаров'])} на сумму`

const deliveryText = deliveryPrice =>
  deliveryPrice > 0
    ? formatMoney(deliveryPrice)
    : 'Бесплатно'

const Total = ({
  className,
  totalAmount,
  totalCount,
  maxDiscount,
  accountAmount,
  usedAccountAmount,
  setAmount,
  deliveryPrice,
  freeShippingValue,
}) => {
  deliveryPrice = (totalAmount - usedAccountAmount) >= freeShippingValue ? 0 : deliveryPrice
  const totalPrice = totalAmount - usedAccountAmount + deliveryPrice
  const goldBonus = totalPrice / 100 * 20

  return (
    $('div', { className: cn(styles.wrapper, className) },
      $('div', { className: styles.textWrapper },
        $('span', { className: cn(styles.label, 'dark-blue') }, countText(totalCount)),
        $('span', { className: cn(styles.value, 'dark-blue') }, formatMoney(totalAmount))),
      $('span', { className: styles.sliderLabel }, 'Передвигая лягушку, выберите сколько рублей с личного счёта вы хотите потратить'),
      $(RangeSlider, {
        min: 0,
        max: Math.min(accountAmount, maxDiscount),
        value: usedAccountAmount,
        onChange: setAmount,
      }),
      $('div', { className: styles.textWrapper },
        $('span', { className: styles.label }, 'Используется рублей с личного счёта'),
        $('span', { className: styles.value }, formatMoney(usedAccountAmount))),
      $('div', { className: styles.deliveryWrapper },
        $('span', { className: styles.label }, 'Доставка'),
        $('span', { className: styles.value }, deliveryText(deliveryPrice))),
      $('div', { className: styles.textWrapper },
        $('span', { className: cn(styles.label, 'light-blue') }, 'Итого к оплате'),
        $('span', { className: cn(styles.value, 'light-blue') }, formatMoney(totalPrice))),
      $('div', { className: styles.goldWrapper },
        $('span', { className: cn(styles.label, 'gold') }, 
          $('span', null, '+ 20% от '),
          $(IconGold),
          $('span', null, ' GOLD статуса')),
        $('span', { className: cn(styles.value, 'gold') }, formatMoney(goldBonus))),
      $('div', { className: styles.textWrapper },
        $('span', { className: cn(styles.label, 'green') }, 'На личный счёт вернется'),
        $('span', { className: cn(styles.value, 'green') }, formatMoney(totalPrice + goldBonus))),
      $(SubmitButton, null, 'Оформить заказ')
    )
  )
}

export default Total