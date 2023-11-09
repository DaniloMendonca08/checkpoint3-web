"use client"

import { useContext, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { routes } from "../../routes"
import OrderContext from "../../contexts/OrderContext"
import { useRouter } from "next/navigation"
import { Layout } from "../components/layout/Layout"
import { Title } from "../components/title/Title"
import { StyledLabelLogin } from "./Login.styles"
import { StyledDivLogin } from "./Login.styles"
import { StyledButtonLogin } from "./Login.styles"
import { StyledButtonCadastro } from "./Login.styles"

export default function Login() {
//   const navigate = useNavigate()
  const { pizzaOrder } = useContext(OrderContext)

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const handleLogin = (event) => {
    setLogin(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const toLogin = (userPayload) => {
    // try {
    //     fetch("http://localhost:8000/user/login", {
    //     method: "POST",
    //     body: JSON.stringify(userPayload),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
 
    //   .then(data =>{
    //     if (data.token) {
    //       const token = data.token;
    //       sessionStorage.setItem("TokenUbira", token);
    //     }
    //   })
     
    // } catch (error) {
    //   console.log(error)
    // } finally {
    //   console.log("finnaly")
    // }
  }
  

  const handleSubmit = (event) => {
    event.preventDefault()

    const payload = {
      user: "jorge@abreu.com.br",
      pass: "abobrinha",
    }

    toLogin(payload)

    sessionStorage.setItem("token", `${login}.${password}`)

    if (pizzaOrder) {
    return router.push('/checkout')
    } else {
    return router.push('/sizes')
    }
  }

  const handleRegister =  () => {
    router.push('/signUp')
  }

  return (
    <Layout>
        <Title>Login</Title>
          <StyledDivLogin>
            <StyledLabelLogin htmlFor="login">Login</StyledLabelLogin>
              <input
                type="text"
                name="login"
                id="login"
                value={login}
                onChange={handleLogin}
              />
          </StyledDivLogin>

          <StyledDivLogin>
            <StyledLabelLogin htmlFor="pass">Senha</StyledLabelLogin>
              <input
                type="password"
                name="pass"
                id="pass"
                value={password}
                onChange={handlePassword}
              />
          </StyledDivLogin>
          
          <StyledButtonLogin type="submit" onClick={handleSubmit}>Login</StyledButtonLogin>

          <StyledButtonCadastro><button onClick={handleRegister}>Cadastro</button></StyledButtonCadastro>
    </Layout>
  )
}