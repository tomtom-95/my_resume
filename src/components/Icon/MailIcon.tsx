import {FC, memo} from 'react';
import Icon, {IconProps} from './Icon';

const MailIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M102 20H18a8 8 0 00-8 8v60a8 8 0 008 8h84a8 8 0 008-8V28a8 8 0 00-8-8zM90 34.14L60 54.86 30 34.14V30h60zM18 80V32l42 28 42-28v48H18z"
      fill="currentColor"></path>
  </Icon>
));

export default MailIcon;
