import React from 'react';
import { Container, Grid } from '@mui/material';
import Countdown from './Countdown';
import { BsArrowRight } from 'react-icons/bs';


const FlashSale = () => {


    return (

        
        <>
        
            <section id='flash_sale' className='section_padding'>

                <Container>

                    {/* Header Part */}
                    <div className="header_part">

                        <Grid container spacing={3} className="d_flex">

                            <Grid item xs={6}>

                                <h3 className='d_flex'>
                                    Flash Sale
                                    <svg width="74" height="26" viewBox="0 0 74 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.1348 2L2.00009 2" stroke="#111A45" stroke-width="3" stroke-linecap="round"/>
                                        <path d="M72.1689 24.5L14.0819 24.5" stroke="#111A45" stroke-width="3" stroke-linecap="round"/>
                                    </svg>
                                </h3>

                                <h2>Special Discount Offer for Items</h2>

                            </Grid>

                            <Grid item xs={6}>

                                <div className="right">
                                    <h4>Hurry Up! Offer End In:</h4>
                                
                                    <Countdown></Countdown>
                                </div>

                            </Grid> 

                        </Grid>

                    </div>

                    {/* content Item */}
                    <div className="content_item">

                        <Grid container spacing={3} className="d_flex">

                            {/* Item */}
                            <Grid item xs={3}>

                                <div className="content_item_item">

                                    {/* img */}
                                    <div className="img">
                                        <img src="assets/images/flash1.png" alt="" />
                                    </div>

                                    {/* text */}
                                    <div className="text">

                                        {/* Subject */}
                                        <div className="subject">
                                            <span><strong>বিষয় :</strong> সীরাতে রাসূল (সা.)</span>
                                        </div>

                                        <h4>সীরাত বিশ্বকোষ (১১ খণ্ড)</h4>
                                        <h3>1999 TK <del>34 TK</del></h3>
                                        <h5><strong>প্রকাশনী :</strong> মাকতাবাতুল আযহার</h5>

                                        <a href="" className='view_details'>View Details</a>

                                    </div>

                                </div>
                                
                            </Grid>

                            {/* Item */}
                            <Grid item xs={3}>

                                <div className="content_item_item">

                                    {/* img */}
                                    <div className="img">
                                        <img src="assets/images/flash2.png" alt="" />
                                    </div>

                                    {/* text */}
                                    <div className="text">

                                        {/* Subject */}
                                        <div className="subject">
                                            <span><strong>বিষয় :</strong> সীরাতে রাসূল (সা.)</span>
                                        </div>

                                        <h4>সীরাত বিশ্বকোষ (১১ খণ্ড)</h4>
                                        <h3>1999 TK <del>34 TK</del></h3>
                                        <h5><strong>প্রকাশনী :</strong> মাকতাবাতুল আযহার</h5>

                                        <a href="" className='view_details'>View Details</a>

                                    </div>

                                </div>
                                
                            </Grid>

                            {/* Item */}
                            <Grid item xs={3}>

                                <div className="content_item_item">

                                    {/* img */}
                                    <div className="img">
                                        <img src="assets/images/flash3.png" alt="" />
                                    </div>

                                    {/* text */}
                                    <div className="text">

                                        {/* Subject */}
                                        <div className="subject">
                                            <span><strong>বিষয় :</strong> সীরাতে রাসূল (সা.)</span>
                                        </div>

                                        <h4>সীরাত বিশ্বকোষ (১১ খণ্ড)</h4>
                                        <h3>1999 TK <del>34 TK</del></h3>
                                        <h5><strong>প্রকাশনী :</strong> মাকতাবাতুল আযহার</h5>

                                        <a href="" className='view_details'>View Details</a>

                                    </div>

                                </div>
                                
                            </Grid>

                            {/* Item */}
                            <Grid item xs={3}>

                                <div className="content_item_item">

                                    {/* img */}
                                    <div className="img">
                                        <img src="assets/images/flash4.png" alt="" />
                                    </div>

                                    {/* text */}
                                    <div className="text">

                                        {/* Subject */}
                                        <div className="subject">
                                            <span><strong>বিষয় :</strong> সীরাতে রাসূল (সা.)</span>
                                        </div>

                                        <h4>সীরাত বিশ্বকোষ (১১ খণ্ড)</h4>
                                        <h3>1999 TK <del>34 TK</del></h3>
                                        <h5><strong>প্রকাশনী :</strong> মাকতাবাতুল আযহার</h5>

                                        <a href="" className='view_details'>View Details</a>

                                    </div>

                                </div>
                                
                            </Grid>

                             {/* View All */}
                             <Grid item xs={12}>

                                <div className="view_all_part">
                                    <a href="" className='view_all d_flex'> View All  <BsArrowRight /></a>
                                </div>

                            </Grid>

                        </Grid>

                    </div>

                </Container>

                {/* right_bg */}
                <div className="Flash_right_bg">
                    <img src="assets/images/banner_bgs.png" alt="" />
                </div>

                {/* bottom */}
                <div className="Flash_bottom_dots">
                    <img src="assets/images/dots.png" alt="" />
                </div>

            </section>
        
        </>


    )


}

export default FlashSale