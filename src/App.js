import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Todo from './components/Todo';
import Skill from './components/Skill';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/todo" element={<Todo />}/>
          <Route path="/skill" element={<Skill />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;