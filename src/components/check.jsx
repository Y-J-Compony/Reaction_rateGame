import { useRef, useState } from "react";
import * as S from "../style/style";
import Tier from "./tier";

export default function Check() {
  const [message, setMessage] = useState("당신의 티어를 맞춰 보겠습니다.");
  const [result, setResult] = useState([]);
  const [color, setColor] = useState("red");
  const [state, setState] = useState("waiting");
  const [tier, setTier] = useState(true);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();
  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("색이 변경 되었을 때 Click버튼을 누르세요!");
      setColor("blue");
      setResult("");
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("클릭");
        setColor("green");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 3000); // 2초 3초 랜덤
    } else if (state === "ready") {
      clearTimeout(timeout.current);
      setState("waiting");
      setMessage("너무 급합니다.");
      setColor("red");
    } else if (state === "now") {
      endTime.current = new Date();
      setState("waiting");

      setMessage("");
      setColor("red");
      setResult(prevResult => {
        return [...prevResult, endTime.current - startTime.current];
      });
      setTier(!tier);
    }
  };
  return (
    <S.Bg>
      <S.Title>재미로하는 반응속도 티어</S.Title>
      <S.Screen onClick={onClickScreen} style={{ background: `${color}` }}>
        <S.Computer>
          <S.Text>{message}</S.Text>
          {tier ? null : <Tier result={result} setTier={setTier} />}
        </S.Computer>
      </S.Screen>
    </S.Bg>
  );
}
