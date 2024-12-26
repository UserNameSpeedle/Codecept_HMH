/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type todoPage = typeof import('./pages/todo');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, todoPage: todoPage }
  interface Methods extends Playwright, REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
