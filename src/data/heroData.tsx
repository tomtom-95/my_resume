import heroImage from '../images/header-background.webp';
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import {Hero} from './dataDef';

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Antonio Saolo`,
  website: 'saolo-resume.vercel.app',
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Idea75</strong> where i help develop projects aimed at improving sustainability
        and optimizing industrial processes. My responsibilities also include monitoring, controlling, and optimizing
        energy consumption by using, among other technologies, machine learning.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, enjoy <strong>restoring cars</strong> and customizing them to my taste,{' '}
        <strong>cycling</strong>, <strong>playing video games</strong>, and <strong>exploring new technologies</strong>{' '}
        through personal projects.
      </p>
    </>
  ),
  actions: [
    {
      href: 'Resume_Antonio_Saolo.pdf',
      text: 'Download Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};