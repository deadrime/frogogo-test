import { createElement as $ } from 'react'
import styles from './style.styl'
import cn from 'classnames'

const Quantity = ({ value, onChange, className }) =>
  $('div', { className: cn(styles.itemQuantity, className) },
    $('button', {
      className: styles.itemControl,
      onClick: () => onChange(-1)
    }, '−'),
    $('span', { className: styles.itemQuantityValue }, value),
    $('button', {
      className: styles.itemControl,
      onClick: () => onChange(1),
    }, '+'))

export default Quantity