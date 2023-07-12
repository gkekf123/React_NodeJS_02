import React from "react";

// 클래스형에서 props와 state
class StateComponent2 extends React.Component {
  // 클래스형 컴포넌트가 생성될 때 생성자로 프롭스 전달
  constructor(props) {
    super(props);

    // state생성 : 생성자 안에서 직접 선언 해야 된다
    this.state = {
      name: "홍길동",
      age: props.age,
    };
  }

  // 클래스 안에서는 키워드 사용 X
  handleState = () => {
    this.setState({ name: "이순신", age: 30 });
  };

  render() {
    // const { age } = this.props;

    return (
      <div>
        <div>[클래스형 컴포넌트]</div>
        state name값 : {this.state.name}
        <br />
        state age값 : {this.state.age}
        <br />
        <button onClick={this.handleState}>스테이트 체인지</button>
        <br />
      </div>
    );
  }
}

export default StateComponent2;
