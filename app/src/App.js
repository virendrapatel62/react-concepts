import logo from "./logo.svg";
import "./App.css";

function Wrapper(props) {
  return props.children;
}

function ComponentWithMultiPleElements(props) {
  // return (

  //     <h1>Heading</h1>
  //     <h1>Heading2</h1>
  // );

  //case3 using custom wrapper

  return (
    <Wrapper>
      <h1>Hello 1</h1>
      <h1>Hello 2</h1>
      <h1>Hello 3</h1>
      <h1>Hello 4</h1>
    </Wrapper>
  );

  // case 2 // using array

  return [<h1>Heading 2</h1>, <h1>Heading 3</h1>, <h1>Heading 4</h1>];

  // case 1  // using empty wraoper
  return (
    <>
      <h1>Heading 2</h1>
      <h1>Heading 3</h1>
      <h1>Heading 4</h1>
    </>
  );
}

function App() {
  return <ComponentWithMultiPleElements />;
}

export default App;
