/**
 * This file is the entrypoint of browser builds.
 * The code executes when loaded in a browser.
 */
import { taste } from './main'
declare global {
  interface Window {
    taste: (food: string) => Promise<string>
  }
}

window.taste = taste

console.log('Method "foo" was added to the window object. You can try it yourself by just entering "await taste()"')
