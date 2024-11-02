import gsap from "gsap";
import Image from "next/image";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import styles from "./carousel.module.scss";

import gameController from "../../images/gamecontroller.png";
import headphone from "../../images/headphone.png";
import watch from "../../images/watch.png";
import navigatorIcon from "../../images/arrow.png";
import { Button } from "react-bootstrap";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.fromTo(`.${styles.slideDetails}`, { x: 400 }, { x: 0, duration: 0.5 });
  }, [activeIndex]);

  const slideItems = [
    {
      image: gameController,
      text: "Game Controller",
      subtext: "Experience next-gen gaming",
      price: "$332",
    },
    {
      image: headphone,
      text: "Headphone",
      subtext: "Immerse yourself in sound",
      price: "$225",
    },
    {
      image: watch,
      text: "Watch",
      subtext: "Stay connected on the go",
      price: "$300",
    },
  ];

  return (
    <>
      <div className={styles.slideContainer}>
        <div className={styles.RadialBlur}></div>
        <div className={styles.mySwiper}>
          <Swiper
            loop={true}
            navigation={{
              prevEl: ".arrow-button-prev",
              nextEl: ".arrow-button-next",
            }}
            modules={[Navigation, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 4.5,
              slideShadows: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className={styles.swiperOrg}
          >
            {slideItems.map((i, index) => (
              <SwiperSlide
                key={index}
                className={` ${
                  activeIndex === index ? styles.activeSlide : styles.slideImage
                }`}
              >
                <Image
                  className={styles.image}
                  width={350}
                  src={i.image}
                  alt={i.text}
                />
              </SwiperSlide>
            ))}

            <div className={styles.controlerContainer}>
              <div
                className={classNames(
                  styles.arrowButtonPrev,
                  "arrow-button-prev"
                )}
              >
                <Image src={navigatorIcon} alt="arrow-prev" />
              </div>
              <div
                className={classNames(
                  styles.arrowButtonNext,
                  "arrow-button-next"
                )}
              >
                <Image src={navigatorIcon} alt="arrow-next" />
              </div>
            </div>
          </Swiper>
        </div>

        <div className={styles.slideDetailsWrapper}>
          <div className={styles.slideDetails}>
            <h1 className="text-center fw-bold">
              {slideItems[activeIndex].text}
            </h1>
            <p className="text-center fw-bold">
              {slideItems[activeIndex].subtext}
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <h3 className="fw-bold ms-3">{slideItems[activeIndex].price}</h3>
            <Button className={styles.checkOutButton}>Checkout</Button>
          </div>
        </div>
      </div>
    </>
  );
}
