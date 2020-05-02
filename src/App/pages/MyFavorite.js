import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import useAxios from 'axios-hooks'

import useStyles from './styles'
import GridImagesList from "../components/GridImagesList";


// noinspection SpellCheckingInspection
const flickrOptions = {
    api_key: "677f6e23e5f9ba4986243a9051fb19c7",
    secret: "9f0063e38d08d5b0"
};

function MyFavorite() {
    const classes = useStyles();
    const [{ data, loading, error }] = useAxios(
        `https://api.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=${flickrOptions.api_key}&user_id=188255655@N08&format=json&nojsoncallback=1`
    )
    // https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=677f6e23e5f9ba4986243a9051fb19c7&user_id=188255655@N08&format=json&nojsoncallback=1
    // console.log(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrOptions.api_key}&format=json&nojsoncallback=1&tags=${text}&tag_mode=any&per_page=${value}&page=${page}`, 'url')


    if (error) return <p>Error!</p>

    return (
        <div className={classes.grow}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            { data ? <GridImagesList tileData={data} loading={loading} />  : <p>Please Enter tag in the search box to view images</p>}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}

export default MyFavorite;
