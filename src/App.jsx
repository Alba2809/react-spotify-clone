import './App.css'
import LeftSidebar from './Components/LeftSideBar/LeftSidebar'

function App() {

  return (
    <section className='App'>
      <nav className='leftSidebar'>
        <LeftSidebar />
      </nav>
      <main className='mainView'>Music cards spotify</main>
      <nav className='rightSidebar'>Right Side menu spotify</nav>
      <footer className='playerBar'>
        Music player
      </footer>
    </section>
  )
}

export default App
