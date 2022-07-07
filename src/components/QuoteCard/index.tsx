import { Container, Content } from "./style";
import dividerImg from "../../images/pattern-divider-desktop.svg";
import diceImg from "../../images/icon-dice.svg";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { getRandomIntegerBetween } from "../../utils/randomInteger";
import { Loading } from "../Loading";

interface adviceProps {
  id: number;
  adviceQuote: string;
}

export function QuoteCard() {
  const [advice, setAdvice] = useState({} as adviceProps);
  const [removeLoading, setRemoveLoading] = useState(false);

  async function getRandomAdvice() {
    const randomId = getRandomIntegerBetween(1, 224);
    const rawData = await api.get(`advice/${randomId}`);
    return rawData.data;
  }

  async function handleDiceClick() {
    const adviceObj = await getRandomAdvice();
    setAdvice({
      id: adviceObj.slip.id,
      adviceQuote: adviceObj.slip.advice,
    });
  }
  useEffect(() => {
    const getData = async () => {
      const adviceObj = await getRandomAdvice();
      setAdvice({
        id: adviceObj.slip.id,
        adviceQuote: adviceObj.slip.advice,
      });
      setRemoveLoading(true);
    };
    getData();
  }, []);
  return (
    <>
      <Container>
        {advice?.adviceQuote?.length > 0 && (
          <Content>
            <h1 className="title">ADVICE #{advice.id}</h1>
            <p className="quote">"{advice.adviceQuote}"</p>
            <img className="divider" src={dividerImg} alt="divider" />
            <div className="dice" onClick={handleDiceClick}>
              <img src={diceImg} alt="dice" />
            </div>
          </Content>
        )}
        {!removeLoading && <Loading />}
      </Container>
    </>
  );
}
