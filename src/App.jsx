
import { Route, Routes, Link, useParams, Outlet } from 'react-router-dom'
import './App.css'

const Home = () => <h1>Home</h1>
const SearchPage = () => {
  
  const tacos = [
    'cochinita',
    'chill',
    'carnita',
    'quesadilla',
  ];

  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {
          tacos.map( taco => (
            <li key={taco}> <Link to={`/tacos/${taco}`}>{taco}</Link> </li> 
          ))
        }
      </ul>

    </div>
  );
}
const Tacos = () => {

  const {taco} = useParams();

  return (
    <div>
      <h1>Tacos</h1>
      <p>{taco}</p>
      <Link to='details' >Mas detalles</Link>
      <Outlet />
    </div>
  )
}

const TacoDetails = () => {
  
  const { taco } = useParams();

  return (
    <h1>Taco Detail {taco} </h1>
  )
}

function App() {

  return (
    <div className="App">

      <header>
        <h1>Midulive</h1>
        <nav>
          <ul>
            <li><Link to="/" >Home</Link> </li>
            <li><Link to="/search-page" >Search Page</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search-page' element={<SearchPage />}/>
        <Route path='/tacos/:taco' element={<Tacos />} >
          <Route path='details' element={<TacoDetails />} />
        </Route>
        <Route path='*' element={ <h1>Page not found</h1> }/>
      </Routes>
    </div>
  )
}

export default App
