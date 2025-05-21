import {FC, memo} from 'react';
import Icon, {IconProps} from './Icon';

const PhoneIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M92.71 3H23.29A10.3 10.3 0 0013 13.29v85.42A10.3 10.3 0 0023.29 109h69.42A10.3 10.3 0 00103 98.71V13.29A10.3 10.3 0 0092.71 3zM59 103a7 7 0 110-14 7 7 0 010 14zm33-15H26V16h66z"
      fill="currentColor"></path>
  </Icon>
));

export default PhoneIcon;
