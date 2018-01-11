/*
 * @title App
 * @description Application entry point
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import * as $ from 'jquery';
import {Calculator} from './components/calculator/calculator';
import helloWorld from './components/helloWorld/helloWorld';

console.log($("html head title").html());

console.log(helloWorld(true));
console.log(helloWorld(false));

console.log(Calculator.ping());
console.log(Calculator.add(3,5));