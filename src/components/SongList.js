import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

    renderList(){

        //here this.props.songs we are accessing only because 
        // connect function is getting songs from state or redux store 
        //using getMyStateBro function
        return this.props.songs.map((song) => {
            return (
                    <div className="item" key={song.title}>
                        <div className="right floated content">
                            <button onClick={() => {this.props.selectSong(song)}} className="ui button primary">
                                Select
                            </button>
                        </div>
                        <div className="content">{song.title}</div>
                    </div>

            )
        });
    }


    render(){
        // console.log(this.props);
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
            )
        };
}


// creating this function so that  "connect" can informs "provider"
// that I need specific data according to this function. 
const getMyStateBro = (state) => {
    //console.log(state)
    // taking value from state (i.e. redux store) and storing
    //it in props with with key songs and value state.song
    return  {songs: state.songs};
}

// here the second argument to connect function i.e  the selectSong acion creator is taken by connect function
// and passed into our component as a prop
export default connect(getMyStateBro, {selectSong: selectSong})(SongList);