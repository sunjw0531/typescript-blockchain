import { init, exit, example } from './myPackage.js';

init({ debug: true, url: 'asdf' });
exit(1);
example({ num: 1, str: 'a' }, true);
