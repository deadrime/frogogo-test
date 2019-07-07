import { createElement as $ } from 'react'
import Cart from '@/components/Cart'
import Header from '@/components/Header'
import { CartStore } from '@/store/cartStore'

const App = () => 
  $(CartStore, null, 
    $(Header),
    $(Cart))

export default App