import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";

import { deepPurple } from "@material-ui/core/colors";
import NotifyModal from "../NotifyModal";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  Menu,
  MenuItem,
  makeStyles,
  Grid,
  Tooltip,
  IconButton,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ContactsIcon from "@material-ui/icons/Contacts";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";

import { Badge } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dropMenu: {
    marginTop: "63px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "63px",
    },
  },
  dropNotify: {
    marginTop: "63px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "63px",
    },
  },
  menu: {
    "&:hover": {
      backgroundColor: theme.palette.action.focus,
    },
  },
  menuContainer: {
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
  },
}));

const GeneralMenu = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNotifY, setAnchorElNotify] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleOpenNotify = (e) => {
    setAnchorElNotify(e.currentTarget);
  };

  const handleCloseNotify = () => {
    setAnchorElNotify(null);
  };

  const { auth, theme, notify } = useSelector((state) => state);
  const dispatch = useDispatch();

  const newArr = notify.data.filter((item) => item.isRead === false);

  return (
    <>
      <Grid className={classes.menuContainer}>
        <Grid style={{ opacity: 1 }}>
          <Link to="/">
            {" "}
            <span className="nav-link pr-2 pr-lg-3">
              <Typography className="home-icon1">Home</Typography>
            </span>
          </Link>
        </Grid>
        <Grid style={{ opacity: 1 }}>
          <Link to="/quiz">
            {" "}
            <span className="nav-link pr-2 pr-lg-3">
              <Typography className="home-icon1">Quiz</Typography>
            </span>
          </Link>
        </Grid>
        <Grid style={{ opacity: 1 }}>
          <Link to="/help&support">
            {" "}
            <span className="nav-link pr-2 pr-lg-3">
              <Typography className="home-icon1">FAQs</Typography>
            </span>
          </Link>
        </Grid>
        <Grid style={{ opacity: 1 }}>
          <Link to="/reportProblem">
            {" "}
            <span className="nav-link pr-2 pr-lg-3">
              <Typography className="home-icon1">Contact</Typography>
            </span>
          </Link>
        </Grid>
        <Grid style={{ opacity: 1 }}>
          <Link to="/about">
            {" "}
            <span className="nav-link pr-2 pr-lg-3">
              <Typography className="home-icon1">About</Typography>
            </span>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default GeneralMenu;
