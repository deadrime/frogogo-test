import { createElement as $ } from 'react'
import LocationIcon from '@/assets/svg/icon-location-header.svg'
import ArrowDownIcon from '@/assets/svg/icon-header-arr-down.svg'
import styles from './style.styl'

const Location = () => 
  $('div', null, 
    $(LocationIcon),
    $('span', { className: styles.locationText }, 'Регион: '),
    $('span', { className: styles.locationSelect, role: 'button', tabIndex: 0 }, 
      $('span', { className: styles.locationCity }, 'Москва' ),
      $(ArrowDownIcon, { className: styles.icon })))

export default Location