import React  from 'react';
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
 selectOptions, onChangeItemsPerPage, value, name }) {

    const classes = useStyles();
    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    value={value}
                    onChange={onChangeItemsPerPage}
                    displayEmpty
                    name={name}
                    inputProps={{ 'aria-label': 'Without label', classes: { root: classes.inputBase } }}

                >
                    {selectOptions.map(item => ( <MenuItem key={`select-${item}`} value={item}>{`${item} Per Page`}</MenuItem>))}
                </Select>
            </FormControl>
        </div>
    );
}