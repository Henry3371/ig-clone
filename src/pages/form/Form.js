import React from 'react'
import './Form.css'

import { TextField } from '@mui/material'
import { Slider } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function Form() {
    return (
        <div className='form-main'>
            <div className='form'>
                <div></div>
                <p>Tìm căn hộ/biệt thự</p>
                <div>
                    <TextField className='TenCHBT' id="outlined-basic" label="Tên căn hộ/biệt thự"
                        sx={{ m: 1, width: '25ch' }} />

                </div>
                <br />
                <div>
                    <TextField id="outlined-basic" label="Địa điểm" />
                </div>
                <br />
                <div>
                    <TextField id="outlined-basic" label="Loại căn hộ/Biệt thự" />
                </div>
                <br />
                <div>
                    <TextField id="outlined-basic" label="Phương thức thanh toán" />
                    <TextField id="outlined-basic" label="Số đêm" />
                </div>
                <br />
                <div>
                    <p>Khoảng giá</p>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            aria-label="Temperature"
                            defaultValue={3000000}
                            valueLabelDisplay="auto"
                            step={1500000}
                            marks
                            min={1000000}
                            max={9000000}
                        />
                    </Box>
                </div>
                <div className='Button'>
                    <Button variant="contained">Tìm Kiếm</Button>
                </div>

            </div>

            <div className='footer'>
                <div className='uudai'>
                    <h1>Siêu ưu đãi 50%</h1>
                    <p>Kèm mã giảm thêm tới 2 triệu</p>
                </div>

                <div className='banner1'>
                    <img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/04/06/1649255272276-a93a530cca0d1ee5fba191dc2d2f85d3.jpeg?tr=q-75,w-1280' />
                </div>

                <div className='banner2'>
                    <img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/04/06/1649251283239-6fe5a04d9d4debf2bf01f00c154c25f8.jpeg?tr=q-75,w-1280' />
                </div>

                <div className='banner3'>
                    <img src='https://ik.imagekit.io/tvlk/image/imageResource/2021/12/08/1638962825493-42542d2d34f782eef38517be7e4752ff.png?tr=q-75,w-1280' />
                </div>

                <div className='thanhvien'>
                    <h2>Chỉ dành riêng cho thành viên Traveloka</h2>
                    <div className='text-thanhvien'>
                        <p><a style={{ textDecoration: 'none', color: 'rgb(36, 96, 175)' }} href='#'>Đăng nhập</a> hoặc <a style={{ textDecoration: 'none', color: 'rgb(36, 96, 175)' }} href='#'>Đăng kí</a> để khám phá nhiều ưu đãi đặc biệt</p>
                    </div>
                    <div className='items-thanhvien'>
                        <div className='TBGV'>
                            <img className='imgTBGV' src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/25/1506337373515-af609f47175de76990927fa1b716955e.svg?tr=q-75' />
                            <a style={{ textDecoration: 'none', color: 'black' }} href='#'>Thông báo giá vé</a>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronRight"><path d="M9 6L15 12L9 18" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div className='DSDL'>
                            <img className='imgDSDL' src='https://ik.imagekit.io/tvlk/image/imageResource/2018/12/13/1544686625813-8ab151967e81e28cc2eb3288980fe2c0.svg?tr=q-75' />
                            <a style={{ textDecoration: 'none', color: 'black' }} href='#'>Danh sách đã lưu</a>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronRight"><path d="M9 6L15 12L9 18" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div className='ER'>
                            <img className='imgER' src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/25/1506337376527-d35060d4ef861c829d6902ff7ac4b664.svg?tr=q-75' />
                            <a style={{ textDecoration: 'none', color: 'black' }} href='#'>Easy Reschedule</a>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronRight"><path d="M9 6L15 12L9 18" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div className='PQP'>
                            <img className='imgPQP' src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/25/1506337380633-78091cf18a1b1d8cc6f125991f7d9c17.svg?tr=q-75' />
                            <a style={{ textDecoration: 'none', color: 'black' }} href='#'>Passenger Quick Pick</a>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronRight"><path d="M9 6L15 12L9 18" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                    </div>
                </div>

                <div className='khuyenmaiyeuthich'>
                    <div className='title'>
                        <h2>Khuyến mãi được yêu thích</h2>
                        <div className='title-right'>
                            <a style={{ textDecoration: 'none', color: 'rgb(36, 96, 175)', fontSize: '1000' }} href='#'>Xem thêm khuyến mãi</a>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronRight"><path d="M9 6L15 12L9 18" stroke="#0194f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                    </div>

                    <div className='itemsKhuyenmaiyeuthich'>
                        <div className='itemsKhuyenmaiyeuthich-child'>
                            <a href="#">
                                <img className='imgKMYT1' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/04/06/1649259234394-62605fc654ae807e2899e09d061c0e7a.png?tr=h-150,q-75,w-296' />
                            </a>
                            <a href="#">
                                <img className='imgKMYT1' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/04/02/1648898973948-5ddbdda5191398a24801af4e1eb8d393.png?tr=h-150,q-75,w-296' />
                            </a>
                            <a href="#">
                                <img className='imgKMYT1' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/04/06/1649237007478-62b01adc25b2cd980b69426fd9f742da.png?tr=h-150,q-75,w-296' />
                            </a>
                        </div>
                        <div className='itemsKhuyenmaiyeuthich-child'>
                            <a href="#">
                                <img className='imgKMYT1' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/03/17/1647503048361-a3928b8284951876f8517363b77e110c.jpeg?tr=h-150,q-75,w-296' />
                            </a>
                            <a href="#">
                                <img className='imgKMYT1' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/04/07/1649315686206-427fdc6225748d594d5b914dfa7d0cad.jpeg?tr=h-150,q-75,w-296' />
                            </a>
                            <a href="#">
                                <img className='imgKMYT1' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/04/06/1649270206872-eb88854a17379cce1ce95aa19326d9a8.jpeg?tr=h-150,q-75,w-296' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='duocnhaden'>
                    <h2>Traveloka đã được nhắc đến trên</h2>
                    <div className='itemsDuocnhacden'>
                        <img className='imgDND' src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075511476-549788d3f233d9fd4f82e56aadaa0699.jpeg?tr=q-75,w-150' />
                        <img className='imgDND' src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075524458-863bf8978027623596b07905b77c3038.jpeg?tr=q-75,w-150' />
                        <img className='imgDND' src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075529727-26e887499b15d490d6d8b7fe59254960.png?tr=q-75,w-150' />
                        <img className='imgDND' src='https://ik.imagekit.io/tvlk/image/imageResource/2017/12/19/1513667223219-208b4bee6762dda1687818bbfce0c833.png?tr=q-75,w-150' />
                        <img className='imgDND' src='https://ik.imagekit.io/tvlk/image/imageResource/2017/12/19/1513667252903-2eee8ba567cfce19f977d58698e00f63.png?tr=q-75,w-150' />
                        <img className='imgDND' src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075535089-95cb6f321f857a1f7a19feb443689a35.jpeg?tr=q-75,w-150' />
                    </div>
                </div>

                <div className='baiviet'>

                </div>

                <div className='doitacthanhtoan'>

                </div>

                <div className='doitachangkhong'>

                </div>

                <div className='end'></div>
            </div >


        </div>
    )
}

export default Form