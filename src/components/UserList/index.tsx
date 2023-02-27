import React from "react";
import { Container, Role } from "../UserList/styles";
import UserRow from "../UserRow";
import Lucas from "../../assets/lucas.jpg";
import Nat from "../../assets/nat.jpeg";
import Juan from "../../assets/juan.jpeg";
import Loritta from "../../assets/Loritta.png"

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Mag" isBot userAvatar={Loritta}/>
      <UserRow nickname="Darth Lucas" userAvatar={Lucas}/>
      
      <Role>Offline - 14</Role>
      <UserRow nickname="Nat" userAvatar={Nat}/>
      <UserRow nickname="Juan" userAvatar={Juan}/>
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
    </Container>
  );
}

export default UserList;