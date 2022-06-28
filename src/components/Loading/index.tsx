import { Container } from "./style";
import loadingImg from "../../images/loader.svg";

export function Loading() {
  return (
    <Container>
      <img className="loader" src={loadingImg} alt="Loading" />
    </Container>
  );
}
