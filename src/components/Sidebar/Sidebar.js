import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import './Sidebar.css'
import { Divider, Collapse, Avatar, makeStyles } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import LibraryAddTwoToneIcon from '@material-ui/icons/LibraryAddTwoTone';
import FlightTakeoffTwoToneIcon from '@material-ui/icons/FlightTakeoffTwoTone';
import SportsEsportsTwoToneIcon from '@material-ui/icons/SportsEsportsTwoTone';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      }
}))

function Sidebar(props){

    const { holderFirstName, holderLastName } = props

    const classes = useStyles();

    const [openLogbook, setOpenLogbook] = React.useState(false);
    const [openNewEntry, setOpenNewEntry] = React.useState(false)

    const handleClick = (setOpenFunction, open) => {
        setOpenFunction(!open);
    }

    const getIcon = (label) => {
        if(label === 'Logbook'){return(<MenuBookTwoToneIcon/>)}
        else if(label === 'New entry'){return(<LibraryAddTwoToneIcon/>)}
        else if(label === 'Flights' || label === 'Flight entry'){return(<FlightTakeoffTwoToneIcon/>)}
        else if(label === 'Simulators' || label === 'Simulator entry'){return(<SportsEsportsTwoToneIcon/>)}
    }

    const genericListItem = (paddingValue, LinkPage, label) => {
        return(
            <ListItem style={{ paddingLeft: paddingValue}} button component={Link} to={LinkPage}>
                <ListItemIcon>{getIcon(label)}</ListItemIcon> 
                <ListItemText className='sidebar-item-text'>
                    <span className='sidebar-subitem-text'>
                    {label}
                    </span>
                </ListItemText>
            </ListItem>
        )
    }


    const genericExpandableListItem = (paddingValue, label, setOpenFunction, open) => {
        return(
            <ListItem style={{ paddingLeft: paddingValue }} button onClick={() => handleClick(setOpenFunction, open)}>
                <ListItemIcon>{getIcon(label)}</ListItemIcon> 
                <ListItemText>{label}</ListItemText>
                { open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
        )
    }

    return (
        <div className="sidebar">
                <List disablePadding dense>
                    <ListItem>
                        <Avatar className={classes.large}></Avatar>
                    </ListItem>
                    <ListItem>
                        {holderFirstName} {holderLastName}
                    </ListItem>
                    <Divider variant='middle'/>
                    <ListItem style={{ paddingLeft: 18 }} button component={Link} to='/'>
                        <ListItemIcon>
                            <HomeRoundedIcon/>
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    {genericExpandableListItem(18, 'Logbook', setOpenLogbook, openLogbook)}
                    <Collapse in={openLogbook}>
                        <List disablePadding>
                            {genericListItem(36, '/FlightsTable', 'Flights')}
                            {genericListItem(36, '/SimulatorTable', 'Simulators')}
                        </List>
                    </Collapse>
                    {genericExpandableListItem(18, 'New entry', setOpenNewEntry, openNewEntry)}
                    <Collapse in={openNewEntry}>
                        <List disablePadding>
                            {genericListItem(36, '/NewFlightEntry', 'Flight entry')}
                            {genericListItem(36, '/NewSimulatorEntry', 'Simulator entry')}
                        </List>
                    </Collapse>
                </List>
        </div>
    )
}

export default Sidebar