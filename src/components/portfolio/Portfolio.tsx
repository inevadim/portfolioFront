import styles from './Portfolio.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import portfolio from "../../assets/img/portfolio/portfolio.png"
import telegram from "../../assets/img/portfolio/telegram.png"
import inst from "../../assets/img/portfolio/inst.jpg"
import x from "../../assets/img/portfolio/x.jpg"
import vk from "../../assets/img/portfolio/vk.jpg"
import twich from "../../assets/img/portfolio/twich.png"
import Modal from './modal/Modal';
import { useState } from 'react';
import ItemSlider from './itemPortfolio/ItemSlider';

function Portfolio() {
  const [modalActive, setModalActive] = useState(true);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
  return (
    <div className={styles.wrapper}>
      <span className={styles.nameSection}>PORTFOLIO</span>
      <div className={styles.portfolio}>
        <Slider {...settings}>

          <ItemSlider imgItem={portfolio} name={"Portfolio"} />
          <ItemSlider imgItem={telegram} name={"Telegram"} />
          <ItemSlider imgItem={inst} name={"Instagram"} />
          <ItemSlider imgItem={x} name={"Site X"} />
          <ItemSlider imgItem={vk} name={"VK"} />
          <ItemSlider imgItem={twich} name={"Twich"} />

        </Slider>
        <Modal active={modalActive} setActiveModal={setModalActive} />

      </div>
    </div>
  );
}

export default Portfolio

