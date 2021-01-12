import Typography from 'typography';
import doelgerTheme from 'typography-theme-doelger';

doelgerTheme.overrideStyles = () => ({
  a: {
    color: 'var(--textLink)',
    textDecoration: 'none',
  },
  'a:hover': {
    color: 'var(--textLinkHover)',
  },
  h1: {
    fontSize: '2rem',
  },
  h2: {
    fontSize: '1.65572rem',
  },
  h3: {
    fontSize: '1.32951rem',
  },
  h4: {
    fontSize: '1.1rem',
  },
  'h1, h2': {
    marginTop: '3.5rem',
  },
  'h3, h4, h5, h6': {
    marginTop: '2.8rem',
  },
});

delete doelgerTheme.googleFonts;
doelgerTheme.baseFontSize = '16px';
doelgerTheme.baseLineHeight = '1.5rem';
doelgerTheme.bodyFontFamily = [
  'Nunito Sans',
  'sans-serif',
];
doelgerTheme.headerFontFamily = [
  'Nunito Sans',
  'sans-serif',
];
const typography = new Typography(doelgerTheme);

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
