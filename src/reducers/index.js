import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {title: 'Janam Janam', duration: '2.05'},
        {title: 'Dariya', duration: '4:12'},
        {title: 'Apna time ayega', duration: '4:10'},
        {title: 'Khamoshiya', duration: '5:10'}
    ];
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

 export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});