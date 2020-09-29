import styled from "styled-components";

export const Wrapper = styled.div``;

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f4f4f4;
  margin-top: 10px;
  border-radius: 5px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 25px;
  margin: 15px;
`;

export const WrapperContent = styled.div``;

export const Title = styled.a.attrs({
  target: "_blank",
})`
  line-height: 25px;
  font-weight: bold;
  text-decoration: none;
  color: black;

  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  margin-right: 10px;
`;

export const ActionButtonRemove = styled.button`
  position: absolute;
  margin-left: 410px;
`;
