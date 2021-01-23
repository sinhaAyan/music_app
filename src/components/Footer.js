import React from 'react'
import './footer.css';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import Grid from '@material-ui/core/Grid';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';


function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumLogo" src="" alt="album art" />
                <div className="footer_songInfo">
                    <h4>bam bam</h4>
                    <p>jdvjdcjdvcj</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_icon" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_icon" />
            </div>
            <div className="footer_right">
                <Grid container spacing={1}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer_icon" />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer_icon" />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item>
                        <VolumeUp className="footer_icon" />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer
