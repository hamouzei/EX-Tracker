// Color System for Fintech Application
// Modern Professional Aesthetic with Dark Mode & Neon Accents

export const colors = {
  // Dark Mode Backgrounds
  background: {
    primary: '#0f172a',    // slate-900 equivalent - main background
    secondary: '#1e293b',  // slate-800 equivalent - secondary surfaces
    tertiary: '#334155',   // slate-700 equivalent - tertiary surfaces
    accent: '#1a2e40',     // custom - accent backgrounds
    card: 'rgba(30, 41, 59, 0.8)', // for glassmorphic cards
    overlay: 'rgba(15, 23, 42, 0.8)' // for modals and overlays
  },

  // Text Colors
  text: {
    primary: '#f1f5f9',    // slate-100 equivalent - main text
    secondary: '#cbd5e1',  // slate-200 equivalent - secondary text
    tertiary: '#94a3b8',   // slate-300 equivalent - muted text
    disabled: '#64748b',   // slate-500 equivalent - disabled text
    inverse: '#0f172a'     // for text on light backgrounds
  },

  // Neon Accent Colors
  neon: {
    blue: '#00f0ff',       // bright cyan for primary actions
    purple: '#b82fff',     // vibrant purple for secondary actions
    green: '#00ff9d',      // bright green for positive actions
    yellow: '#fffb00',     // bright yellow for warnings
    red: '#ff2e54',        // bright red for errors/danger
    pink: '#ff00c0'        // bright pink for special highlights
  },

  // Semantic Colors
  semantic: {
    success: {
      DEFAULT: '#00ff9d',
      light: '#33ffd1',
      dark: '#00cc7d'
    },
    warning: {
      DEFAULT: '#fffb00',
      light: '#ffff33',
      dark: '#ccca00'
    },
    error: {
      DEFAULT: '#ff2e54',
      light: '#ff6b86',
      dark: '#cc2543'
    },
    info: {
      DEFAULT: '#00f0ff',
      light: '#33f4ff',
      dark: '#00bfc2'
    },
    neutral: {
      DEFAULT: '#94a3b8',
      light: '#cbd5e1',
      dark: '#64748b'
    }
  },

  // Border Colors
  border: {
    primary: 'rgba(148, 163, 184, 0.2)',  // subtle slate border
    secondary: 'rgba(148, 163, 184, 0.1)', // even more subtle
    accent: '#00f0ff',                    // neon accent border
    card: 'rgba(255, 255, 255, 0.1)'     // for glassmorphic cards
  },

  // Shadow Colors
  shadow: {
    primary: 'rgba(0, 0, 0, 0.25)',
    secondary: 'rgba(0, 0, 0, 0.15)',
    accent: 'rgba(0, 240, 255, 0.25)'     // neon glow
  },

  // Gradient Colors
  gradients: {
    primary: 'linear-gradient(135deg, #00f0ff 0%, #b82fff 100%)',
    secondary: 'linear-gradient(135deg, #00ff9d 0%, #00f0ff 100%)',
    accent: 'linear-gradient(135deg, #ff00c0 0%, #b82fff 100%)',
    card: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(184, 47, 255, 0.1) 100%)'
  }
};

// Color Utility Classes
export const colorClasses = {
  // Background Colors
  'bg-primary': colors.background.primary,
  'bg-secondary': colors.background.secondary,
  'bg-tertiary': colors.background.tertiary,
  'bg-card': colors.background.card,
  'bg-accent': colors.background.accent,
  
  // Text Colors
  'text-primary': colors.text.primary,
  'text-secondary': colors.text.secondary,
  'text-tertiary': colors.text.tertiary,
  'text-disabled': colors.text.disabled,
  
  // Neon Colors
  'neon-blue': colors.neon.blue,
  'neon-purple': colors.neon.purple,
  'neon-green': colors.neon.green,
  'neon-yellow': colors.neon.yellow,
  'neon-red': colors.neon.red,
  'neon-pink': colors.neon.pink,
  
  // Semantic Colors
  'success': colors.semantic.success.DEFAULT,
  'warning': colors.semantic.warning.DEFAULT,
  'error': colors.semantic.error.DEFAULT,
  'info': colors.semantic.info.DEFAULT,
  'neutral': colors.semantic.neutral.DEFAULT
};