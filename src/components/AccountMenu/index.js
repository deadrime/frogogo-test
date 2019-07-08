import { createElement as $ } from 'react'
import ArrowDownIcon from '@/assets/svg/icon-header-arr-down.svg'
import styles from './style.styl'
import { formatMoney } from '@/helpers'
import { withCartStore } from '@/store/cartStore'

const AccountMenu = ({ store: { accountAmount } }) =>
  $('div', { className: styles.accountMenu, role: 'button', tabIndex: 0 },
    $('span', { className: styles.amountText }, 'Ваш счет'),
    $('span', { className: styles.amountValue }, formatMoney(accountAmount)),
    $(ArrowDownIcon, { className: styles.icon }))

export default withCartStore(AccountMenu)