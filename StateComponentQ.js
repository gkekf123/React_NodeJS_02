import React, { useState } from "react";

function StateComponentQ() {
  const [data, setData] = useState(0);
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);

  const HandleUp = () => {
    setData(data + 1);
    setUp(up + 1);
  };

  const handleDown = () => {
    setData(data - 1);
    setDown(down + 1);
  };

  const handleReset = () => {
    setData(0);
    setUp(0);
    setDown(0);
  };

  return (
    <div>
      카운트: {data}
      <br />
      <h3>방법1</h3>
      <button onClick={HandleUp}>증가</button>
      <button onClick={handleDown}>감소</button>
      <button onClick={handleReset}>초기화</button>
      <br />
      <h3>방법2</h3>
      <button onClick={() => setUp(up + 1)}>증가</button>
      <button onClick={() => setDown(down - 1)}>감소</button>
      <button onClick={() => setData(0)}>초기화</button>
    </div>
  );
}

export default StateComponentQ;
