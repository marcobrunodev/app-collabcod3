import GlobalStyles from "../src/GlobalStyles"

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [{
      name: 'dark',
      value: '#3A4042'
    }]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '30vh'}}>
        <Story />
      </div>
    </>
  )
]