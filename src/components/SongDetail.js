import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) =>{
    if(!props.song){
        return <div>Select Song</div>
    }
    return (
           <div>
               <h3>Details for:</h3>
               <div>Song title:-  {props.song.title} </div>
               <div>Song duration:- {props.song.duration}</div>
           </div>);
}

const mapStateToProps = (state) => {
     return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);