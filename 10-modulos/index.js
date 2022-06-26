import { suma, multiplica } from "./modulos/controller.js";
import chalk from 'chalk';


const suma1 = suma(1, 2);
const suma2 = suma(4, 5);

console.log(chalk.green(multiplica(suma1, suma2)));