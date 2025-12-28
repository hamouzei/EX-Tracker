// Button Components for Fintech Application
// High-Contrast CTAs with Soft Shadows and Hover States

import React from 'react';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

// Base Button Component
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  onClick,
  ...props
}) => {
  // Size configurations
  const sizeClasses = {
    xs: 'px-3 py-1.5 text-xs rounded-md',
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-2xl'
  };

  // Variant configurations
  const variantClasses = {
    primary: 'bg-[#00f0ff] text-[#0f172a] shadow-[0_4px_14px_rgba(0,240,255,0.4)] hover:shadow-[0_6px_20px_rgba(0,240,255,0.6)]',
    secondary: 'bg-[#b82fff] text-[#0f172a] shadow-[0_4px_14px_rgba(184,47,255,0.4)] hover:shadow-[0_6px_20px_rgba(184,47,255,0.6)]',
    success: 'bg-[#00ff9d] text-[#0f172a] shadow-[0_4px_14px_rgba(0,255,157,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,157,0.6)]',
    warning: 'bg-[#fffb00] text-[#0f172a] shadow-[0_4px_14px_rgba(255,251,0,0.4)] hover:shadow-[0_6px_20px_rgba(255,251,0,0.6)]',
    danger: 'bg-[#ff2e54] text-[#0f172a] shadow-[0_4px_14px_rgba(255,46,84,0.4)] hover:shadow-[0_6px_20px_rgba(255,46,84,0.6)]',
    outline: 'bg-transparent border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-[#0f172a]',
    ghost: 'bg-transparent text-[#00f0ff] hover:bg-[#334155]',
    link: 'bg-transparent text-[#00f0ff] underline hover:text-[#b82fff]'
  };

  // Disabled state
  const disabledClass = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'hover:scale-105 active:scale-95 transition-all duration-200';

  // Full width
  const widthClass = fullWidth ? 'w-full' : '';

  const classes = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-semibold',
    'leading-none',
    'whitespace-nowrap',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-offset-[#0f172a]',
    'focus:ring-[#00f0ff]',
    sizeClasses[size],
    variantClasses[variant],
    disabledClass,
    widthClass,
    className
  ].join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

// Button Group Component
export const ButtonGroup = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  return (
    <div 
      className={`inline-flex rounded-${spacing.borderRadius.lg} overflow-hidden ${className}`}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            variant,
            size,
            className: `${index > 0 ? `-ml-px` : ''} relative inline-flex items-center justify-center font-semibold leading-none whitespace-nowrap focus:z-10`
          });
        }
        return child;
      })}
    </div>
  );
};

// Icon Button Component
export const IconButton = ({
  icon,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  // Size configurations for icon buttons
  const sizeClasses = {
    xs: `p-${spacing.padding[1.5]} text-${typography.fontSize.sm}`,
    sm: `p-${spacing.padding[2]} text-${typography.fontSize.base}`,
    md: `p-${spacing.padding[3]} text-${typography.fontSize.lg}`,
    lg: `p-${spacing.padding[4]} text-${typography.fontSize.xl}`,
    xl: `p-${spacing.padding[5]} text-${typography.fontSize['2xl']}`
  };

  // Variant configurations
  const variantClasses = {
    primary: `bg-[${colors.neon.blue}] text-[${colors.text.inverse}] shadow-[0_4px_14px_rgba(0,240,255,0.4)] hover:shadow-[0_6px_20px_rgba(0,240,255,0.6)]`,
    secondary: `bg-[${colors.neon.purple}] text-[${colors.text.inverse}] shadow-[0_4px_14px_rgba(184,47,255,0.4)] hover:shadow-[0_6px_20px_rgba(184,47,255,0.6)]`,
    success: `bg-[${colors.neon.green}] text-[${colors.text.inverse}] shadow-[0_4px_14px_rgba(0,255,157,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,157,0.6)]`,
    warning: `bg-[${colors.neon.yellow}] text-[${colors.text.inverse}] shadow-[0_4px_14px_rgba(255,251,0,0.4)] hover:shadow-[0_6px_20px_rgba(255,251,0,0.6)]`,
    danger: `bg-[${colors.neon.red}] text-[${colors.text.inverse}] shadow-[0_4px_14px_rgba(255,46,84,0.4)] hover:shadow-[0_6px_20px_rgba(255,46,84,0.6)]`,
    outline: `bg-transparent border border-[${colors.neon.blue}] text-[${colors.neon.blue}] hover:bg-[${colors.neon.blue}] hover:text-[${colors.text.inverse}]`,
    ghost: `bg-transparent text-[${colors.neon.blue}] hover:bg-[${colors.background.tertiary}]`,
    link: `bg-transparent text-[${colors.neon.blue}] hover:text-[${colors.neon.purple}]`
  };

  // Disabled state
  const disabledClass = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'hover:scale-110 active:scale-95 transition-all duration-200';

  const classes = [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-offset-[#0f172a]',
    'focus:ring-[#00f0ff]',
    sizeClasses[size],
    variantClasses[variant],
    disabledClass,
    className
  ].join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon}
    </button>
  );
};

// Loading Button Component
export const LoadingButton = ({
  children,
  loading = false,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
  onClick,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      className={className}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </Button>
  );
};

