
import styled from "styled-components";
import { LoginImage } from "../../../assets/assets_library";

export default function BackgroundImage(){
    return <Container>
        <img src={LoginImage} />
    </Container>
}



const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
