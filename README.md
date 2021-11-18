# Project - Fitness_Helper

## A Brief Overview

- Provides user the information of the number of people at the gym, and keeps track of the user's workout routine.

## Links to resources

## Installation

-

## API reference

-

## Examples

- Needs insertion later

## Releases

- We will release it someday...

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
var each_Set = {
    workout_Name = "";          // Name of workout e.g. pushup, situp, ...
    workout_Num = 0;            // How many times did a user conduct a workout in a set
    failure = false;            // Whether the user successfully conducted this set
};

var each_Workout = {
    // each_Set structure
    set_Num = 0;                // How many sets are to be conducted for that workout
    prog_overload = false;      // If the user failed a set even a single time, stop progressive overload
    workout_part = "";          // Which part of the body does this workout deal with e.g. chest, biceps ...
}

var each_Day = {
    // each_Workout structure
    // date of that day
}
```

3. to be updated

## 3. Future

- ??

## 5. Work

- 공동작업

> 메인 workout page(3pg)

- 곽준영:

> 식단 추가 페이지 프론트엔드(6pg), 점진직 과부하(right pane) 수정, 식단 페이지 백엔드(localstorage)

- 진영서:

> 입장/퇴장 페이지 프론트엔드, 운동 페이지 프론트엔드(4pg), 웹서버 구축, 날짜 불러오기, 데이터베이스 연동

- 이유기:

> 식단 페이지 프론트엔드(5pg), 운동 추가 세부 사항 수정, 플레이리스트 페이지(7pg), 운동 페이지 백엔드(localstorage)
