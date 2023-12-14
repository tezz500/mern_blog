import Slider from "react-slick";
import { encryptData } from "../../../helper/helper";
import { Link } from "react-router-dom";
const TagComponent = () => {
    const settings = {
        initialSlide: 0,
        autoplay: false,
        infinite: true,
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 8,
        slidesToScroll: 4,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
                initialSlide: 0
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 0
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    const sliders = [
        {
            btn_text: '',
            title: 'Electornics',
            url: '',
            image: '/images/tags/tag-01.png',
        },
        {
            btn_text: '',
            title: 'Electornics',
            url: '',
            image: '/images/tags/tag-02.png',
        },
        {
            btn_text: '',
            title: 'Electornics',
            url: '',
            image: '/images/tags/tag-03.png',
        },
        {
            btn_text: '',
            title: 'Electornics',
            url: '',
            image: '/images/tags/tag-01.png',
        },
        {
            btn_text: '',
            title: 'Electornics',
            url: '',
            image: '/images/tags/tag-02.png',
        },
        {
            btn_text: '',
            title: 'Electornics',
            url: '',
            image: '/images/tags/tag-03.png',
        },
        {
            btn_text: '',
            title: 'Electornics',
            url: '',
            image: '/images/tags/tag-01.png',
        },
        {
            btn_text: '',
            title: 'Electornics',
            url: '',
            image: '/images/tags/tag-02.png',
        },
        {
            btn_text: '',
            title: 'Electornics',
            url: '',
            image: '/images/tags/tag-03.png',
        },
        {
            btn_text: '',
            title: 'Electornics',
            url: '',
            image: '/images/tags/tag-01.png',
        },
        {
            btn_text: '',
            title: 'Electornics',
            url: '',
            image: '/images/tags/tag-02.png',
        },
        {
            btn_text: '',
            title: '',
            url: '',
            image: '/images/tags/tag-03.png',
        },
        {
            btn_text: '',
            title: '',
            url: '',
            image: '/images/tags/tag-01.png',
        },
        {
            btn_text: '',
            title: '',
            url: '',
            image: '/images/tags/tag-02.png',
        },
        {
            btn_text: '',
            title: '',
            url: '',
            image: '/images/tags/tag-03.png',
        },
        {
            btn_text: '',
            title: '',
            url: '',
            image: '/images/tags/tag-01.png',
        },
        {
            btn_text: '',
            title: '',
            url: '',
            image: '/images/tags/tag-02.png',
        },
        {
            btn_text: '',
            title: '',
            url: '',
            image: '/images/tags/tag-03.png',
        },
    ]
    return (
        <div className="mr-5 ml-5 tag-slider">
            <Slider {...settings}>
                {
                    sliders.map((item, index) => {
                        return (
                            <div key={index + encryptData(item.image)}>
                                <Link to={'#'}>
                                    <img src={item.image} alt="" />
                                </Link>
                                <h6 className="tag-heading">
                                    <Link to={'#'}>{item.title}</Link>
                                </h6>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default TagComponent;