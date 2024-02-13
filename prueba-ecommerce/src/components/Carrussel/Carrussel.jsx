import React, { useEffect, useRef, useState, useInterval } from 'react'
import { data } from '../assets/data';
import { FaCircle } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import './Carrusel.css';


const Carrousel = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }

  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? data.length - 1 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1;

      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      } else {
        setCurrentIndex(curr => 0)
      }
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const useInterval = (callback, delay) => {
    useEffect(() => {
      const intervalId = setInterval(callback, delay);
      return () => clearInterval(intervalId);
    }, [callback, delay]);
  };

  useInterval(() => {
    if (!isHovered) {
      scrollToImage('next');
    }
  }, 4000);

  return (
    <>
      <section className='carrouselContainer' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className='sliderContainer'>
          <div className='leftArrow' onClick={() => scrollToImage('prev')}><IoIosArrowDropleftCircle /></div>
          <div className='rightArrow' onClick={() => scrollToImage('next')}><IoIosArrowDroprightCircle /></div>
          <div className="imageContainer">
            <ul
              ref={listRef}>
              {
                data.map((item) => {
                  return <li className='liCr' key={item.id}>
                    <img src={item.imgUrl} />
                  </li>
                })
              }

            </ul>
          </div>
          <div className="dotsContainer">
            {
              data.map((_, idx) => (
                <div key={idx}
                  className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(idx)} >
                  <FaCircle />
                </div>))
            }
          </div>
        </div>

      </section>

    </>
  )
}

export default Carrousel