import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/core/styles/index";
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
    root: {
       padding:'3%',
        maxHeight:'200px'

    },
});


class NoteItem extends  React.Component{

    render(){
        return(
         <Paper className={this.props.classes.root}>
             <Typography component="p">
                 {this.props.note}
             </Typography>
         </Paper>
        );
}
}

NoteItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (NoteItem);