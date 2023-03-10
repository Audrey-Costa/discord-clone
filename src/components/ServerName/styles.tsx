import styled from "styled-components";
import { ExpandMore } from "@styled-icons/material";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 11px 0 16px;
  box-shadow: rgba(0, 0 ,0, 0.2) 0px 1px 0px 0px;
  background-color: var(--secondary);
  z-index: 2;
  `;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;
  color: white;
  cursor: pointer;
`;
