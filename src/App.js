import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getToken } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useDataLayerValue } from './DataLayer';



const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(_user => {
        dispatch({
          type: 'SET_USER',
          user: _user,
        })
      });

      spotify.getUserPlaylists().then((_playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: _playlists,
        });
      });

      spotify.getPlaylist('37AfV79AprYPDi1D7UpFUv').then(res =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res,
        })
      );
    }
  }, []);


  return (
    <div className="App">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
