import styles from './Portfolio.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import portfolio1 from "../../assets/img/portfolio/portfolio4.png"

function Portfolio() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>PORTFOLIO</span>
      <div className={styles.portfolio}>
        <Slider {...settings}>

          <div className={styles.itemSlider}>
            <div className={styles.wrapperImg}><img src={portfolio1} alt="portfolio 1" /></div>
                <span>Name Project</span>
                <span><a href='#'>Look Project</a></span>
          </div>

          <div className={styles.itemSlider}>
            <div className={styles.wrapperImg}><img src={portfolio1} alt="portfolio 1" /></div>
                <span>Name Project</span>
                <a>Look Project</a>
          </div>

          <div className={styles.itemSlider}>
            <div className={styles.wrapperImg}><img src={portfolio1} alt="portfolio 1" /></div>
                <span>Name Project</span>
                <a>Look Project</a>
          </div>

          <div className={styles.itemSlider}>
            <div className={styles.wrapperImg}><img src={portfolio1} alt="portfolio 1" /></div>
                <span>Name Project</span>
                <a>Look Project</a>
          </div>

          <div className={styles.itemSlider}>
            <div className={styles.wrapperImg}><img src={portfolio1} alt="portfolio 1" /></div>
                <span>Name Project</span>
                <a>Look Project</a>
          </div>

          <div className={styles.itemSlider}>
            <div className={styles.wrapperImg}><img src={portfolio1} alt="portfolio 1" /></div>
                <span>Name Project</span>
                <a>Look Project</a>
          </div>

        </Slider>
      </div>
    </div>
  );
}

export default Portfolio

