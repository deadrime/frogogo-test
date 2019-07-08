import { createElement as $ } from 'react'
import ArrowDownIcon from '@/assets/svg/icon-header-arr-down.svg'
import styles from './style.styl'
import { formatMoney } from '@/helpers'

const AccountMenu = ({ amount = 4700 }) => 
  $('div', { className: styles.accountMenu, role: 'button', tabIndex: 0 },
    $('span', { className: styles.amountText }, 'Ваш счет'),
    $('span', { className: styles.amountValue }, formatMoney(amount)),
    $(ArrowDownIcon, { className: styles.icon }))

export default AccountMenu