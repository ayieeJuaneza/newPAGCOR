import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from "react-bootstrap";
import Banners1 from "../assets/banners/jili-web.png";
import Banners2 from "../assets/banners/pg-web.png";
import Banners3 from "../assets/banners/rtg-web.png";
import MobBanners1 from "../assets/banners/jili-mob.png";
import MobBanners2 from "../assets/banners/pg-mob.png";
import MobBanners3 from "../assets/banners/rtg-mob.png";

function Headers() {

    // const testBannersArray =[Banners1,Banners2,Banners3]
    // const testBannersMobArray =[MobBanners1,MobBanners2,MobBanners3]

    // var headerSettings = {
    //     autoplay: true,
    //     dots: false,
    //     infinite: true,
    //     speed: 3000,
    //     autoplaySpeed: 2000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 3,
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 3,
    //             prevArrow:'.arr_back',
    //             nextArrow:'.arr_next',
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 2
    //         }
    //       }
    
    //     ]
    //   };
  return (
    <div className='img-bg'>
      <div className='mb-5 carousel-header-bg header-text-format py-5'>
        <Row>
          <Col lg={4} sm={12} className='padding-header-text'>
            <h1 className='global-head'>
              Play and Have Fun
            </h1>
            <p>
              Welcome to Casino Filipino Online, where excitement and fortune await you around every virtual corner. Indulge in a world of exhilarating games, from classic card tables to cutting-edge slots, all within a secure and regulated online environment. Join us today to experience the thrill of winning while enjoying the peace of mind that comes with a fully authorized and trustworthy gaming platform.
            </p>
          </Col>
        </Row>
      </div>
      {/* <div className='mb-5 carousel-header-bg'>
            <Slider {...headerSettings} className="web-banner">
                    {testBannersArray.map((latest) => (
                    <div className=''>
                      <img src={latest} className="w-100" alt="" />
                    </div>
                    ))}
            </Slider>
            <Slider {...headerSettings} className="mob-banner">
                    {testBannersMobArray.map((Mob) => (
                    <div className=''>
                      <img src={Mob} className="w-100" alt="" />
                    </div>
                    ))}
            </Slider>
      </div> */}
    </div>
  )
}

export default Headers