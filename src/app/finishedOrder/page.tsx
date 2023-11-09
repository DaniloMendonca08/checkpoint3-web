"use client"

import { useContext, useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { Title } from "../components/title/Title";
import OrderContext from "@/contexts/OrderContext";
import { StyledLabelOrder } from "./finishedOrder.style";

export default function FinishedOrder () {
    const { pizzaOrder } = useContext(OrderContext)

    return (
        <Layout>
            <Title>Obrigado pelo pedido!</Title>
            <StyledLabelOrder>
                <ul>
                    <li><label>Pizza: {pizzaOrder.item.name}</label></li>
                    <li><label>Tamanho: {pizzaOrder.item.size}</label></li>
                    <li><label>Pedaços: {pizzaOrder.item.slices}</label></li>
                    <li><label>Valor: R${pizzaOrder.item.value}</label></li>
                </ul>
            </StyledLabelOrder>
        </Layout>
    )
}