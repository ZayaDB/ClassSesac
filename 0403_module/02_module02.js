// es6
// 바로 export 시키기

export const animals = ["dog", "cat", "rabbit"];

export function showAnimals() {
  animals.forEach((ani) => console.log(ani));
}
export const addAnimal = (newAni) => {
  animals.push(newAni);
  return animals;
};
