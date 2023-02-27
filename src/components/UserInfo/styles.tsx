import styled from "styled-components";
import { Mic, Headphones, Settings } from "@styled-icons/material";


export const Container = styled.div`
  grid-area: UI;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: rgba(0, 0 ,0, 0.2) 0px 1px 0px 0px;
  background-color: var(--quaternary);
  `;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  
  > :not(:first-child) {
    margin-left: 7px;
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--gray);
`;

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  > strong{
    font-size: 13px;
    color: white;
    display: block;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;
  color: white;
  cursor: pointer;
  opacity: 0.7;

  transition: opacity .2s;

  &:hover, &.active {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(Headphones)`
    width: 20px;
  height: 20px;
  color: white;
  cursor: pointer;
  opacity: 0.7;

  transition: opacity .2s;

  &:hover, &.active {
    opacity: 1;
  }  
`;

export const SettingsIcon = styled(Settings)`
    width: 20px;
  height: 20px;
  color: white;
  cursor: pointer;
  opacity: 0.7;

  transition: opacity .2s;

  &:hover, &.active {
    opacity: 1;
  }  
`;
