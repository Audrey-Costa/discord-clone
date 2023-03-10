import styled from "styled-components";
import { AlternateEmail } from "@styled-icons/material";

export const Container = styled.div`
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  padding: 0 11px 0 16px;
  box-shadow: rgba(0, 0 ,0, 0.2) 0px 1px 0px 0px;
  background-color: var(--primary);
  `;

export const Messages = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 46px - 67px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar {
    background-color: var(--secondary);
  }
  
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 8px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;

  padding: 0 10px 0 57px;
  border-radius: 7px;

  color: white;
  background-color: var(--chat-input);

  position: relative;
  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 14px;
    transition: 180ms ease-in-out;
  }
  `;
  

export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;

  color: var(--gray);
`;

