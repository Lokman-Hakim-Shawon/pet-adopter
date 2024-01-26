"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './UserReview.css'


import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

const UserReview = () => {

    return (
        <div className='mt-20 mb-12'>

        <div className='text-center'>
            <h1 className='text-3xl font-semibold'>Users Review</h1>
            <h4 className='text-base font-semibold text-[#F04336]'>Users opinions</h4>
        </div>


        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="mySwiper"
        >

            {/* Card 1  */}
            <SwiperSlide className='bg-pink-100'>
                <div className='text-center'>
                    <img className='ml-[106px]' src="https://i.ibb.co/t4qzwBv/Masud-Rana.jpg" alt="" />

                    <div>
                        <h1 className='text-xl mt-2'>Masud Rana</h1>

                        {/* Rating 1 */}
                        <div className="rating w-20">
                            <input type="radio" className="mask mask-star bg-yellow-400" />
                            <input type="radio" className="mask mask-star bg-yellow-400" />
                            <input type="radio" className="mask mask-star bg-yellow-400" checked />
                            <input type="radio" className="mask mask-star " />
                            <input type="radio" className="mask mask-star " />
                        </div>

                        <p>This is a very good pet adoption application. And their service is very good.</p>
                    </div>
                </div>
            </SwiperSlide>

            {/* Card 2  */}
            <SwiperSlide className='bg-green-100'>
                <div className='text-center'>
                    <img className='ml-[106px]' src="https://i.ibb.co/t4qzwBv/Masud-Rana.jpg" alt="" />

                    <div>
                        <h1 className='text-xl mt-2'>Masud Rana</h1>

                        {/* Rating 2 */}
                        <div className="rating w-20">
                            <input type="radio" className="mask mask-star bg-yellow-400" />
                            <input type="radio" className="mask mask-star bg-yellow-400" checked />
                            <input type="radio" className="mask mask-star " />
                            <input type="radio" className="mask mask-star " />
                            <input type="radio" className="mask mask-star " />
                        </div>
                        <p>This is a very good pet adoption application. And their service is very good.</p>
                    </div>
                </div>
            </SwiperSlide>

            {/* Card 3  */}
            <SwiperSlide className='bg-orange-100'>
                <div className='text-center'>
                    <img className='ml-[106px]' src="https://i.ibb.co/t4qzwBv/Masud-Rana.jpg" alt="" />

                    <div>
                        <h1 className='text-xl mt-2'>Masud Rana</h1>

                        {/* Rating 3 */}
                        <div className="rating w-20">
                            <input type="radio" name="rating-3" className="mask mask-star bg-yellow-400" />
                            <input type="radio" name="rating-3" className="mask mask-star bg-yellow-400" checked />
                            <input type="radio" name="rating-3" className="mask mask-star bg-yellow-400" checked />
                            <input type="radio" name="rating-3" className="mask mask-star " />
                            <input type="radio" name="rating-3" className="mask mask-star " />
                        </div>

                        <p>This is a very good pet adoption application. And their service is very good.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    );
};

export default UserReview;