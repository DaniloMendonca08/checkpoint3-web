"use client"

import { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { Title } from "../components/title/Title";
import { StyledDivSingUp } from "./singUp.style";
import { StyledLabelSingUp } from "./singUp.style";

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
        <StyledDivSingUp>
          <StyledLabelSingUp>
            <label htmlFor="name">Nome</label>
          </StyledLabelSingUp>
          <input className="StyledinputSingUp"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
          />
        </StyledDivSingUp>
        
        <StyledDivSingUp>
          <StyledLabelSingUp>
            <label htmlFor="email">Email</label>
          </StyledLabelSingUp>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </StyledDivSingUp>
        
        <StyledDivSingUp>
          <StyledLabelSingUp>
            <label htmlFor="email">Telefone</label>
          </StyledLabelSingUp>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={handlePhone}
          />
        </StyledDivSingUp>
        
        <StyledDivSingUp>
          <StyledLabelSingUp>
            <label htmlFor="email">Senha</label>
          </StyledLabelSingUp>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </StyledDivSingUp>
        
        <StyledDivSingUp>
          <StyledLabelSingUp>
            <label htmlFor="cep">CEP("digite no formato: 01234023")</label>
          </StyledLabelSingUp>
          <input
            type="text"
            name="cep"
            id="cep"
            value={cep}
            onChange={handleCep}
          />
        </StyledDivSingUp>
        </Layout>
    )
}