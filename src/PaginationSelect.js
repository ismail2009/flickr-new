import React, { useRef } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    inputBase: {
        paddingLeft: theme.spacing(1),
    },
}));

export default function PaginationSelect({
   rowsPerPageOptions, onChangeItemsPerPage, childState }) {
    const [value, setNumberOfItemsPerPage] = React.useState(rowsPerPageOptions[0]);

    const classes = useStyles();
    const handleChange = (ev) => {
        setNumberOfItemsPerPage(ev.target.value);
    };
    onChangeItemsPerPage(value)
    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label', classes: { root: classes.inputBase } }}

                >
                    {rowsPerPageOptions.map(item => ( <MenuItem key={`select-${item}`} value={item} value={item}>{`${item} Per Page`}</MenuItem>))}
                </Select>
            </FormControl>
        </div>
    );
}