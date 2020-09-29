import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Content, WrapperHeader, ActionUserRemoved } from "./styles";

import ActionType from "@redux/actions";

import Search from "@components/Search";
import List from "@components/List";

import UsersRemoved from "@pages/UsersRemoved";

import _ from "underscore";

const initialUsers = [
  "nadsonfernando",
  "filipedeschamps",
  "raulburigo",
  "itiagop",
  "ivancorrea",
  "michelsouzafigueiredo",
  "phdduarte",
  "Dandy27",
  "gabrielerrera",
  "matheusrmartinez",
];

export default function Main() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  const [itens, setItens] = useState([]);
  const [page, setPage] = useState("main");

  function onSearch(searching) {
    if (_.isEmpty(searching)) {
      return setItens(users);
    }

    const filtered = _.filter(users, (user) => {
      return _.isEqual(user.login, searching) || _.isEqual(user.id, searching);
    });

    if (_.isEmpty(filtered)) {
      return alert("Nenhum resultado encontrado");
    }

    setItens(filtered);
  }

  function onRemove(item) {
    dispatch({
      type: ActionType.REMOVE_REDUX_USER,
      item,
    });
  }

  function onShowUsersRemoved() {
    setPage("users-removed");
  }

  function onBack() {
    setPage("main");
  }

  useEffect(() => {
    if (!_.isEmpty(users)) {
      setItens(users);
    }
  }, [users]);

  useEffect(() => {
    function onFindUser() {
      initialUsers.map((username) => {
        return dispatch({
          type: ActionType.FETCH_USER,
          username,
          dispatch,
        });
      });
    }

    onFindUser();
  }, [dispatch]);

  return (
    <Wrapper>
      {_.isEqual(page, "main") ? (
        <Content>
          <WrapperHeader>
            <Search onAction={onSearch} />
            <ActionUserRemoved onClick={onShowUsersRemoved}>
              Usuários removidos
            </ActionUserRemoved>
          </WrapperHeader>
          <List itens={itens} onRemove={onRemove} />
        </Content>
      ) : (
        <Content>
          <UsersRemoved onBack={onBack} />
        </Content>
      )}
    </Wrapper>
  );
}
