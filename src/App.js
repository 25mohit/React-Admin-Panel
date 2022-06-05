import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Header } from './Data/components/header/Header';
import { Home } from './Data/pages/home/Home';
import { Projects } from './Data/pages/projects/Projects';
import { Exprences } from './Data/pages/exprences/Exprences';
import { Footer } from './Data/components/footer/Footer';
import { ProjectPage } from './Data/pages/projectPage/ProjectPage';

function App() {
  return (
    <div className="App">
          <Router>
            <Header />
                <Routes>
                      <Route path='/' exact element={<Home />}/>
                      <Route path='/projects' exact element={<Projects />}/>
                      <Route path='/project/:id' exact element={<ProjectPage />}/>
                      <Route path='/exprences' exact element={<Exprences />}/>
                </Routes>
            <Footer />
          </Router>
    </div>
  );
}

export default App;
