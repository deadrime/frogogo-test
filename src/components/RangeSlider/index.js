import { createElement as $, useState } from 'react'
import styles from './style.styl'
import { formatMoney } from '@/helpers'

const RangeSlider = ({
  min,
  max,
  value: propsValue,
  step = 50,
  onChange,
}) => {
  const [value, setValue] = useState(min)
  const percentage = (propsValue || value) / max * 100

  return (
    $('div', { className: styles.wrapper },
      $('div', { className: styles.amounts },
        $('span', { className: styles.amount }, formatMoney(min)),
        $('span', { className: styles.amount }, formatMoney(max))),
      $('input', {
        style: { backgroundSize: `${percentage}%` },
        className: styles.range,
        type: 'range',
        min,
        max,
        step,
        value: propsValue || value,
        onChange: e =>
          onChange
            ? onChange(e.target.value)
            : setValue(e.target.value)
      })
    )
  )
}


export default RangeSlider