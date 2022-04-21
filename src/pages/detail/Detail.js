import React from 'react'
import './Detail.css'

import Button from '@mui/material/Button';

function Detail() {
    return (
        <div className='chitiet'>
            <div className='ketquatimkiem'>
                <h3>Kết Quả tìm kiếm</h3>
                <Button variant="contained">Sửa Tìm Kiếm</Button>
            </div>


            <div className='Contents'>
                <div className='Text'>
                    <h2>J'ADORE Homestay</h2>
                    <p className='loai'>NHÀ NGHỈ HOMESTAY</p>
                    <p className='DiaChi'>A26 Phu Dong Thien Vuong St., Ward 8, Da Lat City, Lam Dong Province, Viet Nam, Phường 8, Đà Lạt, Tỉnh Lâm Đồng, Việt Nam</p>
                </div>

                <div className='img'>
                    <div className='mainImg'>
                        <img className='imgMain' src='https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67757705-5e2998efc88e8513ff8c0bf79fa24088.jpeg?_src=imagekit&tr=c-at_max,h-488,q-40,w-768' />
                    </div>
                    {/* <div className='sideImg'>
                        <img className='imgSide' src='https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67757705-5e2998efc88e8513ff8c0bf79fa24088.jpeg?_src=imagekit&tr=c-at_max,h-488,q-40,w-768' />
                        <img className='imgSide' src='https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67757705-5e2998efc88e8513ff8c0bf79fa24088.jpeg?_src=imagekit&tr=c-at_max,h-488,q-40,w-768' />
                        <img className='imgSide' src='https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67757705-5e2998efc88e8513ff8c0bf79fa24088.jpeg?_src=imagekit&tr=c-at_max,h-488,q-40,w-768' />
                        <img className='imgSide' src='https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67757705-5e2998efc88e8513ff8c0bf79fa24088.jpeg?_src=imagekit&tr=c-at_max,h-488,q-40,w-768' />
                    </div> */}
                </div>

                <div className='ThongTin-Gia'>

                </div>
            </div>


        </div>
    )
}

export default Detail