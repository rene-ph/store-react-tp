import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStyles from './carousel.style';
import { FC } from "react";

const Carousel: FC = () => {
    const classes = useStyles();

    var settings = {
        dots: true,
    };
    return (
            <Slider {...settings} className={classes.root}>
                <div>
                    <img src="https://via.placeholder.com/600x150" alt="holder-shop"></img>
                </div>
                <div>
                    <img src="https://via.placeholder.com/600x150" alt="holder-shop"></img>
                </div>
                <div>
                    <img src="https://via.placeholder.com/600x150" alt="holder-shop"></img>
                </div>
            </Slider>
    )
}

export default Carousel;