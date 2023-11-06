"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { GlobalStyles } from '@/styles/GlobalStyles'
import Home from './home/page'

export default function home() {
  return (
      <>
      <GlobalStyles />
      <Home />
      </>
  )
}
