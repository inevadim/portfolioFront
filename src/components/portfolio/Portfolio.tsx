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
import ItemSlider from './itemPortfolio/ItemSlider';
import { useModalStore } from '../../store/modalStore';

function Portfolio() {

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

  const { textModal, nameProject, image } = useModalStore();

  return (

    <div className={styles.wrapper} id="portfolio">
      <span className={styles.nameSection}>PORTFOLIO</span>
      <div className={styles.portfolio}>
        <Slider {...settings}>
          <ItemSlider imgItem={portfolio} name="Portfolio" text="Text1" />
          <ItemSlider imgItem={telegram} name="Telegram" text="Text2" />
          <ItemSlider imgItem={inst} name="Instagram" text="Text3" />
          <ItemSlider imgItem={x} name="Site X" text="Text4" />
          <ItemSlider imgItem={vk} name="VK" text="Text5" />
          <ItemSlider imgItem={twich} name="Twich" text="Text6" />
        </Slider>
        <Modal text={textModal} name={nameProject} imageModal={image} />

      </div>
    </div>
  );
}

export default Portfolio

