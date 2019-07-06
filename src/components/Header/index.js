import { createElement as $ } from 'react'
import styles from './style.styl'
import navigationItems from './navigationItems'
import Logo from '@/assets/svg/logo-frogogo-header.svg'

const Header = () => 
  $('header', { className: styles.header }, 
    $('div', { className: styles.headerInner }, 
      $('div', { className: styles.topNav }, 
        $('div', null, 'region'),
        $('div', { className: styles.account }, 'login/registration')
      ),
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
            }, item.label))))))

export default Header