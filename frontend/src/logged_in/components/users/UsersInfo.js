import React from "react";
import PropTypes from "prop-types";
import { ListItemText, Toolbar, withStyles } from "@material-ui/core";

const styles = {
  toolbar: {
    justifyContent: "space-between"
  }
};

function UsersInfo(props) {
  const {
    classes,
    openAddUserDialog
  } = props;
  
  return (
    <Toolbar className={classes.toolbar}>
      <ListItemText primary="" />
      
    </Toolbar>
  );
}

UsersInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  openAddUserDialog: PropTypes.func.isRequired
};

export default withStyles(styles)(UsersInfo);
