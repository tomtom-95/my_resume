import LinkedInIcon from '../components/Icon/LinkedInIcon';
import PhoneIcon from '../components/Icon/PhoneIcon';
import MailIcon from '../components/Icon/MailIcon';
// import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';

import {
  ContactSection,
  ContactType,
  Social,
} from './dataDef';

/**
 * Contact section
 */


export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Interested in my profile? Contact me for more information or potential opportunities.',
  items: [
    {
      type: ContactType.LinkedIn,
      text: 'Antonio Saolo',
      href: 'https://www.linkedin.com/in/antonio-saolo-371981233',
    },
    {
      type: ContactType.Email,
      text: 'saoloantonio@gmail.com',
      href: 'mailto:saoloantonio@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+39 380-6453481',
      href: 'tel:+393806453481',
    },

    /*
    {
      type: ContactType.Location,
      text: 'Bovalino, RC (Italy)',
      href: 'https://www.google.com/maps/place/89034+Bovalino+RC/@38.1568223,16.1490762,14z',
    },
    {
      type: ContactType.Github,
      text: '@AntonioSaolo',
      href: 'https://github.com/AntonioSaolo',
    }, */
  ],
};


export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/antonio-saolo-371981233'},
  {label: 'Phone', Icon: PhoneIcon, href: 'tel:+393806453481'},
  {label: 'Email', Icon: MailIcon, href: 'mailto:saoloantonio@gmail.com'},
];
