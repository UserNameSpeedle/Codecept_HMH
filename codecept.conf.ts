exports.config = {
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
  include: {
    I: './steps_file',
    todoPage: "./pages/todo.ts",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.ts']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    customLocator: {
      enabled: true,
      attribute: 'data-testid'
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/**/*_test.ts',
  multiple: {
    two: {
      browsers: ['chromium', 'firefox']
    }
  },
  name: 'Codecept'
}