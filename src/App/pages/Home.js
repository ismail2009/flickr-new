import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import useAxios from 'axios-hooks'

import useStyles from './styles'
import RoundedPagination from '../components/RoundedPagination'
import GridImagesList from "../components/GridImagesList";
import SearchBar from "../components/SearchBar";
import PaginationSelect from "../components/PaginationSelect";

// noinspection SpellCheckingInspection
const flickrOptions = {
    api_key: "677f6e23e5f9ba4986243a9051fb19c7",
    secret: "9f0063e38d08d5b0"
};

function Home() {
    const classes = useStyles();
    const [value, setNumberOfItemsPerPage] = useState(10);
    const [page, setPageNumber] = useState(1);
    const [text, setText] = useState("");
    const [{ data, loading, error }] = useAxios(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrOptions.api_key}&tags=${text}&tag_mode=any&per_page=${value}&page=${page}&format=json&nojsoncallback=1`
    )
    // https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=677f6e23e5f9ba4986243a9051fb19c7&tags=r&per_page=&page=&format=json&nojsoncallback=1
    // console.log(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrOptions.api_key}&format=json&nojsoncallback=1&tags=${text}&tag_mode=any&per_page=${value}&page=${page}`, 'url')

    const handleChange = (ev, node) => {
        setNumberOfItemsPerPage(ev.target.value);
    };

    const handleChangePage = (ev, page) => {
        setPageNumber(page);
    };
    const handleTextChange = (ev) => {
        setText(ev.target.value);
    };


    if (error) return <p>Error!</p>

    return (
        <div className={classes.grow}>
            <Container>
                <Grid container spacing={2}>
                    <Grid container justify="center" align="center">
                        <SearchBar text={text} onChangeText={handleTextChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2} justify="center">
                                <Grid container style={{ display: 'flex' }} justify='space-between' >
                                    <PaginationSelect
                                        selectOptions={[10, 20, 50]}
                                        value={value}
                                        name="numberOfImagesPerPage"
                                        onChangeItemsPerPage={handleChange}
                                    />
                                    <Button variant="outlined" color="primary" href="/my-favorite">
                                        My Favorite
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    { text ? <GridImagesList tileData={data} loading={loading} />  : <p>Please Enter tag in the search box to view images</p>}
                                </Grid>
                                <Grid item xs={3}>
                                    <RoundedPagination
                                        count={!loading && data.photos && data.photos.pages}
                                        variant="outlined"
                                        shape="rounded"
                                        onChange={handleChangePage}
                                        page={page}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}

export default Home;
