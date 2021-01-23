import React from 'react'
import './sidebar.css';
import logo from '../images/Logo.png';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';


function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists);


    return (
        <div className="sidebar">
            <img className="sidebar_logo"
                src={logo}
                alt="logo"
            />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(item => (
                <SidebarOption key={item.id} title={item.name} />
            ))}
        </div>
    )
}

export default Sidebar
