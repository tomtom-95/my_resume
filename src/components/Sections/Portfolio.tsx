import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useState} from 'react';
import Slider from 'react-slick';
import ModalComponent from '../ModalComponent';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <Slider {...sliderSettings}>
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6 px-2 flex flex-col items-center" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-72 w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl flex items-center',
                  )}>
                  <Image alt={title} className="h-auto max-h-full w-full" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
                <h3 className="mt-2 text-center text-white">{title}</h3>
              </div>
            );
          })}
        </Slider>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item}) => {
  const [mobile, setMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(mobile);
  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  const handleItemClick = useCallback((event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={classNames(
          'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300 opacity-0 hover:opacity-80 cursor-pointer',
        )}
        onClick={handleItemClick}>
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
            <h2 className="text-center font-bold text-white opacity-100">{item.title}</h2>
            <p className="text-xs text-white opacity-100 sm:text-sm">{item.description}</p>
          </div>
          <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
        </div>
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title={item.title}
        description={item.modalText}
      />
    </>
  );
});
