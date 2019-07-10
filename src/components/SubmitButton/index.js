import { createElement as $ } from 'react'
import styles from './style.styl'
import cn from 'classnames'

const SubmitButton = ({ children, className }) => 
  $('button', { className: cn(styles.button, className) }, children)

export default SubmitButton