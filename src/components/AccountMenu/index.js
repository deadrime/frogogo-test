import { createElement as $ } from 'react'
import ArrowDownIcon from '@/assets/svg/icon-header-arr-down.svg'
import styles from './style.styl'

const AccountMenu = () => 
  $('div', { className: styles.accountMenu},
    $('span', { className: styles.amountText }, 'Ваш счет'),
    $('span', { className: styles.amountValue }, `${4700} ₽`),
    $(ArrowDownIcon, { className: styles.icon }))

export default AccountMenu