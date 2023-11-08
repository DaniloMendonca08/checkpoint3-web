"use client"

import { useContext, useEffect, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { Title } from "../components/title/Title";
import OrderContext from "@/contexts/OrderContext";

export default function FinishedOrder () {
    const { pizzaOrder } = useContext(OrderContext)

    return (
        <Layout>
            <Title>Obrigado pelo pedido!</Title>
            <Title>Últimos pedidos: {pizzaOrder.item.name}</Title>
        </Layout>
    )
}