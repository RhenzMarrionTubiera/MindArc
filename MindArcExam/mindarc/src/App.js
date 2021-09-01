import './App.css';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Content from './components/Content';

function App() {
  return (
    <Container className="MindArc" fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Content />
      </Row>
    </Container>
  );
}

export default App;
