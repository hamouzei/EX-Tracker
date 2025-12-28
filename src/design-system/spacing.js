// Spacing System for Fintech Application
// 8pt Grid System with Generous White Space

export const spacing = {
  // Base unit is 8px
  base: 8,

  // Spacing scale based on 8px increments
  spacing: {
    0: '0',           // 0px
    1: '0.125rem',    // 2px (1/4 * base)
    2: '0.25rem',     // 4px (1/2 * base)
    3: '0.375rem',    // 6px (3/4 * base)
    4: '0.5rem',      // 8px (1 * base)
    5: '0.625rem',    // 10px (1.25 * base)
    6: '0.75rem',     // 12px (1.5 * base)
    7: '0.875rem',    // 14px (1.75 * base)
    8: '1rem',        // 16px (2 * base)
    9: '1.125rem',    // 18px (2.25 * base)
    10: '1.25rem',    // 20px (2.5 * base)
    11: '1.375rem',   // 22px (2.75 * base)
    12: '1.5rem',     // 24px (3 * base)
    14: '1.75rem',    // 28px (3.5 * base)
    16: '2rem',       // 32px (4 * base)
    20: '2.5rem',     // 40px (5 * base)
    24: '3rem',       // 48px (6 * base)
    28: '3.5rem',     // 56px (7 * base)
    32: '4rem',       // 64px (8 * base)
    36: '4.5rem',     // 72px (9 * base)
    40: '5rem',       // 80px (10 * base)
    44: '5.5rem',     // 88px (11 * base)
    48: '6rem',       // 96px (12 * base)
    52: '6.5rem',     // 104px (13 * base)
    56: '7rem',       // 112px (14 * base)
    60: '7.5rem',     // 120px (15 * base)
    64: '8rem',       // 128px (16 * base)
    72: '9rem',       // 144px (18 * base)
    80: '10rem',      // 160px (20 * base)
    96: '12rem'       // 192px (24 * base)
  },

  // Padding scale
  padding: {
    0: '0',
    1: '0.125rem',    // 2px
    2: '0.25rem',     // 4px
    3: '0.375rem',    // 6px
    4: '0.5rem',      // 8px
    6: '0.75rem',     // 12px
    8: '1rem',        // 16px
    10: '1.25rem',    // 20px
    12: '1.5rem',     // 24px
    14: '1.75rem',    // 28px
    16: '2rem',       // 32px
    20: '2.5rem',     // 40px
    24: '3rem',       // 48px
    32: '4rem',       // 64px
    40: '5rem',       // 80px
    48: '6rem'        // 96px
  },

  // Margin scale
  margin: {
    0: '0',
    1: '0.125rem',    // 2px
    2: '0.25rem',     // 4px
    3: '0.375rem',    // 6px
    4: '0.5rem',      // 8px
    6: '0.75rem',     // 12px
    8: '1rem',        // 16px
    10: '1.25rem',    // 20px
    12: '1.5rem',     // 24px
    14: '1.75rem',    // 28px
    16: '2rem',       // 32px
    20: '2.5rem',     // 40px
    24: '3rem',       // 48px
    32: '4rem',       // 64px
    40: '5rem',       // 80px
    48: '6rem'        // 96px
  },

  // Gap scale for flexbox and grid
  gap: {
    0: '0',
    1: '0.125rem',    // 2px
    2: '0.25rem',     // 4px
    3: '0.375rem',    // 6px
    4: '0.5rem',      // 8px
    6: '0.75rem',     // 12px
    8: '1rem',        // 16px
    10: '1.25rem',    // 20px
    12: '1.5rem',     // 24px
    14: '1.75rem',    // 28px
    16: '2rem',       // 32px
    20: '2.5rem',     // 40px
    24: '3rem',       // 48px
    32: '4rem',       // 64px
    40: '5rem',       // 80px
    48: '6rem'        // 96px
  },

  // Size scale for width/height
  size: {
    0: '0',
    1: '0.125rem',    // 2px
    2: '0.25rem',     // 4px
    3: '0.375rem',    // 6px
    4: '0.5rem',      // 8px
    6: '0.75rem',     // 12px
    8: '1rem',        // 16px
    10: '1.25rem',    // 20px
    12: '1.5rem',     // 24px
    14: '1.75rem',    // 28px
    16: '2rem',       // 32px
    20: '2.5rem',     // 40px
    24: '3rem',       // 48px
    32: '4rem',       // 64px
    40: '5rem',       // 80px
    48: '6rem',       // 96px
    56: '7rem',       // 112px
    64: '8rem',       // 128px
    80: '10rem',      // 160px
    96: '12rem',      // 192px
    px: '1px',
    '0.5': '0.125rem',  // 2px
    '1.5': '0.375rem',  // 6px
    '2.5': '0.625rem',  // 10px
    '3.5': '0.875rem'   // 14px
  },

  // Container widths
  containers: {
    sm: '640px',      // 640px
    md: '768px',      // 768px
    lg: '1024px',     // 1024px
    xl: '1280px',     // 1280px
    '2xl': '1536px'   // 1536px
  },

  // Breakpoints for responsive design
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Border radius scale
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    DEFAULT: '0.25rem', // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px'
  }
};

