import styles from './Portfolio.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import portfolio1 from "../../assets/img/portfolio/portfolio4.png"
import Modal from './modal/Modal';
import { useState } from 'react';

function Portfolio() {
  const [modalActive, setModalActive]=useState(true);
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
      <span className={styles.title}>PORTFOLIO</span>
      <div className={styles.portfolio}>
        <Slider {...settings}>

          <div className={styles.itemSlider}>
            <div className={styles.wrapperImg}><img src={portfolio1} alt="portfolio 1" /></div>
                <span className={styles.nameProject}>Name Project</span>
                <a className={styles.aLookProject} href='#'>Look Project</a>
          </div>

          <div className={styles.itemSlider}>
            <div className={styles.wrapperImg}><img src={portfolio1} alt="portfolio 1" /></div>
                <span>Name Project</span>
                <a className={styles.aLookProject} href='#'>Look Project</a>
          </div>

          <div className={styles.itemSlider}>
            <div className={styles.wrapperImg}><img src={portfolio1} alt="portfolio 1" /></div>
                <span>Name Project</span>
                <a className={styles.aLookProject} href='#'>Look Project</a>
          </div>

          <div className={styles.itemSlider}>
            <div className={styles.wrapperImg}><img src={portfolio1} alt="portfolio 1" /></div>
                <span>Name Project</span>
                <a className={styles.aLookProject} href='#'>Look Project</a>
          </div>

          <div className={styles.itemSlider}>
            <div className={styles.wrapperImg}><img src={portfolio1} alt="portfolio 1" /></div>
                <span>Name Project</span>
                <a className={styles.aLookProject} href='#'>Look Project</a>
          </div>

          <div className={styles.itemSlider}>
            <div className={styles.wrapperImg}><img src={portfolio1} alt="portfolio 1" /></div>
                <span>Name Project</span>
                <a className={styles.aLookProject} href='#' onClick={()=>setModalActive(true)}>Look Project</a>
          </div>

        </Slider>
        <Modal active={modalActive} setActiveModal={setModalActive}/>
        
      </div>
    </div>
  );
}

export default Portfolio

