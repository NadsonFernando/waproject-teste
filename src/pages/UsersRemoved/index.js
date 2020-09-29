import React from "react";

import { useSelector } from "react-redux";

import { Wrapper, WrapperHeader, Title, ActionBack } from "./styles";

import List from "@components/List";

export default function UsersRemoved({ onBack }) {
  const { removed } = useSelector((state) => state.user);

  return (
    <Wrapper>
      <WrapperHeader>
        <Title>Usuários removidos</Title>
        <ActionBack onClick={onBack}>Voltar</ActionBack>
      </WrapperHeader>
      <List itens={removed || []} />
    </Wrapper>
  );
}