// Toggle Button Component
export const ToggleButton = ({
  children,
  active = false,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  // Size configurations
  const sizeClasses = {
    xs: `px-${spacing.padding[3]} py-${spacing.padding[1.5]} text-${typography.fontSize.xs} rounded-${spacing.borderRadius.md}`,
    sm: `px-${spacing.padding[4]} py-${spacing.padding[2]} text-${typography.fontSize.sm} rounded-${spacing.borderRadius.md}`,
    md: `px-${spacing.padding[6]} py-${spacing.padding[3]} text-${typography.fontSize.base} rounded-${spacing.borderRadius.lg}`,
    lg: `px-${spacing.padding[8]} py-${spacing.padding[4]} text-${typography.fontSize.lg} rounded-${spacing.borderRadius.xl}`,
    xl: `px-${spacing.padding[10]} py-${spacing.padding[5]} text-${typography.fontSize.xl} rounded-${spacing.borderRadius['2xl']}`
  };

  // Variant configurations for active state
  const activeVariantClasses = {
    primary: `bg-[${colors.neon.blue}] text-[${colors.text.inverse}] shadow-[0_4px_14px_rgba(0,240,255,0.4)]`,
    secondary: `bg-[${colors.neon.purple}] text-[${colors.text.inverse}] shadow-[0_4px_14px_rgba(184,47,255,0.4)]`,
    success: `bg-[${colors.neon.green}] text-[${colors.text.inverse}] shadow-[0_4px_14px_rgba(0,255,157,0.4)]`,
    warning: `bg-[${colors.neon.yellow}] text-[${colors.text.inverse}] shadow-[0_4px_14px_rgba(255,251,0,0.4)]`,
    danger: `bg-[${colors.neon.red}] text-[${colors.text.inverse}] shadow-[0_4px_14px_rgba(255,46,84,0.4)]`,
    outline: `bg-[${colors.neon.blue}] text-[${colors.text.inverse}] border border-[${colors.neon.blue}]`,
    ghost: `bg-[${colors.background.tertiary}] text-[${colors.neon.blue}]`,
    link: `text-[${colors.neon.purple}]`
  };

  // Variant configurations for inactive state
  const inactiveVariantClasses = {
    primary: `bg-[${colors.background.tertiary}] text-[${colors.text.secondary}]`,
    secondary: `bg-[${colors.background.tertiary}] text-[${colors.text.secondary}]`,
    success: `bg-[${colors.background.tertiary}] text-[${colors.text.secondary}]`,
    warning: `bg-[${colors.background.tertiary}] text-[${colors.text.secondary}]`,
    danger: `bg-[${colors.background.tertiary}] text-[${colors.text.secondary}]`,
    outline: `bg-transparent text-[${colors.text.secondary}] border border-[${colors.border.primary}]`,
    ghost: `bg-transparent text-[${colors.text.secondary}]`,
    link: `text-[${colors.text.secondary}]`
  };

  // Disabled state
  const disabledClass = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'hover:scale-105 active:scale-95 transition-all duration-200';

  // Determine active or inactive classes
  const variantClass = active 
    ? activeVariantClasses[variant] 
    : inactiveVariantClasses[variant];

  const classes = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-semibold',
    'leading-none',
    'whitespace-nowrap',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-offset-[#0f172a]',
    'focus:ring-[#00f0ff]',
    sizeClasses[size],
    variantClass,
    disabledClass,
    className
  ].join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Button Variants Documentation
export const buttonVariants = {
  primary: {
    description: 'High-contrast primary action button with blue neon accent',
    backgroundColor: colors.neon.blue,
    textColor: colors.text.inverse,
    shadow: '0 4px 14px rgba(0,240,255,0.4)'
  },
  secondary: {
    description: 'Secondary action button with purple neon accent',
    backgroundColor: colors.neon.purple,
    textColor: colors.text.inverse,
    shadow: '0 4px 14px rgba(184,47,255,0.4)'
  },
  success: {
    description: 'Success/positive action button with green neon accent',
    backgroundColor: colors.neon.green,
    textColor: colors.text.inverse,
    shadow: '0 4px 14px rgba(0,255,157,0.4)'
  },
  warning: {
    description: 'Warning action button with yellow neon accent',
    backgroundColor: colors.neon.yellow,
    textColor: colors.text.inverse,
    shadow: '0 4px 14px rgba(255,251,0,0.4)'
  },
  danger: {
    description: 'Danger/destructive action button with red neon accent',
    backgroundColor: colors.neon.red,
    textColor: colors.text.inverse,
    shadow: '0 4px 14px rgba(255,46,84,0.4)'
  },
  outline: {
    description: 'Outline button with neon border and text',
    backgroundColor: 'transparent',
    textColor: colors.neon.blue,
    borderColor: colors.neon.blue
  },
  ghost: {
    description: 'Ghost button with subtle background on hover',
    backgroundColor: 'transparent',
    textColor: colors.neon.blue
  },
  link: {
    description: 'Link-style button',
    backgroundColor: 'transparent',
    textColor: colors.neon.blue
  }
};

// Button Sizes Documentation
export const buttonSizes = {
  xs: {
    padding: `${spacing.padding[3]} ${spacing.padding[1.5]}`,
    fontSize: typography.fontSize.xs,
    borderRadius: spacing.borderRadius.md
  },
  sm: {
    padding: `${spacing.padding[4]} ${spacing.padding[2]}`,
    fontSize: typography.fontSize.sm,
    borderRadius: spacing.borderRadius.md
  },
  md: {
    padding: `${spacing.padding[6]} ${spacing.padding[3]}`,
    fontSize: typography.fontSize.base,
    borderRadius: spacing.borderRadius.lg
  },
  lg: {
    padding: `${spacing.padding[8]} ${spacing.padding[4]}`,
    fontSize: typography.fontSize.lg,
    borderRadius: spacing.borderRadius.xl
  },
  xl: {
    padding: `${spacing.padding[10]} ${spacing.padding[5]}`,
    fontSize: typography.fontSize.xl,
    borderRadius: spacing.borderRadius['2xl']
  }
};

// Export all components
export default {
  Button,
  ButtonGroup,
  IconButton,
  LoadingButton,
  ToggleButton,
  buttonVariants,
  buttonSizes
};