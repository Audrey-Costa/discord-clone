import { Button } from './styles';
import User from '../../assets/kawaii5.jpg';
import { DiscordAlt } from '@styled-icons/boxicons-logos';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  avatar?: string;
}

const ServerButton: React.FC<Props> = ({
  selected, isHome,hasNotifications, mentions, avatar
}) => {
  return (
  <Button isHome={isHome} hasNotifications={hasNotifications} mentions={mentions} className={selected ? "active" : ""} avatar={avatar}>
    {isHome ? <DiscordAlt /> : avatar ? <img src={avatar}/> : ''}
  </Button>
  )
};

export default ServerButton;