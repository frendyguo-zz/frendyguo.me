import Typography from 'typography';
// import wordpress2016Theme from 'typography-theme-wordpress-2016';
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
doelgerTheme.baseFontSize = '18px';
// doelgerTheme.baseLineHeight = '1.45rem';
doelgerTheme.bodyFontFamily = [
  'Source Sans Pro',
  'sans-serif',
];
doelgerTheme.headerFontFamily = [
  'Source Sans Pro',
  'sans-serif',
];
const typography = new Typography(doelgerTheme);

// typography.options.baseLineHeight = '1.446';
// typography.options.baseFontSize = '24px';
// typography.options.bodyFontFamily = [
//   'Source Sans Pro',
//   'sans-serif',
// ];
// typography.options.headerFontFamily = [
//   'Source Sans Pro',
//   'sans-serif',
// ];

// const typography = new Typography({
//   baseFontSize: '18px',
//   baseLineHeight: '1.326',
//   headerLineHeight: '1.2',
//   headerFontFamily: [
//     'Source Sans Pro',
//     'sans-serif',
//   ],
//   bodyFontFamily: [
//     'Source Sans Pro',
//     'sans-serif',
//   ],
//   overrideStyles: () => ({
//     a: {
//       color: 'var(--textLink)',
//       textDecoration: 'none',
//     },
//     'a:hover': {
//       color: 'var(--textLinkHover)',
//     }
//   }),
// });

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
