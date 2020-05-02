import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';
import CircularProgress from "@material-ui/core/CircularProgress";

const createImageUrl = (item) => `http://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'wrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

function SingleLineGridList(props) {
    const { tileData, loading } = props;
    const classes = useStyles();
    let col;
    if (isWidthUp('sm', props.width)) col = 3
    else if (isWidthDown('xs', props.width))  col = 1
    else col = 2

        return (
        <div className={classes.root}>
            { loading ? (
                    <CircularProgress color="inherit"/>
               ) : (
                <GridList className={ classes.gridList } cols={ col }>
                    { tileData && tileData["photos"] && tileData["photos"]["photo"].map((tile, index) => (
                        <GridListTile key={ `${ tile.img }-${ index }` }>
                            <img src={ createImageUrl(tile) } alt={ tile.title }/>
                            <GridListTileBar
                                title={ tile.title }
                                classes={ {
                                    root: classes.titleBar,
                                    title: classes.title,
                                } }
                                actionIcon={
                                    <IconButton aria-label={ `star ${ tile.title }` }>
                                        <StarBorderIcon className={ classes.title }/>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    )) }
                </GridList> )}
        </div>
    );
}
export default withWidth()(SingleLineGridList);