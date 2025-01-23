import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
