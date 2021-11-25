# Project - Fitness_Helper

## A Brief Overview

- Provides user the information of the number of people at the gym, and keeps track of the user's workout routine.

## Screenshots

- ![This is an image](https://user-images.githubusercontent.com/80460155/143388915-37e63092-99bd-4586-b12c-eccc51c9dc84.png)
Before entering the gym
- ![This is an image](https://user-images.githubusercontent.com/80460155/143389743-db91586c-278b-45e9-89ac-6e7686abb787.png)
After entering the gym
- ![This is an image](https://user-images.githubusercontent.com/80460155/143388938-68ca382e-a025-458e-afe9-06b8725d3c30.png)
The main routine management page
- ![This is an image](https://user-images.githubusercontent.com/80460155/143389128-64eb248c-4a6c-4f90-9ac0-ed5e9b526df1.png)
Workout Addition
- ![This is an image](https://user-images.githubusercontent.com/80460155/143388939-304c725e-48a3-46b6-bdf4-ce8bd89a07ca.png)
After addition of workout
- ![This is an image](https://user-images.githubusercontent.com/80460155/143388924-1de3af50-bc2b-48c2-8c17-099ea423186c.png)
Diet management page
- ![This is an image](https://user-images.githubusercontent.com/80460155/143388919-df8321b9-f86d-4c86-b130-685e774bb198.png)
Addition of diet
- ![This is an image](https://user-images.githubusercontent.com/80460155/143388931-cbcd1d60-d4fa-4811-8540-af1a4fb448ad.png)
After addition of diet
- ![This is an image](https://user-images.githubusercontent.com/80460155/143394286-cdefd073-32b7-44ed-bf08-535900efa233.png)
List of music to listen to when working out


## Demonstration Video
- https://youtu.be/9HF10PQRROk

## Releases

- v1.0.0 https://kwak-junyoung.github.io/Fitness_Helper/

## How to contribute

- Leave issues so that one of us can take a look and decide whether to make changes or not.

## [License](https://choosealicense.com/licenses/mit/#)

## Code of Conduct

- When manipulating Master branch(e.g. merge), at least two people in a team needs to be tracking it.
- Code on your local machine, and ask for a code review when you are done.
- 1 Commit a day is highly encouraged
- Respect each other!
- Empathy and kindness
- Be as precise as possible when reviewing others code.
- No trolling, insulting, harassment, etc.

## 2. History

1. Design overall HTML format of all pages

2. Implement calendar

```js
str= day_train[i]["운동 구분"]+ "/ " + str + "/ " + day_train[i]["횟수"] + "times/ " + day_train[i]["무게"]+ "kg";
          div.textContent= str;
          label.appendChild(div);


if (localStorage.getItem(targetID) === null) {
  var dietGraph = ('{"아침":' + '[]' + ',"점심":' + '[]' + ',"저녁":' + '[]' + '}')
  localStorage.setItem(targetID, dietGraph)
}

var old = JSON.parse(localStorage.getItem(targetID))
var text = JSON.parse(('{"메뉴":"' + input + '","무게":' + input2 + '}'));

old[selectedTime].push(text);
var strold = JSON.stringify(old)
localStorage.setItem(targetID, strold)
```

3. Implement workout routine & diet management functions

4. Connect those to the calendar 

## 3. Future

- Memo Storage implementation
- Progressive overload implementation

## 5. Work

- 공동작업

> 메인 workout page(3pg)

- 곽준영:

> 식단 추가 페이지 프론트엔드(6pg), 점진직 과부하(right pane) 수정, 식단 페이지 백엔드(localstorage), 메모 저장 기능(local storage), 발표

- 진영서:

> 입장/퇴장 페이지 프론트엔드, 운동 페이지 프론트엔드(4pg), 웹서버 & SQL 데이터베이스 구축, 날짜 불러오기, 입장/퇴장 로컬스토리지, 쎔네일 디자인, PPT 제작

- 이유기:

> 식단 페이지 프론트엔드(5pg), 운동 추가 세부 사항 수정, 플레이리스트 페이지(7pg), 운동 페이지 백엔드(localstorage), 시연 비디오 제작
