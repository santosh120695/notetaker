import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class SimpleExpansionPanel extends React.Component{
    // const { classes } = props;

    constructor(props) {
        super(props);
        this.inputBox = React.createRef();
        this.get_note=this.get_note.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={value:""}

    }
    get_note(e){
     this.props.note_action(this.state.value)
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }
    render(){
    return (
        <div className={this.props.classes.root}>
<ExpansionPanel>
    <ExpansionPanelSummary>
        <TextField
            id="full-width"
            InputLabelProps={{
                shrink: true,
            }}
            fullWidth
            margin="normal"
            multiline={true}
            ref={this.inputBox}
            value={this.state.value}
            onChange={this.handleChange}
        />
        <label htmlFor="raised-button-file">
            <Button variant="raised" component="span" className={this.props.classes.button} onClick={(e) => this.get_note(e)}>
                Add
            </Button>
        </label>
{/*<Typography className={this.props.classes.heading}>Expansion Panel 1</Typography>*/}
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
        expand
    </ExpansionPanelDetails>
    </ExpansionPanel>
    </div>
);
}
}



SimpleExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);