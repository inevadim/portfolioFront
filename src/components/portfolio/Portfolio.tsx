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
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
    ]
  };

  const { textModal, nameProject, image } = useModalStore();

  return (

    <div className={styles.wrapper} id="portfolio">
      <span className={styles.nameSection}>PORTFOLIO</span>
      <div className={styles.portfolio}>
        <Slider {...settings}>
          <ItemSlider imgItem={portfolio} name="Portfolio" text="Сайт Portfolio созданный Вадимом Колбиком в учебных целях, в рамках курсов по frontend разработке" />
          <ItemSlider imgItem={telegram} name="Telegram" text="Telegram — самое популярное приложение для обмена мгновенными сообщениями в некоторых странах Европы, Азии и Африки" />
          <ItemSlider imgItem={inst} name="Instagram" text="Instagram - американская социальная сеть для обмена фотографиями и видео, основанная Вадимом Колбиком" />
          <ItemSlider imgItem={x} name="Site X" text="Социальная сеть где пользователи публикуют и взаимодействуют с сообщениями, известными как «твиты»." />
          <ItemSlider imgItem={vk} name="VK" text="«ВКонтакте» позволяет пользователям отправлять друг другу сообщения, редактировать эти сообщения, создавать собственные страницы и сообщества." />
          <ItemSlider imgItem={twich} name="Twich" text="Twitch — видеостриминговый сервис, специализирующийся на тематике компьютерных игр, в том числе трансляциях геймплея и киберспортивных турниров." />
        </Slider>
        <Modal text={textModal} name={nameProject} imageModal={image} />

      </div>
    </div>
  );
}

export default Portfolio

