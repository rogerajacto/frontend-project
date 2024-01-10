import {register} from "swiper/element/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";




function Carousel({sliders}) {

    return(
        <>
        <div className="slider-container">
            <Swiper
            loop={true}
            autoplay={true}
            slidesPerView={1}
            pagination ={{clickable: true}}
            navigation>

                {sliders?.map(function (img) {

                    return(
                        <>
                            <SwiperSlide>
                                <img className="slider-item" src={img.slideIMG} alt="image"></img>
                            </SwiperSlide>
                        </>
                    )
                    
                })}

            </Swiper>
        </div>
        
        </>
    )
}

export default Carousel
