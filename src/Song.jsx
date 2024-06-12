function Song({id, title, artist, duration, onDelete, add, moveDown, inPlaylist=false}){
    return (
        <>
        <div className="song">
            <p>{title}</p>
            <strong>By {artist}</strong>
            <small> {duration} min</small>
            <div className="btns">
              <button className="del" onClick={() => onDelete(id)}>Delete</button>
              {
                !inPlaylist ? <button className="add" onClick={() => {!inPlaylist ? add(id) : null}}>add To Playlist</button> : null
              }
            </div>
            {
                inPlaylist ? <button onClick={() => moveDown(id)}>Move Down</button> : null
            }
        </div>
        </>
    )
}

export default Song;