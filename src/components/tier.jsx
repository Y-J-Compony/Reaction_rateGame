import * as S from "../style/style";
export default function Tier({ result }) {
  let image;
  if (result >= 1 && result <= 130) {
    image = (
      <S.Box>
        <S.Faker src="./image/LOL_Tier/Faker.png" />
        <S.Name style={{ color: "gold" }}>Faker</S.Name>
      </S.Box>
    );
  } else if (result >= 131 && result <= 180) {
    image = (
      <S.Box>
        <S.img src="./image/LOL_Tier/챌린저.png" />
        <S.Name style={{ color: "gold" }}>챌린저</S.Name>
      </S.Box>
    );
  } else if (result >= 181 && result <= 210) {
    image = (
      <S.Box>
        <S.img src="./image/LOL_Tier/그마.png" />
        <S.Name style={{ color: "red" }}>그랜드마스터</S.Name>
      </S.Box>
    );
  } else if (result >= 211 && result <= 225) {
    image = (
      <S.Box>
        <S.img src="./image/LOL_Tier/마스터.png" />
        <S.Name style={{ color: "purple" }}>마스터</S.Name>
      </S.Box>
    );
  } else if (result >= 226 && result <= 250) {
    image = (
      <S.Box>
        <S.img src="./image/LOL_Tier/다이아.png" />
        <S.Name style={{ color: "blue" }}>다이아</S.Name>
      </S.Box>
    );
  } else if (result >= 251 && result <= 295) {
    image = (
      <S.Box>
        <S.img src="./image/LOL_Tier/플레티넘.png" />
        <S.Name style={{ color: "lightblue" }}>플레티넘</S.Name>
      </S.Box>
    );
  } else if (result >= 296 && result <= 310) {
    image = (
      <S.Box>
        <S.img src="./image/LOL_Tier/골드.png" />
        <S.Name style={{ color: "yellow" }}>골드</S.Name>
      </S.Box>
    );
  } else if (result >= 311 && result <= 330) {
    image = (
      <S.Box>
        <S.img src="./image/LOL_Tier/실버.png" />
        <S.Name style={{ color: "sliver" }}>실버</S.Name>
      </S.Box>
    );
  } else if (result >= 331) {
    image = (
      <S.Box>
        <S.img src="./image/LOL_Tier/브론즈.png" />
        <S.Name style={{ color: "brown" }}>브론즈</S.Name>
      </S.Box>
    );
  }

  return (
    <>
      <S.Modal>{image}</S.Modal>
    </>
  );
}
