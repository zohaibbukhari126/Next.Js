
import Link from '@/node_modules/next/link'

import AddToCart from './components/AddToCart'
import ProductCard from './components/ProductCard/ProductCard'

export default function Home() {
  return (
    
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard/>
    </main>

  )
}
