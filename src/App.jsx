import { useState } from 'react';
import { Album } from './Album';
import { SongList } from './SongList';
import { PlayList } from './playList';
import './App.css';

function App() {
  const [playList, setPlaylist] = useState([]);
  const [songs, setSongs] = useState([
    { id: 101, title: 'Arev ev Lusin', artist: 'Arame', duration: 4, inPlaylist: false },
    { id: 102, title: 'Qef chi lini', artist: 'Ladaniva', duration: 5, inPlaylist: false },
    { id: 103, title: 'Chuni ashkharhe qez nman', artist: 'Razmik Amyan', duration: 4, inPlaylist: false },
    { id: 104, title: 'Ser ka', artist: 'Ara Martirosyan', duration: 4, inPlaylist: false },
    { id: 105, title: 'Ser ka erknqum Yerevani', artist: 'Iveta Mukuchyan', duration: 3, inPlaylist: false },
  ]);

  const removeSongs = id => {
    setSongs(songs.filter(song => song.id !== id));
  };
  const removePlaylist = id => {
    setPlaylist(playList.filter(song => song.id !== id));
  };

  const moveDown = id => {
    const newplaylist = [...playList]
    const songIndex = newplaylist.findIndex(song => song.id === id)
    if(songIndex < newplaylist.length - 1) {
      [newplaylist[songIndex],newplaylist[songIndex + 1]] = [newplaylist[songIndex + 1],newplaylist[songIndex]]
    }
    setPlaylist(newplaylist)
  }

  const addToPlayList = id => {
    const song = songs.find(song => song.id === id);
    if (song) {
      song.inPlaylist = true;
      setPlaylist([...playList, song]);
    }
  };

  return (
    <>
      <h1>Online player</h1>
      <Album name="Armenian music" year={2022}>
        <SongList items={songs} onDelete={removeSongs} add={addToPlayList} moveDown={moveDown} />
      </Album>
      <PlayList items={playList} onDeletePlaylist={removePlaylist} moveDown={moveDown} />
    </>
  );
}

export default App;
