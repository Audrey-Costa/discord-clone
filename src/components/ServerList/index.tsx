import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>

      <Separator />

      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton mentions={10}/>
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={75}/>
      <ServerButton hasNotifications/>
    </Container>
  )
}

export default ServerList;