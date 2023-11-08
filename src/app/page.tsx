"use client"

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
