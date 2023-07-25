import styled from "styled-components";
import inspiration from "/inspiration.jpeg";

const StyledCursor = styled.div<{ value: string }>`
  height: 150px;
  width: 150px;
  text-align: center;
  background-color: #303030;
  color: #fff;
  border-radius: 15px;
  cursor: ${(props) => props.value};
`;

const StyledContainer = styled.div<{}>`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
  justify-content: center;
  @media (min-width: 700px) {
    margin-top: 30px;
    max-width: 1200px;
  }
  @media (max-width: 699px) {
    margin-top: 10px;
  }
  margin: 0 auto;
  img {
    @media (min-width: 800px) {
      max-width: 900px;
    }
    @media (max-width: 799px) {
      max-width: 600px;
    }
  }
`;

const StyledTitle = styled.h1<{}>`
  text-align: center;
`;

function App() {
  const cursorList = [
    "default",
    "wait",
    "progress",
    "not-allowed",
    "no-drop",
    "copy",
    "context-menu",
    "help",
    "move",
    "all-scroll",
    "cursor",
    "pointer",
    "grab",
    "grabbing",
    "cell",
    "zoom-in",
    "zoom-out",
    "row-resize",
    "col-resize",
    "nwse-resize",
    "alias",
  ];

  return (
    <>
      <StyledTitle>:hover cursor:</StyledTitle>
      <StyledContainer>
        {cursorList.map((element, index) => (
          <StyledCursor key={index} value={element}>
            {element}
          </StyledCursor>
        ))}
      </StyledContainer>
      <StyledContainer>
        <img src={inspiration} alt="inspiration jpeg" />
      </StyledContainer>
    </>
  );
}

export default App;
