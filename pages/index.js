import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeadCustom from '@/components/Layouts/Head'
import Header from '@/components/Layouts/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeadCustom />
      <Header />
    </>
  )
}
