import { useState } from "react";

function StateComponent() {
  // state - 컴포넌트 안에서 변화하는 값 (=상태변수)
  // const result = useState("초기값");
  // console.log(result)
  // const a = result[0]; // state의 현재 값(초기값)
  // const b = result[1] // 함수

  const [data, setData] = useState("초기값"); // 숫자, 배열, 공백 가능
  const [num, setNum] = useState(0);
  const [color, setColor] = useState("black");

  // state는 절대 직접 값을 바꾸면 안된다
  // data = "이거 바꿔야지"
  // state는 이벤트 or 특정 함수안에서 바꾸도록 처리
  // setData("state 변경"); // 무한루프
  // console.log(1);

  // 재사용 하려면 이 방법
  const handleData = () => {
    setData("data 변경 완료!"); // 즉시 변경아니고 비동기적으로 state값을 변경 -> 화면을 다시 그리게 된다
    setNum("숫자 변경 완료!");
  };

  // // 빨간색 변경
  // const handleColor = () => setColo("red");

  return (
    <div>
      스테이트 data값 : {data}
      <br />
      스테이트 num값 : {num}
      <br />
      {/* handleData() 함수 호출이다 */}
      <button onClick={handleData}>스테이트 값 변경</button>
      <br />
      {/* 한번 사용 */}
      <h3 style={{ color: color }}>{data}</h3> {/* style={{키 : 값}} */}
      <button onClick={() => setColor("red")}>뷹은색</button>
      <button onClick={() => setColor("blue")}>푸른색</button>
      <button onClick={() => setColor("yellow")}>그 사이 3초 짧은색</button>
    </div>
  );
}

export default StateComponent;
