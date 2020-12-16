import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import styles from './SimpleMenu.module.css';

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(!anchorEl);
  };

  return (
    <div className={styles.SimpleMenuDiv}>
      <IconButton className={styles.MyCustomButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon fontSize="large" className={styles.SimpleMenuButton} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <a className={styles.SimpleMenuLinks} href="#header"><MenuItem href="#header" onClick={handleClose}>Home</MenuItem></a>
        <a className={styles.SimpleMenuLinks} href="#section-one"><MenuItem href="#section-one" onClick={handleClose}>About</MenuItem></a>
        <a className={styles.SimpleMenuLinks} href="#section-two"> <MenuItem href="#section-two" onClick={handleClose}>Skills</MenuItem></a> 
        <a className={styles.SimpleMenuLinks} href="#section-three"> <MenuItem href="#section-three" onClick={handleClose}>Projects</MenuItem></a>
        <a className={styles.SimpleMenuLinks} href="#section-five"> <MenuItem href="#section-five" onClick={handleClose}>Contact</MenuItem></a>
      </Menu>
    </div>
  );
}


export default SimpleMenu;


