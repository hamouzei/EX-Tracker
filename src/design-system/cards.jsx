// Glassmorphic Card Components for Fintech Application
// Modern Professional Aesthetic with Dark Mode & Neon Accents

import React from 'react';
import { colors } from './colors';
import { spacing } from './spacing';

// Base Glassmorphic Card Component
export const GlassCard = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  border = true,
  glow = false,
  ...props
}) => {
  // Size configurations
  const sizeClasses = {
    sm: 'p-3 rounded-lg', // 12px padding
    md: 'p-4 rounded-xl', // 16px padding
    lg: 'p-6 rounded-2xl' // 24px padding
  };

  // Variant configurations
  const variantClasses = {
    default: 'bg-[rgba(30,41,59,0.8)] backdrop-blur-md',
    elevated: 'bg-[rgba(30,41,59,0.8)] backdrop-blur-lg shadow-lg',
    accent: 'bg-[#1a2e40] backdrop-blur-md border border-[#00f0ff]',
    transparent: 'bg-transparent backdrop-blur-sm'
  };

  // Border configuration
  const borderClass = border
    ? 'border border-[rgba(255,255,255,0.1)]'
    : 'border-0';

  // Glow effect
  const glowClass = glow
    ? 'shadow-[0_0_20px_rgba(0,240,255,0.25)]'
    : 'shadow-sm';

  const classes = [
    'relative',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'hover:shadow-md',
    'hover:scale-[1.02]',
    sizeClasses[size],
    variantClasses[variant],
    borderClass,
    glowClass,
    className
  ].join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// Card Header Component
export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div
      className="mb-4 pb-4 border-b border-[rgba(148,163,184,0.2)]"
      {...props}
    >
      {children}
    </div>
  );
};

// Card Body Component
export const CardBody = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex-1 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Card Footer Component
export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`mt-${spacing.margin[4]} pt-${spacing.padding[4]} border-t border-[${colors.border.secondary}] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Title Component
export const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <h3
      className="text-[#f1f5f9] font-semibold text-lg mb-2"
      {...props}
    >
      {children}
    </h3>
  );
};

// Card Subtitle Component
export const CardSubtitle = ({ children, className = '', ...props }) => {
  return (
    <p
      className="text-[#cbd5e1] text-sm mb-2"
      {...props}
    >
      {children}
    </p>
  );
};

// Card Content Component
export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`text-${colors.text.primary} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Stats Card Component
export const StatsCard = ({ title, value, change, icon, trend, className = '', ...props }) => {
  return (
    <GlassCard 
      className={`flex flex-col ${className}`} 
      variant="elevated"
      {...props}
    >
      <div className="flex items-center justify-between">
        <div>
          <CardSubtitle>{title}</CardSubtitle>
          <CardTitle className="text-2xl font-bold">{value}</CardTitle>
        </div>
        {icon && <div className="text-[2rem]">{icon}</div>}
      </div>
      {change && (
        <div className={`mt-${spacing.margin[3]} flex items-center text-sm`}>
          <span className={`mr-${spacing.margin[1]} ${trend === 'up' ? 'text-[#00ff9d]' : 'text-[#ff2e54]'}`}>
            {trend === 'up' ? '↑' : '↓'} {change}
          </span>
          <span className="text-[#94a3b8]">from last month</span>
        </div>
      )}
    </GlassCard>
  );
};

// Transaction Card Component
export const TransactionCard = ({
  merchant,
  amount,
  date,
  category,
  status,
  className = '',
  ...props
}) => {
  return (
    <GlassCard
      className="flex items-center justify-between"
      {...props}
    >
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-[#334155] flex items-center justify-center mr-4">
          <span className="text-[#f1f5f9]">M</span>
        </div>
        <div>
          <CardTitle className="text-base">{merchant}</CardTitle>
          <CardSubtitle>{date}</CardSubtitle>
        </div>
      </div>
      <div className="text-right">
        <CardTitle className={`font-bold ${amount.startsWith('-') ? 'text-[#ff2e54]' : 'text-[#00ff9d]'}`}>
          {amount}
        </CardTitle>
        <CardSubtitle>{category}</CardSubtitle>
      </div>
    </GlassCard>
  );
};

// Account Card Component
export const AccountCard = ({
  accountName,
  balance,
  currency,
  number,
  type,
  className = '',
  ...props
}) => {
  return (
    <GlassCard
      className="relative overflow-hidden"
      variant="accent"
      glow
      {...props}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,240,255,0.1)] to-transparent transform -skew-x-12 -translate-x-full"></div>

      <div className="relative z-10">
        <CardSubtitle className="mb-2">{type}</CardSubtitle>
        <CardTitle className="text-2xl font-bold mb-4">{currency}{balance}</CardTitle>
        <div className="text-[#94a3b8] font-mono">
          •••• •••• •••• {number}
        </div>
        <div className="mt-4 text-[#cbd5e1]">
          {accountName}
        </div>
      </div>
    </GlassCard>
  );
};

// Card Grid Component
export const CardGrid = ({ children, className = '', cols = 1, gap = 'md', ...props }) => {
  const gapClasses = {
    sm: `gap-${spacing.gap[2]}`,
    md: `gap-${spacing.gap[4]}`,
    lg: `gap-${spacing.gap[6]}`
  };

  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div 
      className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Card List Component
export const CardList = ({ children, className = '', gap = 'md', ...props }) => {
  const gapClasses = {
    sm: `space-y-${spacing.spacing[2]}`,
    md: `space-y-${spacing.spacing[4]}`,
    lg: `space-y-${spacing.spacing[6]}`
  };

  return (
    <div 
      className={`${gapClasses[gap]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Skeleton Component
export const CardSkeleton = ({ className = '', ...props }) => {
  return (
    <GlassCard className={`animate-pulse ${className}`} {...props}>
      <div className={`h-4 bg-[${colors.background.tertiary}] rounded mb-${spacing.margin[3]}`}></div>
      <div className={`h-4 bg-[${colors.background.tertiary}] rounded w-3/4 mb-${spacing.margin[4]}`}></div>
      <div className={`h-8 bg-[${colors.background.tertiary}] rounded w-1/4`}></div>
    </GlassCard>
  );
};

// Card Hover Effect Styles
export const cardHoverStyles = `
  .card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px ${colors.shadow.primary}, 0 10px 10px -5px ${colors.shadow.secondary};
  }
  
  .card-glow:hover {
    box-shadow: 0 0 20px ${colors.shadow.accent};
  }
  
  .card-scale:hover {
    transform: scale(1.02);
  }
`;

// Export all components
export default {
  GlassCard,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardContent,
  StatsCard,
  TransactionCard,
  AccountCard,
  CardGrid,
  CardList,
  CardSkeleton,
  cardHoverStyles
};