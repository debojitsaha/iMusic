import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicPlayer from './components/MusicPlayer';
import { Container } from 'react-bootstrap';
import MusicState from './contextApi/MusicState';

function App() {
  return (
    <MusicState>
    <Container className='p-5'>
      <MusicPlayer />
    </Container>
    </MusicState>
  );
}

export default App;
