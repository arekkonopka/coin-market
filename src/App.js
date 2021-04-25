import './asset/style/App.sass';
import CoinList from './components/CoinsList';
import SearchBar from './components/SearchBar';
import { Provider } from 'react-redux'
import store from './asset/redux/store'
import Theme from './components/Theme';
import { useState } from "react"


function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <Provider store={store}>
      <div className={darkMode ? "App" : "App light-mode"} >
        <Theme darkMode={darkMode} setDarkMode={setDarkMode} />
        <SearchBar />
        <CoinList />
      </div>
    </Provider>
  );
}

export default App;
