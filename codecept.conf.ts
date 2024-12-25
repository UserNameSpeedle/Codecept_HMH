import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/**/*_test.ts', // Looking for tets in subfolders
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://todomvc.com/examples/react/dist',
      show: false,
      browser: 'chromium'
    },
    REST: {
      endpoint: 'https://favqs.com/api'
    },
    JSONResponse: {}
  },
  multiple: {
    two: {
      browsers: ['chromium', 'firefox']
    }
  },
  plugins: {
    customLocator: { // Custom locator Used in tested app
      enabled: true,
      attribute: 'data-testid' 
    }
   },
  include: {
    I: './steps_file'
  },
  name: 'Codecept'
}