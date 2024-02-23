// Objective: Main component of the application
import './App.scss'
import Header from './components/Header'
import BodyContain from './components/BodyContain'
import LoginSection from './components/LoginSection'
import Banner from './components/Banner'
import List from './components/List'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Movies from './components/Movies'
import Subscription from './components/Subscription'

function App() {

  return <>
    <Router>

      <Routes>
        <Route path='/' element={
          <>
          <Header signinforloginregister={true}/>
          <BodyContain/>
          </>
        }/>
        <Route path='/login' element={<LoginSection page={true} />}/>
        <Route path='/register' element={<LoginSection page={false} signinforloginregister={true}/>}/>
        <Route path='/dashboard' element={
          <>
          <Header signinforloginregister={false}/>
          <Banner/>
          <List/>
          <Movies title="Netflix Originals" datagetfetch="originals"/>
          <Movies title="Trending Now" datagetfetch="trending"/>
          <Movies title="Popular" datagetfetch="popular"/>
          <Movies title="Top Rated"datagetfetch="top_rated"/>
          <Movies title="Upcoming" datagetfetch="upcoming"/>
          </>
        }/>
        <Route path='/subscription' element={<Subscription signinforloginregister={false}/>}/>
      </Routes>
    </Router>


    {/* <div>
    <Header />
    <BodyContain />
    <LoginSection></LoginSection>
    <Banner></Banner>
    <List></List>
  </div> */}
  </>
}

export default App
