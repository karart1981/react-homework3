import Song from "./Song.jsx";
export const PlayList = ({items, onDeletePlaylist, moveDown}) => {
    const styled = {
        width:"180px",
        height:"50px",
        fontSize: "18px",
    }
    return <>
        <h1>Playlist</h1>
        <h2>{items.length} {items.length>1 ? "songs" : "song"}</h2>
        {items.map(elm => <Song key={elm.id}{...elm} onDelete={onDeletePlaylist} moveDown={moveDown} style={styled}/>)}
    </>
}