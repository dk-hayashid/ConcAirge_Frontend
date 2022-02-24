import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { deepOrange} from '@mui/material/colors'


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const ResponsiveAppBar = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const pages = {
        "ホーム": () => { navigate('/'); },
        "レコメンド": () => { navigate('/form'); }
    };
    
    
    const character = props.userName === '' ? 'G': props.userName[0].toUpperCase();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logoutPage = () => {
        props.setToken();
        navigate('/');
    }


    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar sx={"background-color:#5F9EA0;"}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            >
                                ConcAirge
                            </Typography>


                            <Box sx={{ flexGrow: 1, display: { sm: 'flex', md: 'none' } ,backgroundColor:'#5F9EA0'}}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {Object.keys(pages).map(page => (
                                        <MenuItem key={page} onClick={pages[page]}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography
                                variant="h3"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            >
                                ConcAirge
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {Object.keys(pages).map(page => (
                                    <Button
                                        key={page}
                                        onClick={pages[page]}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                            {props.token === 'guestuser' ? 
                                (<Button variant="contained" sx={{
                                    backgroundColor:"#F7ECDE",
                                    color:"black",
                                    "&:hover":{
                                        opacity:0.8,
                                        cursor: "pointer",
                                        backgroundColor:"#e0f2f1",
                                      },
                                    "&:active":{
                                        opacity:0.3,
                                        cursor: "pointer",
                                        backgroundColor:"#e0f2f1",
                                      }
                                
                                }} 
                                    size="large" onClick={logoutPage}>サインイン</Button>) :
                                (
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar sx={{ bgcolor: deepOrange[500] }}>{character}</Avatar>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    
                                    <MenuItem key="logout">
                                        <Typography textAlign="center">{props.userName}</Typography>
                                    </MenuItem>
                                    <MenuItem key="logout" onClick={logoutPage}>
                                        <Typography textAlign="center">サインアウト</Typography>
                                    </MenuItem>

                                    {/* {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))} */}
                                </Menu>
                            </Box>

                                )}
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    );
};
export default ResponsiveAppBar;
