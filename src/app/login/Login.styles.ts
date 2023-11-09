import styled from "styled-components"
import { colors } from "@/styles/Colors"
import { sizes } from "@/styles/Sizes"

export const StyledDivLogin = styled.div`
    margin-bottom: 10px;
    color: white;
`

export const StyledLabelLogin = styled.label`
    font-size: 23px;
    padding-right: 15px;
    color: ${colors.text.dark};
`

export const StyledButtonLogin = styled.button`
    cursor: pointer;
    background: ${colors.primary.main};
    margin-right: 10px;
    font-size: 18px;
    font-weight: bold;
    width: 65px;
    height: 30px;
    color: ${colors.text.light};
`
export const StyledButtonCadastro = styled.button`
    border: 1px solid black;
    margin-right: 10px;
    font-weight: bold;
    font-size: 18px;
    width: 80px;
    height: 30px;
    color: ${colors.text.light};
`