import Home from './pages/Home.jsx'
import Games from './pages/Games.jsx'
import New from './pages/new.jsx'
import Aboutus from './pages/Aboutus.jsx'
import Signup from './pages/Signup.jsx'
import Header from './components/Header.jsx'
import Signin from './pages/Signin.jsx'
import Add from './pages/Add.jsx'


import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function MyApp(){
    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/games' element={<Games/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/aboutus' element={<Aboutus/>}/>
                <Route path="/new" element={<New />} />
                <Route path="/login" element={<Signin />} />
                <Route path="/add" element={<Add />} />
                <Route path="/game" element={<Games />} />
            </Routes>
        </BrowserRouter>
    )
}
