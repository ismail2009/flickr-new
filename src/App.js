import React, { useRef } from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import useAxios from 'axios-hooks'

import useStyles from './app.style'
import RoundedPagination from './RoundedPagination'
import GridImagesList from "./GridImagesList";
import SearchBar from "./SearchBar";
import PaginationSelect from "./PaginationSelect";


// noinspection SpellCheckingInspection
const flickrOptions = {
  api_key: "677f6e23e5f9ba4986243a9051fb19c7",
  secret: "9f0063e38d08d5b0"
};
function App() {
    const classes = useStyles();
    const [{ data, loading, error }, refetch] = useAxios(
      `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${flickrOptions.api_key}&format=json&nojsoncallback=1&per_page=${5}`
  )



    const childState = useRef(null);
    console.log(childState.current);

    if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  console.log(data)
  return (
    <div className={classes.grow}>
      <Container>
          <Grid container spacing={2}>
              <Grid item xs={12} justify="center" align="center">
                 <SearchBar />
              </Grid>
              <Grid item xs={12}>
                  <Paper className={classes.paper}>
                      <Grid container spacing={2} justify="center">
                          <Grid item xs={12} style={{ display: 'flex' }} justify='space-between' >
                              <PaginationSelect
                                  rowsPerPageOptions={[10, 20, 50]}
                                  childState={childState}
                                  // count={rows.length}
                                  // rowsPerPage={2}
                                  // page={page}
                                  // onChangePage={handleChangePage}
                                  onChangeItemsPerPage={(value) => console.log(value)}
                              />
                              <Button variant="outlined" color="primary" href="#outlined-buttons">
                                 My Favorite
                              </Button>
                          </Grid>
                          <Grid item xs={12}>
                              <GridImagesList tileData={data.photos.photo} />
                          </Grid>
                          <Grid item xs={3}>
                              <RoundedPagination count={3} variant="outlined" shape="rounded" />
                          </Grid>
                      </Grid>
                  </Paper>
              </Grid>
          </Grid>
      </Container>

    </div>
  );
}

export default App;
