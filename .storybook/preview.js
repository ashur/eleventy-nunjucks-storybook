import '../src/styles/global/reset.css';
import '../src/styles/global/vars.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      { name: '--background-color', value: 'var(--background-color)' },
      { name: 'light', value: '#f8f8f8' },
      { name: 'blue', value: '#333' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
