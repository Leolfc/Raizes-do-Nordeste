import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 280px) minmax(0, 1fr);
  width: 100%;
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    background-color: ${(props) => props.theme.secondWhite};

    section {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto 1fr;
    height: auto;
    min-height: 100vh;

    main {
      height: auto;
      overflow: visible;

      section {
        padding: 20px 12px 40px;
      }
    }
  }
`
