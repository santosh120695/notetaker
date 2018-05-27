import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SimpleExpansionPanel from  '../InputField/input_filed';
import NoteList from '../NoteList/notelist'
const drawerWidth = 200;


const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
        minHeight:'700px',
    },
    toolbar: theme.mixins.toolbar,
});

class  ClippedDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notes:[]};
        this.add_notes=this.add_notes.bind(this)
        // this.inputBox = React.createRef();
    }

    add_notes(note){
        this.setState(prevState => (
            // prevState.push(note)
            {
            notes: prevState.notes.concat([note])
        }));
        console.log(this.state.notes)

    }

    render() {
        console.log(this.state.notes)
        return (
            <div className={this.props.classes.root}>
                <AppBar position="absolute" className={this.props.classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>
                            NoteTaker
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: this.props.classes.drawerPaper,
                    }}
                >
                    <div className={this.props.classes.toolbar}/>
                    <List></List>
                    <Divider/>
                    <List></List>
                </Drawer>
                <main className={this.props.classes.content}>
                    <div className={this.props.classes.toolbar}/>
                    <SimpleExpansionPanel note_action={this.add_notes} />
                    <NoteList notes={this.state.notes}/>
                </main>
            </div>
        );

    }
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
