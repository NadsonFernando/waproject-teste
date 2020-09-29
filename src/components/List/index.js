import React from "react";

import {
  Wrapper,
  WrapperItem,
  Avatar,
  WrapperContent,
  Title,
  Label,
  ActionButtonRemove,
} from "./styles";

export default function List({ itens, onRemove }) {
  return (
    <Wrapper>
      {itens.map((item, index) => (
        <WrapperItem key={index.toString()}>
          <Avatar src={item.avatar_url} />
          <WrapperContent>
            <Title href={item.html_url}>{item.login}</Title>
            <WrapperContent>
              <Label>{item.followers} followers</Label>
              <Label>{item.following} following</Label>
            </WrapperContent>
          </WrapperContent>
          {onRemove && (
            <ActionButtonRemove onClick={() => onRemove(item)}>
              Remover
            </ActionButtonRemove>
          )}
        </WrapperItem>
      ))}
    </Wrapper>
  );
}
