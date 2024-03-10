
import Link from '@/node_modules/next/link'
import Image from 'next/image'
import AddToCart from './components/AddToCart'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <AddToCart/>
    </main>

  )
}