// Spacing Utility Classes
export const spacingClasses = {
  // Padding Classes
  'p-0': `padding: ${spacing.padding[0]};`,
  'p-1': `padding: ${spacing.padding[1]};`,
  'p-2': `padding: ${spacing.padding[2]};`,
  'p-3': `padding: ${spacing.padding[3]};`,
  'p-4': `padding: ${spacing.padding[4]};`,
  'p-6': `padding: ${spacing.padding[6]};`,
  'p-8': `padding: ${spacing.padding[8]};`,
  'p-10': `padding: ${spacing.padding[10]};`,
  'p-12': `padding: ${spacing.padding[12]};`,
  'p-16': `padding: ${spacing.padding[16]};`,
  'p-20': `padding: ${spacing.padding[20]};`,
  'p-24': `padding: ${spacing.padding[24]};`,
  'p-32': `padding: ${spacing.padding[32]};`,
  'p-40': `padding: ${spacing.padding[40]};`,
  'p-48': `padding: ${spacing.padding[48]};`,

  // Margin Classes
  'm-0': `margin: ${spacing.margin[0]};`,
  'm-1': `margin: ${spacing.margin[1]};`,
  'm-2': `margin: ${spacing.margin[2]};`,
  'm-3': `margin: ${spacing.margin[3]};`,
  'm-4': `margin: ${spacing.margin[4]};`,
  'm-6': `margin: ${spacing.margin[6]};`,
  'm-8': `margin: ${spacing.margin[8]};`,
  'm-10': `margin: ${spacing.margin[10]};`,
  'm-12': `margin: ${spacing.margin[12]};`,
  'm-16': `margin: ${spacing.margin[16]};`,
  'm-20': `margin: ${spacing.margin[20]};`,
  'm-24': `margin: ${spacing.margin[24]};`,
  'm-32': `margin: ${spacing.margin[32]};`,
  'm-40': `margin: ${spacing.margin[40]};`,
  'm-48': `margin: ${spacing.margin[48]};`,

  // Gap Classes
  'gap-0': `gap: ${spacing.gap[0]};`,
  'gap-1': `gap: ${spacing.gap[1]};`,
  'gap-2': `gap: ${spacing.gap[2]};`,
  'gap-3': `gap: ${spacing.gap[3]};`,
  'gap-4': `gap: ${spacing.gap[4]};`,
  'gap-6': `gap: ${spacing.gap[6]};`,
  'gap-8': `gap: ${spacing.gap[8]};`,
  'gap-10': `gap: ${spacing.gap[10]};`,
  'gap-12': `gap: ${spacing.gap[12]};`,
  'gap-16': `gap: ${spacing.gap[16]};`,
  'gap-20': `gap: ${spacing.gap[20]};`,
  'gap-24': `gap: ${spacing.gap[24]};`,
  'gap-32': `gap: ${spacing.gap[32]};`,
  'gap-40': `gap: ${spacing.gap[40]};`,
  'gap-48': `gap: ${spacing.gap[48]};`,

  // Border Radius Classes
  'rounded-none': `border-radius: ${spacing.borderRadius.none};`,
  'rounded-sm': `border-radius: ${spacing.borderRadius.sm};`,
  'rounded': `border-radius: ${spacing.borderRadius.DEFAULT};`,
  'rounded-md': `border-radius: ${spacing.borderRadius.md};`,
  'rounded-lg': `border-radius: ${spacing.borderRadius.lg};`,
  'rounded-xl': `border-radius: ${spacing.borderRadius.xl};`,
  'rounded-2xl': `border-radius: ${spacing.borderRadius['2xl']};`,
  'rounded-3xl': `border-radius: ${spacing.borderRadius['3xl']};`,
  'rounded-full': `border-radius: ${spacing.borderRadius.full};`
};

// Grid System Configuration
export const gridSystem = {
  // Column configuration
  columns: 12,
  
  // Gutters
  gutter: {
    sm: spacing.gap[4],   // 8px
    md: spacing.gap[6],   // 12px
    lg: spacing.gap[8]    // 16px
  },
  
  // Container padding
  containerPadding: {
    sm: spacing.padding[4],   // 8px
    md: spacing.padding[6],   // 12px
    lg: spacing.padding[8]    // 16px
  }
};

// Responsive Spacing Utilities
export const responsiveSpacing = {
  // Mobile first spacing
  'p-sm': {
    padding: spacing.padding[4]
  },
  'p-md': {
    padding: spacing.padding[6],
    '@media (min-width: 768px)': {
      padding: spacing.padding[8]
    }
  },
  'p-lg': {
    padding: spacing.padding[8],
    '@media (min-width: 1024px)': {
      padding: spacing.padding[12]
    }
  },
  
  // Responsive margins
  'm-sm': {
    margin: spacing.margin[4]
  },
  'm-md': {
    margin: spacing.margin[6],
    '@media (min-width: 768px)': {
      margin: spacing.margin[8]
    }
  },
  'm-lg': {
    margin: spacing.margin[8],
    '@media (min-width: 1024px)': {
      margin: spacing.margin[12]
    }
  }
};

// Spacing Helper Functions
export const spacingHelpers = {
  // Convert px to rem
  pxToRem: (px) => `${px / 16}rem`,
  
  // Get spacing value by multiplier
  getSpacing: (multiplier) => spacing.spacing[multiplier * spacing.base] || spacing.spacing[0],
  
  // Calculate responsive spacing
  responsive: (mobile, tablet, desktop) => ({
    padding: spacing.padding[mobile],
    '@media (min-width: 768px)': {
      padding: spacing.padding[tablet]
    },
    '@media (min-width: 1024px)': {
      padding: spacing.padding[desktop]
    }
  })
};