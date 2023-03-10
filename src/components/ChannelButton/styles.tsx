import styled from "styled-components";
import { Hashtag } from "@styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "@styled-icons/material";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color .2s;
  cursor: pointer;

  >div {
    display: flex;
    align-items: center;

    > span {
      margin-left: 5px;
      color: var(--senary);
    }
  }

  &:hover, &.active {
    background-color: var(--quinary);
    > div span {
      color: white;
    }
    > :last-child {
      display: initial;
    }
  }

  > :last-child {
    display: none;
  }
  `;

export const HashtagIcon = styled(Hashtag)`
  height: 20px;
  width: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  height: 20px;
  width: 20px;
  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

export const SettingsIcon = styled(Settings)`
  height: 20px;
  width: 20px;
  margin-left: 5px;
  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;
