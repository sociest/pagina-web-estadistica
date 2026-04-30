import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../atoms/buttons/Button';
import { IconTag } from '../data/ListsAndTags';

export const HeroSlideContent = ({ slide }) => {
  if (!slide) return null;

  return (
    <div className="space-y-4 sm:space-y-5 animate-[fadeInUp_700ms_ease-out] max-w-[740px]">
      <div className="inline-flex">
        <IconTag text={slide.tag} variant={slide.accent === '#ea580c' ? 'orange' : 'blue'} />
      </div>

      <h1
        className="text-white text-[clamp(1.9rem,5vw,3.8rem)] leading-[1.08] font-black tracking-tight max-w-[680px]"
        style={{ textShadow: '0 4px 32px rgba(0,0,0,0.7), 0 2px 16px rgba(0,0,0,0.5)' }}
      >
        {slide.title}
      </h1>

      <p
        className="text-white/95 text-[clamp(0.92rem,1.6vw,1.15rem)] leading-relaxed max-w-[680px] font-medium"
        style={{ textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}
      >
        {slide.description}
      </p>

      <div className="grid w-full max-w-[680px] grid-cols-1 gap-3 pt-1 sm:grid-cols-2 sm:gap-4">
        <Button
          variant={slide.accent === '#ea580c' ? 'orange' : 'primary'}
          className="w-full justify-center text-[13px] sm:text-[14px]"
        >
          {slide.buttonText}
        </Button>
        <Button variant="outline" className="w-full justify-center text-[13px] sm:text-[14px]">
          Mas informacion
        </Button>
      </div>
    </div>
  );
};

HeroSlideContent.propTypes = {
  slide: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    accent: PropTypes.string,
    tag: PropTypes.string,
  }),
};
