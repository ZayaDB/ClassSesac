class House {
  //constructor: 생성자 함수
  //house라는 클래스의 속성을 초기화
  constructor(name, age, window) {
    this.name = name; //네이므 값을 받겠다
    this.age = age;
    this.window = window;
  }
  //메서드
  consoleInfo() {
    console.log(
      `이 아파트의 이름은 ${this.name}이고 ${this.age}년 건축되었습니다.`
    );
  }

  consoleWindow() {
    console.log(`${this.name} 아파트의 창문 ${this.window}개 입니다`);
  }
}

const house1 = new House("고덕 그라시움", 2020, 10);
console.log(house1);
console.log(typeof house1);
house1.consoleInfo();

class Apartment extends House {
  constructor(name, age, window, floor, password) {
    super(name, age, window);
    this.floor = floor;
    this.password = password;
  }
  consolePassword() {
    console.log(`이 아파트의 비밀번호는 ${this.password}입니다 :)`);
  }
  // 오버라이딩: 기존 메서드를 재정의
  consoleWindow() {
    console.log(
      `이 아파트의 창문은 모두 ${this.window}개 이고, 총 ${
        this.floor
      }층이므로 모든 창문의 갯수는 ${this.window * this.floor}개 입니다`
    );
  }
}

const apt1 = new Apartment("Ipark", 2017, 6, 20, 4116);
console.log(apt1);
apt1.consoleWindow(); //새롭게 정의된 메서드 사용
apt1.consolePassword(); //새로운 메서드 추가 가능
apt1.consoleInfo(); //부모 메서드 그대로 사용 가능

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

class Circle extends Shape {
  constructor(height, width, radius) {
    super(height, width);
    this.radius = radius;
  }
  getArea() {
    return (this.width / 2 ** 2) * this.radius;
  }
}
const cir = new Circle(5, 5, 3.14);
console.log(cir.getArea());
