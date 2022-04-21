import React from 'react'
import './List.css'
import Post from './post/Post';

import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function List() {
    const [value, setValue] = React.useState(2);

    return (
        <div className='List'>
            <div className='bannerMain'>
                <img className='mannerMain1' src="https://ik.imagekit.io/tvlk/image/imageResource/2021/12/01/1638341428791-6a1768cf58f22fb6a4329ff2e5477a39.jpeg?tr=q-75" />
            </div>


            <div className='ketquatimkiem'>
                <h3>Kết Quả tìm kiếm</h3>
                <Button variant="contained">Sửa Tìm Kiếm</Button>
            </div>

            <div className='content'>
                <div className='contentLeft'>
                    <div className='Map'>
                        <p>GoogleMap</p>
                    </div>

                    <div className='SapXepKetQua'>
                        <h3>Sắp xếp kết quả</h3>
                        <br />
                        <h5>Sắp xếp kết quả theo lựa chọn</h5>
                        <br />
                        <div className='checkbox'>
                            <div className='checkboxleft'>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Giá cao" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Giá thấp" />
                                </FormGroup>
                            </div>
                            <div className='checkboxright'>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Đánh giá" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Phổ biến" />
                                </FormGroup>
                            </div>
                        </div>
                    </div>


                    <div className='Locketqua'>
                        <div className='textLKQ'>
                            <h3>Lọc kết quả</h3>
                            <br />
                            <h5>Hiển thị kết quả phân loại theo</h5>
                            <br />
                            <p>______________________________________</p>
                            <br />
                        </div>

                        <div className='KhoangGia'>
                            <h3>Khoảng giá/đêm</h3>
                            <br />
                            <p>Slidebar</p>
                        </div>

                        <div className='HangSao'>
                            <h3>Hạng Sao</h3>
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


                        <div className='TienNghi'>
                            <h3>Tiện nghi</h3>
                            <br />
                            <div className='checkboxTienNghi'>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Wifi" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Hồ bơi" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Chỗ đậu xe" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Thang máy" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Nhà hàng" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Lối dành cho xe lăng" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Phòng họp" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Đưa đón sân bay" />
                                </FormGroup>
                            </div>
                        </div>

                        <div className='UuTien'>
                            <h3>Ưu Tiên</h3>
                            <br />
                            <div className='checkboxUuTien'>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Tất cả" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Thanh toán khi nhận phòng" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Phù hợp gia đình" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Biệt thự" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Căn hộ" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ưu đãi đặc biệt" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Khu nghỉ dưỡng" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Chọn nhiều nhất" />
                                </FormGroup>
                            </div>
                        </div>

                        <div className='LoaiHinh'>
                            <h3>Loại hình lưu trú</h3>
                            <br />
                            <div className='checkboxLoaiHinh'>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Khu nghỉ dưỡng" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Căn hộ" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Nhà riêng" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Nhà khách gia đình" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Khách sạn" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Nhà nghỉ" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Biệt thự" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Khu cắm trại" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Homestay" />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Khác" />
                                </FormGroup>
                            </div>
                        </div>

                    </div>

                </div>



                <div className='contentRight'>
                    <div className='TimkiemTP'>

                    </div>

                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />

                </div>
            </div>


        </div>
    )
}

export default List