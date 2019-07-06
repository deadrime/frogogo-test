import { createElement as $ } from 'react'
import Card from '@/components/Card'
import Header from '@/components/Header'

const App = () => 
  $('div', null, 
    $(Header),
    $(Card)
  )

export default App