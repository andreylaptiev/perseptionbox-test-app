import { Route, Routes } from 'react-router-dom';
import CharProfile from './CharProfile';
import Home from './Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='char'>
        <Route path=':id' element={<CharProfile />} />
      </Route>
    </Routes>
  )
}

export default AppRouter;
