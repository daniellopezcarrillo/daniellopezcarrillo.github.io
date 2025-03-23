import React from 'react';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  size?: number;
  className?: string;
}

const IconWrapper: React.FC<Props> = ({ icon: Icon, size, className }) => {
  return <Icon size={size} className={className} />;
};

export default IconWrapper;
