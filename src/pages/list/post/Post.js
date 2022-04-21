import React from 'react'
import './Post.css'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Post() {
    const [value, setValue] = React.useState(2);

    return (
        <div className='PostTong'>
            <div className='poster'>
                <img className='imgPoster' src='https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67810653-aa6142346de7035242014b8e43b1ca20.jpeg?tr=q-40,w-300,h-300&_src=imagekit' />
                <div className='NhomTen'>
                    <div className='TenKS'>
                        <h3>Khách Sạn Đà Lạt Royal Palace</h3>
                    </div>
                    <br />
                    <div className='LoaiHinh'>
                        <h4>Khách sạn</h4>
                    </div>
                    <br />
                    <div className='DiaChi'>
                        <h5>49 Hà Huy Tập, Phường 3, Đà Lạt</h5>
                    </div>
                    <br />

                    <div className='rating'>
                        <Box sx={{
                            '& > legend': { mt: 2 },
                        }}>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>
                    </div>
                </div>

                <div className='GiaThanhToan'>
                    <div className='Gia'>
                        <h3>950.000vnd</h3>
                    </div>
                    <div className='btnChon'>
                        <Button variant="contained">Chọn</Button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Post