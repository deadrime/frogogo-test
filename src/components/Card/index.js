import { createElement as $ } from 'react'
import styles from './style.styl'

export default () => 
  $('div', { className: styles.card },
    $('div', { className: styles.cardInner }, 'card'))