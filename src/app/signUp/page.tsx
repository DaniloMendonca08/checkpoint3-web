"use client"

import { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { Title } from "../components/title/Title";

export default function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [cep,setCep] = useState("")

    const handleName = (event) => {
        setName(event.target.value)
      }

    const handleEmail = (event) => {
        setEmail(event.target.value)
      }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleCep = async () => {
        try {
            const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
            const options = await response.json()
          } catch (error) {
            alert(`Deu ruim:  ${error}`)
          } finally {
            // setIsLoading(false)
          }
    }
 
    return (
        <Layout>
            <Title>Cadastro do usuário</Title>
            <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />

        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={handlePhone}
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />

        <label htmlFor="cep">CEP("digite no formato: 01234023")</label>
        <input
          type="text"
          name="cep"
          id="cep"
          value={cep}
          onChange={handleCep}
        />
        </Layout>
    )
}