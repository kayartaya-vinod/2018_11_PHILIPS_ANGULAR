import { welcome, DVLPR_NAME as devName } from './utils'; // for named exported member
import testing from './utils'; // for default exported member

welcome();
console.log('Developed by', devName);
testing();