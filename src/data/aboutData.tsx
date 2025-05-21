import {About} from './dataDef';
import profilepic from '../images/profilepic.jpg';
import {AcademicCapIcon, BuildingOffice2Icon, FlagIcon, SparklesIcon} from '@heroicons/react/24/outline';

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a software engineer passionate about innovation and system optimization. With experience in backend development, cloud, and IoT infrastructures, I design and implement advanced solutions for energy system monitoring and control. My expertise includes predictive models, genetic algorithms, and scalable architectures, integrating cloud and DevOps technologies to enhance efficiency and reliability. Beyond software development, managing a business in the mechatronics sector improved my organizational and strategic skills, which I apply to optimize development processes and team management. Driven by technological curiosity and a results-oriented mindset, I embrace new challenges with initiative and a continuous drive for professional growth.`,
  aboutItems: [
    {label: 'Nationality', text: 'Italian', Icon: FlagIcon},
    {label: 'Interests', text: 'Cars, cycling, video games', Icon: SparklesIcon},
    {label: 'Study', text: 'Università Mercatorum', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Idea75', Icon: BuildingOffice2Icon},
  ],
};
