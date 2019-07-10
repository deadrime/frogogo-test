import { createElement as $ } from 'react'
import styles from './style.styl'
import Logo from '@/assets/svg/logo-frogogo-header.svg'
import Location from '@/components/Location'
import AccountMenu from '@/components/AccountMenu'
import AccountCart from '@/components/AccountCart'
import Navigation from '@/components/Navigation'
import cn from 'classnames'

const Header = ({ className }) =>
  $('header', { className: cn(styles.header, className) }, 
    $('div', { className: styles.headerInner }, 
      $('div', { className: styles.topNav }, 
        $(Location),
        $('div', { className: styles.account }, 
          $(AccountMenu))),
      $('div', { className: styles.mainNavWrapper },
        $('a', {
          href: '/',
          alt: 'Frogogo',
          title: 'Frogogo',
          className: styles.logo 
        }, $(Logo)),
        $('div', { className: styles.navItemsWrapper }, 
          $(Navigation)),
        $(AccountCart))))

export default Header