import { createElement as $ } from 'react'
import styles from './style.styl'

const Quantity = ({ value, onChange }) =>
  $('div', { className: styles.itemQuantity },
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