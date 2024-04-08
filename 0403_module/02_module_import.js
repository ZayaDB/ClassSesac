// package.json "type": "module"로 수정 필요

// 02_module01.js 사용
// import { flowers, getFlower, getFlowersLength } from './02_module01.js';

// console.log(flowers);
// getFlowersLength(); // 함수에서 이미 console을 찍기 때문에 그냥 부르기만 해도 됨!
// console.log(getFlower(0));
// console.log(getFlower(10));

// 한 번에 export 한 변수 함수 등을 가져오는 방법
// *을 사용해 한 번에 가져오는 방법은 메모리 효율, 처리 속도 측면에서 좋지 않음
import * as flower from "./02_module01.js";

console.log(flower);
//-----------------------
//02_module02.js 사용

import { animals, showAnimals, addAnimal } from "./02_module02.js";
showAnimals();
console.log(addAnimal("horse"));

//---------------------------------- 03_module

// import sayStatus from "./03_module.js";
// sayStatus("Hungry");
// sayStatus("Sleepy");
// sayStatus("Boring");
// sayStatus("Hard");
// sayStatus("Happy");

import sayStatus2 from "./03_module.js";
sayStatus2("hungry");
sayStatus2("Sleepy");
sayStatus2("Boring");
sayStatus2("Happy");


