"use client"

// import { useNavigate } from "react-router-dom"
import { useRouter } from "next/navigation"
import { Button } from "../components/button/Button"
import { Layout } from "../components/layout/Layout"
import { HomeWrapper } from "./Home.style"
import Link from "next/link"
import { LOADIPHLPAPI } from "dns"
import { log } from "console"
// import { routes } from "../../routes"

export default function Home() {
//   const navigate = useNavigate()
  const router = useRouter()

  const handleClick = () => {
     router.push('/sizes')
    
  }

  return (
    <Layout>
      <HomeWrapper>
        <Button onClick={handleClick}>Iniciar pedido</Button>
      </HomeWrapper>
    </Layout>
  )
}