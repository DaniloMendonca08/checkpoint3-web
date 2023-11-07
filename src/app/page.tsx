"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { GlobalStyles } from '@/styles/GlobalStyles'
import Home from './home/page'
import SignUp from './signUp/page'
import Login from './login/page'
import FinishedOrder from './finishedOrder/page'

export default function home() {
  return (
      <>
      <GlobalStyles />
      <Home/>
      </>
  )
}
