import { Link } from 'react-router-dom';
import styled from 'styled-components';

const white = '#ffffff'

export const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4f42e9

;
`;

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 630px;
  height: 804px;
  background-color: ${white};
`;

export const StyledLogoWrapper = styled.div`
  margin-top: 96px;
  position: relative;
  width: 87px;
  height: 87px;
`;

export const StyledLogo = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  background-color: red;
  border-top: 43.5px solid ${white};
  border-bottom: 43.5px solid #4f42e9;
  border-right: 43.5px solid #fc5e5d;
  border-left: 43.5px solid #4f42e9;
`;

export const StyledTitle = styled.div`
  width: 182px;
  height: 37px;
  font-family: NotoSansCJKkr;
  font-size: 21px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
`;

export const StyledFomr = styled.form`
  margin-top: 25px;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 393px;
  height: 54px;
  border-radius: 10px;
  border: solid 1px #707070;
  background-color: #ffffff;
`;

export const StyledInput = styled.input`
  width: 277px;
  height: 32.5px;
  font-family: NotoSansCJKkr;
  font-size: 20px;
  line-height: 1.45;
  text-align: center;
  border: none;
  ::placeholder {
  color: #dddddd;
  }
`;

export const StlyedButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 393px;
  height: 54px;
  border-radius: 10px;
  background-color: #4f42e9;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: #4f42e9;
  height: 30px;
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

export const StyledDescription = styled.div`
  width: 303px;
  height: 37px;
  font-family: NotoSansCJKkr;
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.84;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
`;

export const StyledLink = styled(Link)`
  width: 182px;
  height: 37px;
  font-family: NotoSansCJKkr;
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.84;
  letter-spacing: normal;
  text-align: center;
  color: #4f42e9;
  margin-bottom: 50px;
`;

export const StyledName = styled.div`
  margin-top: 18px;
  font-family: NotoSansCJKkr;
  font-size: 28px;
  color: #000000;
  font-weight: bolder;
`;

export const StyledDescriptionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSubHead  = styled.div`
  padding: 60px 0;
  border-bottom: solid 1px #d0d6d9;
`;

export const StyledH1 = styled.h1`
  margin-left: 164px;
  font-family: NotoSansCJKjp;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.47;
  text-align: left;
  color: #282828;
`;

export const StyledH1B = styled.b`
  font-family: NotoSansCJKjp;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: left;
  color: #282828;
`;


export const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100vw;
  height: 120px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.28);
  background-color: #ffffff;
`;

export const StyledNavText = styled.div<any>`
  width: 268px;
  height: 120px;
  background-color: ${({ white }) => !!white ? '#4f42e9' : '#ffffff'};
  font-family: NotoSansCJKjp;
  font-size: 25px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 120px;
  letter-spacing: normal;
  text-align: center;
  color: ${({ white }) => !!white ? '#ffffff' : '#4f42e9'};
  text-align: center;
`

export const StyledUserInfo = styled.div`
    width: 360px;
    height: 120px;
    font-weight: 500;
    font-family: NotoSansCJKjp;
    font-size: 23px;
    font-weight: bold;
    line-height: 120px;
    color: #315efb;
    text-align: center;
    border-left: 2px solid #cacaca;
`;


export const StyledNav = styled.nav`
  display: flex;
`;

export const StyledHeadLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 163px;
  height: 120px;
`;

export const StyledHeadLogo = styled.div`
  width: 0px;
  height: 0px;
  background-color: red;
  border-top: 25px solid #ffffff;
  border-bottom: 25px solid #4f42e9;
  border-right: 25px solid #fc5e5d;
  border-left: 25px solid #4f42e9;
`;

export const StyledHeadName = styled.div`
  margin-top: 8px;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  color: #000000;
  font-weight: bolder;
`;

export const StlyedLink = styled(Link)`
  text-decoration: none;
`;

export const StyledH2 = styled.h2`
  margin-left: 164px;
  font-family: NotoSansCJKjp;
  font-size: 23px;
  line-height: 1.48;
  text-align: left;
  color: #282828;
`;

