import { createElement as $ } from 'react'
import styles from './style.styl'
import navigationItems from './navigationItems'
import Logo from '@/assets/svg/logo-frogogo-header.svg'
import Location from '@/components/Location'
import AccountMenu from '@/components/AccountMenu'
import AccountCart from '@/components/AccountCart'
import ArrowDownIcon from '@/assets/svg/icon-header-arr-down.svg'

const Header = () => 
  $('header', { className: styles.header }, 
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
        $('nav', { className: styles.mainNav },
          navigationItems.map(item =>
            $('a', { 
              href: '/', 
              key: item.label, 
              className: styles.navItem 
            },
            $('span', null, item.label),
            item.children && $(ArrowDownIcon, { className: styles.navItemIcon })))),
        $(AccountCart))))

export default Header