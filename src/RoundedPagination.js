import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
    },
    btn: {
        backgroundColor: '#FFFFFF',
        outline: 'none',
        color: '#1976d2',
        textTransform: 'capitalize',
        height: 28,
        marginRight: theme.spacing(.1),
        marginLeft: theme.spacing(.1),
        padding: '0 1rem',
        fontSize: '0.875rem',
        boxSizing: 'border-box',
        textAlign: 'center',
        fontWeight: 400,
        lineHeight: 1.43,
        borderRadius: 4,
        letterSpacing: '0.01071em',
        border: '1px solid rgba(0, 0, 0, 0.23)',
    }

}));

export default function UsePagination(props) {
    const classes = useStyles();
    const { items } = usePagination(props);
    console.log('items', items);
    return (
        <nav>
            <ul className={classes.ul}>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <ButtonBase type="button" className={classes.btn}
                                style={{
                                    fontWeight: selected ? 'bold' : undefined,
                                    backgroundColor: selected ? 'rgba(0, 0, 0, 0.08)' : '#FFFFFF' }}
                                {...item}
                            >
                                {page}
                            </ButtonBase>
                        );
                    } else {
                        children = (
                            <ButtonBase className={classes.btn}  type="button" {...item}>
                                {type}
                            </ButtonBase>
                        );
                    }

                        return <li key={index}>{children}</li>;
                })}
            </ul>
        </nav>
    );
}