// Typography System for Fintech Application
// Modern Professional Aesthetic with Dark Mode & Neon Accents

export const typography = {
  // Font Families
  fontFamily: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    secondary: "'Roboto Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
    display: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  },

  // Font Sizes (in rem)
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem'  // 60px
  },

  // Font Weights
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },

  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },

  // Text Transformations
  textTransform: {
    none: 'none',
    capitalize: 'capitalize',
    uppercase: 'uppercase',
    lowercase: 'lowercase'
  },

  // Text Alignments
  textAlign: {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify'
  },

  // Responsive Typography Scale
  responsive: {
    h1: {
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      fontWeight: 700,
      '@media (min-width: 768px)': {
        fontSize: '3rem',
        lineHeight: '3.25rem'
      }
    },
    h2: {
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      fontWeight: 700,
      '@media (min-width: 768px)': {
        fontSize: '2.25rem',
        lineHeight: '2.5rem'
      }
    },
    h3: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 600,
      '@media (min-width: 768px)': {
        fontSize: '1.875rem',
        lineHeight: '2.25rem'
      }
    },
    h4: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      fontWeight: 600
    },
    body: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 400
    },
    caption: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 400
    }
  }
};

// Typography Utility Classes
export const typographyClasses = {
  'text-display': {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight
  },
  'text-heading': {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.tight
  },
  'text-subheading': {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.snug
  },
  'text-body': {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal
  },
  'text-small': {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.snug
  },
  'text-mono': {
    fontFamily: typography.fontFamily.secondary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium
  }
};