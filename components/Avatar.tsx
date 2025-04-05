import React from 'react';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  placeholder?: boolean;
  text?: boolean;
  statusIcon?: boolean;
  state?: 'default' | 'hover' | 'active' | 'disabled';
  imageUrl?: string;
  altText?: string;
  customSize?: boolean;
  bgColor?: string;
  className?:string;
}

const Avatar: React.FC<AvatarProps> = ({
  size = '2xl',
  placeholder = false,
  text = false,
  statusIcon = false,
  state = 'default',
  imageUrl = '',
  altText = 'Avatar',
  customSize = false,
  bgColor = 'bg-[#C7B9DA]',
}) => {
  // Size configuration
  const sizeConfig = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-20 h-20 text-lg',
    '2xl': 'w-24 h-24 text-xl',
  };

  // State configuration
  const stateConfig = {
    default: '',
    hover: 'hover:ring-2 hover:ring-purple-300',
    active: 'ring-2 ring-purple-500',
    disabled: 'opacity-50 cursor-not-allowed',
  };

  // Base classes
  const baseClasses = `
    relative
    rounded-full
    flex items-center justify-center
    overflow-hidden
    transition-all duration-300
    ${customSize ? '' : sizeConfig[size]}
    ${stateConfig[state]}
    ${placeholder ? bgColor : 'bg-transparent'}
  `;

  return (
    <div 
      className={baseClasses.trim()}
      style={
        customSize 
          ? { 
              width: '75.72px', 
              height: '75.72px',
              borderRadius: '37.86px'
            } 
          : undefined
      }
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : text ? (
        <span className="text-white font-semibold">
          {altText.charAt(0).toUpperCase()}
        </span>
      ) : null}

      {statusIcon && (
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
      )}
    </div>
  );
};

export default Avatar;