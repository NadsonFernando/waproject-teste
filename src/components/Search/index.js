import React, { useState } from "react";

import { Wrapper, Input, ActionButton } from "./styles";

export default function Search({ onAction }) {
  const [value, setValue] = useState("");

  function onChange({ target }) {
    setValue(target.value);
  }

  function onSearch() {
    onAction && onAction(value);
  }

  return (
    <Wrapper>
      <Input placeholder="Pesquisar usuários" onChange={onChange} />
      <ActionButton onClick={onSearch}>Pesquisar</ActionButton>
    </Wrapper>
  );
}
