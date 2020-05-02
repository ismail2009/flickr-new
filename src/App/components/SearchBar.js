import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import React from "react";
import {  makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    divider: {
        height: 28,
        margin: 1,
    },
    searchBar: {
        width: '45%',
        minWidth: 250,
        display: 'flex',
        alignItems: "center"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 4,
    },
    label: {
        flex: 1,
        textAlign: "center",
        fontSize: 16
    },
}));

function SearchBar({ text, onChangeText }) {
    const classes = useStyles();

    return (
    <Paper component="form" className={ classes.searchBar }>
        <InputLabel shrink className={ classes.label }>Search By</InputLabel>
        <Divider className={ classes.divider } orientation="vertical"/>
        <InputBase
            className={ classes.input }
            placeholder="Search in Flickr"
            inputProps={ {'aria-label': 'search google maps'} }
            name='search'
            value={text}
            onChange={onChangeText}
        />
    </Paper>
)}
export default React.memo(SearchBar);
