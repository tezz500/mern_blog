import { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { encryptData } from '../../helper/helper';

const SliderComponent = () => {

  const settings = {
    initialSlide: 0,
    autoplay: true,
    infinite: true,
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const sliders = [
    {
      btn_text: '',
      heading: '',
      url: '',
      image: '/images/sliders/sd-01.jpg',
    },
    {
      btn_text: '',
      heading: '',
      url: '',
      image: '/images/sliders/sd-03.jpg',
    },
    {
      btn_text: '',
      heading: '',
      url: '',
      image: '/images/sliders/sd-04.jpg',
    },
    {
      btn_text: '',
      heading: '',
      url: '',
      image: '/images/sliders/sd-05.jpg',
    },
    {
      btn_text: '',
      heading: '',
      url: '',
      image: '/images/sliders/sd-06.jpg',
    },

  ]

  useEffect(() => {

  }, []);

  return (
    <div className='top-slider'>
      <Slider {...settings}>
        {
          sliders.map((item, index) => {
            return (
              <div key={index+encryptData(item.image)}>
                <img src={item.image} alt="" />
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default SliderComponent;