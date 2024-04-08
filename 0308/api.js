// //비동기 (asynchronous)
// //코드가 순서대로 진행되지 않음, 먼저 읽힌 코드가 실행
// // console.log("hi 1");
// // setTimeout(() => {
// //   console.log("hi 2");
// // }, 1000);
// // console.log("hi3");

// // const id = prompt("아이디를 입력해 주세요");
// // let userId;
// // console.log("로그인 시도");

// // //서버 통신
// // setTimeout(() => {
// //   userId = "zaya"; //서버에서 받아온 아이디
// //   console.log("서버에서 아이디 성공적으로 받아옴");
// // }, 2000);

// // if (id === userId) {
// //   console.log("login success");
// // } else {
// //   console.log("login failed");
// // }

// //reason of failed

// // //setTimeout이 내부의 콜백함수 실행되기 전(서버에서 데이터를 받오기 전)에
// // //사용자에게 입력받은 id와 userId(undefined)를 비교하기 때문
// // //userId는 서버에서 데이터를 받아오지 못 했기 때문에 값이 없음
// // //즉, undedifed와 비교해서 조건문에서 항상 false가 되어 else절만 실행함

// // const id = prompt("아이디를 입력해 주세요");
// // let userId;
// // console.log("로그인 시도");
// // setTimeout(() => {
// //   userId = "zaya"; //서버에서 받아온 아이디
// //   console.log("서버에서 아이디 성공적으로 받아옴");
// //   if (id === userId) {
// //     console.log("login success");
// //   } else {
// //     console.log("login failed");
// //   }
// // }, 2000);

// //promise 시용해 비동기 처리를 구현하는 예시

// // const id = "zaya";
// // let userId;
// // const promise = new Promise((resolve, reject) => {
// //   console.log("Promise 시작");
// //   setTimeout(() => {
// //     userId = "zaya";
// //     if (userId === id) {
// //       resolve(userId);
// //     } else {
// //       reject(new Error("아이디가 틀렸습니다. 다시 입력해 주세요"));
// //     }
// //   }, 2000);
// // });
// // promise
// //   .then((data) => {
// //     console.log(`userId는 ${data}입니다`);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   })
// //   .finally(() => {
// //     console.log("promise 종료");
// //   });

// //--------------------------------------------------------------------------------

//async and await 사용
//Promise는 then을 체이닝 할 수 있어 너무 많은 채이닝을 할 경우 가독성이 떨어짐
//이를 해결하기 위해 나온 것이 async and await
//promise를 다르게 사용하는 방법
//async: 해당 함수 내부에 await을 사용할 것인걸 알림
//await: 해당 함수 실행될 때까지 기다림

//try and catch
//try : 스코프를 실행함
//실행 도중 어떤 에러 발생이나 문제가 발생하면 바로 catch 절로 이동
//finally 절은 무조건 실행

// //const id = "zaya"; //성공
// const id = "zaya1"; //실패
// let userId;

// //promise를 함수에 담아 해당 함수 호출 시 Promise가 실행되도록 작성
// const promiseFunc = () => {
//   return new Promise((resolve, reject) => {
//     console.log("promise 시작");

//     //서버에서 데이터 받아온 시간 대체
//     setTimeout(() => {
//       userId = "zaya";
//       if (userId === id) {
//         resolve(userId);
//       } else {
//         reject(new Error("아이디가 틀렸습니다. 다시 입력해 주세요"));
//       }
//     }, 2000);
//   });
// };
// const checkUserId = async () => {
//   try {
//     const result = await promiseFunc();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Promise 종료");
//   }
// };
// checkUserId();

//json 사용하기
//데이터를 전송하기 위한 경량의 데이터 포맷
//여러 언어에서 쉽게 사용할 수 있어 서버와의 통신에서는 json으로 통신함
// [
//   {
//     name: "장화",
//     age: "13",
//     employed: "true",
//     position: "이사",
//     address: {
//         'gu':'마포구',
//         'city':'서울시'
//     }
//   }
// ];

// const jsonString =
//   '{"name":"장화","age":13,"isEmployed":true,"position": "이사", "address":{"gu":"마포구","city":"서울시"}}';
// //console.log(jsonString.name); //js 객체처럼 바로 사용 불가
// //json -> js 객체로 파싱하기
// const obj = JSON.parse(jsonString);
// console.log(obj.name);

// //js 객체 -> json으로 파싱하기
// const jsonStr = JSON.stringify(obj);
// console.log(jsonStr);

//OpenAPI 사용

fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    const img = document.createElement("img");
    img.src = data[0].url;
    img.setAttribute("width", "500px");
    document.querySelector("#cat").append(img);
  });

//OMDb api 사용해 영화 데이터 받아와 브라우저에 보여주기

async function getMovieData() {
  let word = "love";
  const h3 = document.querySelector("h3");
  h3.innerText = `검색된 키워드:${word}`;
  //fetch으로 데이터 불러오기
  //response 변수에는 서버에서 받아온 데이터가 저장됨
  const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=c99c267&s=${word}`
  );
  const movieData = await response.json();
  console.log(movieData.Search);
  const ul = document.querySelector("ul");
  for (let movie of movieData.Search) {
    const img = document.createElement("img");
    const div = document.createElement("div");
    const p = document.createElement("p");
    img.src = movie.Poster;
    img.alt = movie.Title;
    p.innerText = movie.Title;
    div.append(img, p);
    ul.append(div);
  }
}

//JSONPlaceholder API 사용해 가짜 데이터로 CRUD 작업하기
//JSONPlaceholder API : json 형태의 mock data(더미 데이터)를 주는 openAPI

//get 요청
//특징 게시물을 가져오는 함수
const getPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
//post
const postPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "제묵제묵제묵",
      body: "게시물 내용 내용",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log("err: ", err);
    });
};

//delete

const deletePost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log("Delete!"))
    .catch((err) => console.log("delete err:", err));
};
