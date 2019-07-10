import { createElement as $, useState } from 'react'
import navigationItems from './navigationItems'
import ArrowDownIcon from '@/assets/svg/icon-header-arr-down.svg'
import styles from './style.styl'
import cn from 'classnames'

const NavItem = ({ label, children }) =>
  $('a', { href: '/', className: styles.navItem },
    $('span', null, label),
    children && $(ArrowDownIcon, { className: styles.navItemIcon }))

const Button = ({ opened, ...props, }) =>
  $('button', {
    ...props,
    className: cn(styles.mobileMenuBtn, { [styles.opened]: opened })
  }, $('span', { className: styles.menuLine }))

const Navigation = ({ className }) => {
  const [opened, setOpened] = useState(false)

  return (
    $('div', { className: cn(styles.nav, className) },
      $(Button, {
        onClick: () => setOpened(prev => !prev),
        opened,
      }),
      $('nav', { className: cn(styles.navItems, { [styles.opened]: opened }) },
        navigationItems.map(item => $(NavItem, { ...item, key: item.label }))))
  )
}

export default Navigation