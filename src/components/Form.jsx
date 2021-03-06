import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BasicTabs from './tabs';
import Clothedlist from './clothed';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function Form(props) {

    //user.fashion: 最低限の下着類は初期値として入れておく(下着0.04+ソックス0.03+革靴0.03)
    const [user, setUser] = useState({ birthday: "1996-01-01T21:11:54", height: "173", weight: "87.4", sex: "male", fashion: 1.24, email: props.email });
    const [value, setValue] = React.useState(new Date('1996-01-01T21:11:54'));
    const navigate = useNavigate();

    const handle = (newValue) => {
        setValue(newValue);
        user["birthday"] = newValue;
    };
    function handleChange(e) {
        console.log(e);
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        postForm();
    }

    function postForm() {
        // TODO : backendのURLと合わせる 
        const url = 'http://127.0.0.1:5000/post';
        const data = {
            post_text: user
        };
        console.log(user);
        axios.post(url, data)
            .then(
                response => {
                    console.log(response.data);
                    props.changeComTem(response.data['ComfortTemperature']);
                    props.changeMap(response.data['Map']);
                    navigate('/map');
                }
            );
    }





    //服装リストの定義
    const [clothed_list, setcloth] = useState([
        {
            img: 'images/clothes/tops/jacket.png',
            title: 'ジャケット',
            cloth: 0.54,
            id: new Date().getTime(),

        },
        {
            img: 'images/clothes/tops/shirt.png',
            title: 'シャツ',
            cloth: 0.25,
            id: new Date().getTime() + 1,

        },
        {
            img: 'images/clothes/tops/heattech.png',
            title: '高断熱インナー',
            cloth: 0.2,
            id: new Date().getTime() + 2,
        },
        {
            img: 'images/clothes/bottoms/slacks.png',
            title: 'パンツ',
            cloth: 0.25,
            id: new Date().getTime() + 3,
        },
    ]);

    function add_cloth(cloth) {
        const new_clothed_list = [...clothed_list, cloth];
        setcloth(new_clothed_list);
        const new_fashion = user.fashion + cloth.cloth;
        setUser({ ...user, fashion: new_fashion });
    }


    function remove_cloth(cloth) {
        const removed_clothed_list = clothed_list.filter(function (item) {
            return item.id !== cloth.id;
        });
        setcloth(removed_clothed_list);
        const new_fashion = user.fashion - cloth.cloth;
        setUser({ ...user, fashion: new_fashion });
    }

    /*
      色見本サイト
      https://materialui.co/colors

      色は下の変数で変更しよう。
    */
    const myitemcolor = '#54BAB9';
    const mybackgroundcolor = '#FBF8F1';
    const mytextboxcolor = '#F6F6F6';

    //myitemcolor   #26C6DA 
    //このどっちか　#54BAB9 #00CED1
    // #E0F7FA


    return (
        // <ThemeProvider theme={theme}>
        <Container maxWidth="md" style={{ backgroundColor: mybackgroundcolor }} sx={{ marginTop: 20, }}>

            <Grid container spacing={4} alignItems="center" justifyContent="center">

                <Grid item xs={12} md={3}>
                    <Box sx={{
                        backgroundColor: myitemcolor,
                        height: 'auto',
                        borderRadius: 2,
                        p: 2,
                    }}>
                        <Typography variant="h5" margin="normal" align="center" sx={{ m: 0 }}>生年月日</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={9} style={{ backgroundColor: '#FBF8F1' }}
                >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="生年月日を入力してください。"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            name="birthday"
                            id="birthday"
                            onChange={handle}
                            
                            renderInput={(params) => 
                                <TextField 
                                    fullWidth
                                    style={{ backgroundColor: mytextboxcolor }} {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Box sx={{
                        backgroundColor: myitemcolor,
                        height: 'auto',
                        borderRadius: 2,
                        p: 2,
                    }}>
                        <Typography variant="h5" margin="normal" align="center" sx={{ l: 0 }}>身長</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={9} style={{ backgroundColor: '#FBF8F1' }}
                >
                    <TextField
                        required
                        fullWidth
                        id="height"
                        //label="身長[cm]を入力してください。"
                        label="身長を入力してください。"
                        name="height"
                        onChange={handleChange}
                        style={{ backgroundColor: mytextboxcolor }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={3} >
                    <Box sx={{
                        backgroundColor: myitemcolor,
                        height: 'auto',
                        borderRadius: 2,
                        p: 2,
                    }}>
                        <Typography variant="h5" margin="normal" align='center' sx={{ l: 0 }}>体重</Typography>

                    </Box>
                </Grid>
                <Grid item xs={12} md={9} style={{ backgroundColor: '#FBF8F1' }}
                >
                    <TextField
                        // margin="normal"
                        required
                        fullWidth
                        id="weight"
                        //label="体重[kg]を入力してください。"
                        label="体重を入力してください。"
                        name="weight"
                        onChange={handleChange}
                        style={{ backgroundColor: mytextboxcolor }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                        }}

                    />
                </Grid>

                <Grid item xs={12} md={3}>
                    <Box sx={{
                        backgroundColor: myitemcolor,
                        height: 'auto',
                        borderRadius: 2,
                        p: 2,
                    }}>
                        <Typography variant="h5" margin="normal" align="center" sx={{ l: 0 }}>性別</Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} md={9} style={{ backgroundColor: '#FBF8F1' }}
                >
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="sex"
                        onChange={handleChange}
                    >
                        <FormControlLabel value="male" control={<Radio />} label="男性" />
                        <FormControlLabel value="female" control={<Radio />} label="女性" />
                    </RadioGroup>
                </Grid>




                {/*服装選択済みリスト*/}
                <Grid item xs={12} md={3}>
                    <Box sx={{
                        backgroundColor: myitemcolor,
                        height: 'auto',
                        borderRadius: 2,
                        p: 2,
                    }}>
                        <Typography variant="h5" margin="normal" align="center" sx={{ l: 0 }}>今の服装</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={9} style={{ backgroundColor: '#FBF8F1', opacity: 1 }}
                >
                    <Typography variant="h6" margin="normal" align="center" sx={{ l: 0 }}>今現在のあなたの服装です。クリックで選択を解除できます。<br></br>不足がある場合は"衣服選択"欄から追加してください。</Typography>
                </Grid>

                <Grid item xs={12} md={3} style={{ backgroundColor: '#FBF8F1', opacity: 0 }}
                >
                </Grid>
                <Grid item xs={12} md={9} style={{ backgroundColor: '#FBF8F1' }}
                >

                    <Clothedlist
                        clothed_list={clothed_list}
                        remove_cloth={(i) => remove_cloth(i)}
                    />
                </Grid>



                {/*服装選択画面*/}
                <Grid item xs={12} md={3}>
                    <Box sx={{
                        backgroundColor: myitemcolor,
                        height: 'auto',
                        borderRadius: 2,
                        p: 2,
                    }}>
                        <Typography variant="h5" margin="normal" align="center" sx={{ l: 0 }}>衣服選択</Typography>
                    </Box>

                </Grid>

                {/*服装選択パネル位置調整用の空コンポーネント*/}
                <Grid item xs={12} md={9} style={{ backgroundColor: '#FBF8F1', opacity: 1 }}
                >
                    <Typography variant="h6" margin="normal" align="center" sx={{ l: 0 }}>今現在着用している衣服を下部のパネルから選択してください。</Typography>
                </Grid>
                <Grid item xs={12} md={3} style={{ backgroundColor: '#FBF8F1', opacity: 0 }}
                >
                </Grid>

                {/*服装選択パネル*/}
                <Grid item xs={12} md={9} style={{ backgroundColor: '#FBF8F1' }}
                >

                    <BasicTabs
                        add_cloth={(i) => add_cloth(i)}
                        sex={user.sex}
                    />
                </Grid>


                <Grid item style={{ backgroundColor: '#FBF8F1' }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#54BAB9",
                            color: "black",
                            "&:hover": {
                                opacity: 0.6,
                                backgroundColor: "#54BAB9"
                            },
                            "&:active": {
                                opacity: 0.3,
                                backgroundColor: "#54BAB9"
                            }

                        }}
                        size="large"
                        onClick={handleSubmit}>送信</Button></Grid>
            </Grid>
        </Container>
        // </ThemeProvider>
    )
}

export default Form;