import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';
import Avatar1 from '../../assets/kawaii.jpg';
import Avatar2 from '../../assets/kawaii.png';
import Avatar3 from '../../assets/kawaii2.jpg';
import Avatar4 from '../../assets/kawaii3.jpg';
import Avatar5 from '../../assets/kawaii4.jpg';
import Avatar6 from '../../assets/kawaii5.jpg';
import Avatar7 from '../../assets/kawaii6.jpg';
import Avatar8 from '../../assets/surprise.jpg';
import Avatar9 from '../../assets/surprise2.jpg';
import Avatar10 from '../../assets/surprise2.png';


const arrayPhotos = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8, Avatar9, Avatar10];

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>

      <Separator />

      <ServerButton avatar={arrayPhotos[Math.floor(Math.random() * 10)]}/>
      <ServerButton avatar={arrayPhotos[Math.floor(Math.random() * 10)]}/>
      <ServerButton hasNotifications avatar={arrayPhotos[Math.floor(Math.random() * 10)]}/>
      <ServerButton mentions={10} avatar={arrayPhotos[Math.floor(Math.random() * 10)]}/>
      <ServerButton />
      <ServerButton avatar={arrayPhotos[Math.floor(Math.random() * 10)]}/>
      <ServerButton hasNotifications avatar={arrayPhotos[Math.floor(Math.random() * 10)]}/>
      <ServerButton />
      <ServerButton avatar={arrayPhotos[Math.floor(Math.random() * 10)]}/>
      <ServerButton mentions={75} avatar={arrayPhotos[Math.floor(Math.random() * 10)]}/>
      <ServerButton hasNotifications avatar={arrayPhotos[Math.floor(Math.random() * 10)]}/>
    </Container>
  )
}

export default ServerList;