/* eslint-disable @typescript-eslint/no-empty-interface */
type TMessages = typeof import('./messages/en.json')
declare interface IIntlMessages extends Messages {}
