import testimonialImage from '../images/testimonial.webp';
import {TestimonialSection} from './dataDef';


import { homePageMeta } from './homePageMeta';
import { SectionId } from './sectionIds';
import { heroData } from './heroData';
import { aboutData } from './aboutData';
import { skills } from './skillsData';
import { portfolioItems } from './portfolioData';
import { education, experience } from './resumeData';
import { contact, socialLinks } from './contactData';

export {
  homePageMeta,
  SectionId,
  heroData,
  aboutData,
  skills,
  portfolioItems,
  education,
  experience,
  contact,
  socialLinks,
};

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [],
};


