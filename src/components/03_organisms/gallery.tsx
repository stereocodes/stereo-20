import React, { 
  useEffect, 
  useState, 
  useRef,
  useReducer,
  useContext
} from 'react';
import styled from 'styled-components';
import GallerySlide from '../01_atoms/gallerySlide';
import GalleryBrandLabel from '../01_atoms/galleryBrandLabel';
import {modalContext} from '../../context/modalContext';

interface IGallery {
  classes: string
  images: string[]
  play: boolean
  label: string
}

interface IStyledGallery {
  play: boolean
}

const StyledGallery = styled.aside`
  position: relative;
  display: block;
  align-items: stretch;
  height: 700px;
  padding: 20px;
  width: 100%;
  transform: translate3d(0,0,0);
  opacity: ${(p:IStyledGallery) => p.play ? '1' : '0'};
  transition: opacity var(--fastanimation) .8s;
  transition-delay: ${(p:IStyledGallery) => p.play ? '1s' : '0s'};
`;

const Gallery = (props: IGallery) => {
  let timer:any = null;
  const [slideIndex,setSlideIndex] = useState(0);
  const [playState, setPlayState] = useState(true);
  const galleryRef = useRef(null);
  const {modalContextState} = useContext(modalContext);
  const [gwidth, setGwidth] = useState(0);


  useEffect(() => {
    setGwidth(galleryRef.current.clientWidth);
    console.log(galleryRef.current.clientWidth);
  }, [galleryRef])

  useEffect(() => {
    clearTimeout(timer);
    timer = setTimeout(nextSlide, 4000);
    return () => {
      clearInterval(timer);
    }
  }, [slideIndex])

  function nextSlide() {
    if (modalContextState.open) {
      const newSlideIndex = slideIndex + 1 > props.images.length - 1 ? 0 : slideIndex + 1;
      // update slides and setup default slides after
      const timerOut = setTimeout(() => {
        if (galleryRef.current && galleryRef.current.querySelector('.out')) {
          galleryRef.current.querySelector('.out').classList.remove('out');
          clearTimeout(timerOut);
        }
      }, 700);

      setSlideIndex(newSlideIndex);
    }
  }

  function getSlides(slide:number) {
    const { images } = props;
    const imagesLength = images.length - 1;

    const slideNext = (slide:number) => slide + 1 > imagesLength ? 0 : slide + 1;

    const slideLast = (slide:number) => {
      if (slide + 2 > imagesLength) {
        if (slide + 2 > images.length) {
          return 1;
        }
        return 0;
      } else {
        return slide + 2;
      }
    }

    const markup = images.map((item, i) => {
        if (i === slide) {
          return (<GallerySlide image={item} slideState={1} key={i}/>);
        }
        if (i === slideNext(slide)) {
          return (<GallerySlide image={item} slideState={2} key={i}/>);
        }
        if (i === slideLast(slide)) {
          return (<GallerySlide image={item} slideState={3} key={i}/>);
        }
        return (<GallerySlide image={item} slideState={4} key={i}/>);
      }
    );

    return markup;
  }

  return (
    <StyledGallery className={`${props.classes} gallery grid-col-6`} ref={galleryRef} play={playState}>
      <GalleryBrandLabel label={props.label} pwidth={gwidth}/>
      { getSlides(slideIndex) }
    </StyledGallery>
  )
}

Gallery.defaultProps = {
  classes: '',
  play: true,
}

export default Gallery;







