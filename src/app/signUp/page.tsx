"use client"

import { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { Title } from "../components/title/Title";
import { StyledDivSignUp } from "./signUp.style";
import { StyledLabelSignUp } from "./signUp.style";
import { StyledButtonSignUp } from "./signUp.style";
import { Button } from "../components/button/Button";
import { useRouter } from "next/navigation";

export default function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [cep,setCep] = useState("")
    const [isSearchingcep, setIsSearchingCep] = useState(false)
    const [address, setAddress] = useState({})
    const router = useRouter()

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

    const handleCep = (event) => {
      setCep(event.target.value)
      
    }

    const handleSearchCep = async () => {
      if (cep == "") {
        alert("Digite um CEP antes de clicar!")
      }
      else {
        try {
          setIsSearchingCep(true)
          const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
          const options = await response.json()
          setAddress(options)

        } catch (error) {
          alert(`Deu ruim:  ${error}`)
        } 
      }
       
        
    }

    const handleNext = () => [
      sessionStorage.setItem("token", `${email}}.${password}`),
      router.push('/login')
    ]
 
    return (
        <Layout>
            <Title>Cadastro do usuário</Title>
        <StyledDivSignUp>
          <StyledLabelSignUp>
            <label htmlFor="name">Nome</label>
          </StyledLabelSignUp>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
          />
        </StyledDivSignUp>
        
        <StyledDivSignUp>
          <StyledLabelSignUp>
            <label htmlFor="email">Email</label>
          </StyledLabelSignUp>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </StyledDivSignUp>
        
        <StyledDivSignUp>
          <StyledLabelSignUp>
            <label htmlFor="email">Telefone</label>
          </StyledLabelSignUp>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={handlePhone}
          />
        </StyledDivSignUp>
        
        <StyledDivSignUp>
          <StyledLabelSignUp>
            <label htmlFor="email">Senha</label>
          </StyledLabelSignUp>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </StyledDivSignUp>
        
        <StyledDivSignUp>
            <StyledLabelSignUp>
              <label htmlFor="cep">CEP Digite no formato: 01234023</label>
            </StyledLabelSignUp>

              <StyledDivSignUp>
              <input
                type="text"
                name="cep"
                id="cep"
                value={cep}
                onChange={handleCep}
              />
              </StyledDivSignUp>

            <StyledButtonSignUp>
              <Button onClick={handleSearchCep}>Buscar CEP</Button>
            </StyledButtonSignUp>
        </StyledDivSignUp>

          {isSearchingcep ? (
              <>
              <StyledDivSignUp><StyledLabelSignUp>Estado: {address.state}</StyledLabelSignUp></StyledDivSignUp>
              <StyledDivSignUp><StyledLabelSignUp>Cidade: {address.city}</StyledLabelSignUp></StyledDivSignUp>
              <StyledDivSignUp><StyledLabelSignUp>Bairro: {address.neighborhood}</StyledLabelSignUp></StyledDivSignUp>
              <StyledDivSignUp><StyledLabelSignUp>Rua: {address.street}</StyledLabelSignUp></StyledDivSignUp>
              <Button onClick={handleNext}>Finalizar Cadastro</Button>
              </>

          ) : null}
          
        
        </Layout>
    )
}