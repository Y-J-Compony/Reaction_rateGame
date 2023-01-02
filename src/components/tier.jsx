import * as S from "../style/style";
export default function Tier({ result }) {
  let image;
  if (result >= 1 && result <= 180) {
    image = <S.img src="./image/LOL_Tier/챌린저.png" />;
  } else if (result >= 181 && result <= 200) {
    image = <S.img src="./image/LOL_Tier/그마.png" />;
  } else if (result >= 201 && result <= 215) {
    image = <S.img src="./image/LOL_Tier/마스터.png" />;
  } else if (result >= 216 && result <= 240) {
    image = <S.img src="./image/LOL_Tier/다이아.png" />;
  } else if (result >= 241 && result <= 260) {
    image = <S.img src="./image/LOL_Tier/플레티넘.png" />;
  } else if (result >= 261 && result <= 300) {
    image = <S.img src="./image/LOL_Tier/골드.png" />;
  } else if (result >= 301 && result <= 330) {
    image = <S.img src="./image/LOL_Tier/실버.png" />;
  } else if (result >= 331) {
    image = <S.img src="./image/LOL_Tier/브론즈.png" />;
  }
  return (
    <>
      <S.Modal>{image}</S.Modal>
    </>
  );
}
