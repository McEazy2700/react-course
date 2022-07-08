import { Route, Routes } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layouts/Layout'

function App() {
  // localhost:3000
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage/>}/>
        <Route path="/new" element={<NewMeetupsPage/>}/>
        <Route path="/favorite" element={<FavoritesPage/>}/>
      </Routes>
  </Layout>
  
  );
}

export default App;
