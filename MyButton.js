// 아주 간단한 리엑트의 함수 컴포넌트
function MyButton(props){
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

// 리엑트 컴포넌트를 dom container에 렌더링 하는 코드
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
