import './App.css'
import CourseCard from './components/CourseCard'
import { cursos } from './data'

function App() {
 
  return (
    <div className='main-container'>
      <header className="header">
        <h1 className='title'>Cursos<span>educativos</span></h1>
        <p className='subtitle'>un espacio para aprender</p>
      </header>
      <main className="grid-cursos">
        {cursos.map((curso, index) => (
          <CourseCard 
            key={curso.id} 
            {...curso}
            
            index={index} 
          />
        ))}
      </main>
      <footer className='footer'>
        <p> 2026 DevAcademy. Todos los derechos reservados.</p>
        </footer>
        </div>
  );
}

export default App
