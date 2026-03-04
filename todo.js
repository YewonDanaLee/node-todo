// fs(file system)은 파일을 읽고 쓰는 기능을 제공하는 모듈
import fs from 'node:fs'; // 파일 제어 도구 불러오기

// 저장할 파일 경로 설정
const FILE_PATH = "./todos.json"

// 파일에서 Todo 목록 불러오기 함수
function loadTodos() {
    // 파일이 존재하지 않으면, 즉 처음 실행하는 경우 빈 배열 반환
    if (!fs.existsSync(FILE_PATH)) {
        return [];
    }

    // 파일 내용을 문자열로 읽어오기
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    // 파일이 비어있으면 빈 배열 반환
    return data ? JSON.parse(data) : [];
}

// Todo 목록을 파일에 저장하는 함수
function saveTodos(todos) {
    // JSON.stringify()는 자바스크립트 배열을 JSON 문자열로 바꿔줌
    // null, 2는 예쁘게 들여쓰기 하기 위함
    fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
}