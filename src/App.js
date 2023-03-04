import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicPlayer from './components/MusicPlayer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className='p-5'>
      <MusicPlayer />
    </Container>
  );
}

export default App;
