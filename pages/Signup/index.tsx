import React, { useCallback, useState, useContext } from 'react'
import styled from 'styled-components';

import { UserContext } from '../../App';
import { StyledLogin, StyledWrapper, StyledLogoWrapper, StyledLogo, StyledName, StyledTitle, StyledFomr, StyledInputWrapper, StyledInput, StlyedButtonWrapper, StyledButton, StyledDescription, StyledLink, StyledDescriptionWrapper } from '../../common/StyledComponents';

const StyledTextWrapper = styled(StyledInputWrapper)`
  border: solid 1px #4f42e9;
  background-color: rgba(79, 66, 233, 0.15);
`;

const StyledText = styled.div`
  height: 32.5px;
  opacity: 0.8;
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: center;
  color: #4f42e9;
`;

const Signup: React.FC = ({ history }: any) => {
  const { context: { userDispatch } }: any = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [passoword, setPassword] = useState('');
  const onSubmit = useCallback(event => {
    event.preventDefault();
    event.stopPropagation();
    console.log(email, passoword)
    userDispatch({
      type: 'login',
      payload: {
        email,
      }
    })
    history.push('/');
  }, [email, passoword]);
  const onChangeEmail = useCallback(event => {
    setEmail(event.target.value);
  }, [])
  const onChangePassword = useCallback(event => {
    setPassword(event.target.value);
  }, [])
  return (
    <StyledLogin>
      <StyledWrapper>
        <StyledLogoWrapper>
          <StyledLogo />
        </StyledLogoWrapper>
        <StyledName>MASH UP</StyledName>
        <StyledTitle>회원가입</StyledTitle>
        <StyledFomr onSubmit={onSubmit} >
          <StyledTextWrapper>
            <StyledText>휴대폰 번호 인증 완료</StyledText>
          </StyledTextWrapper>
          <StyledInputWrapper>
            <StyledInput type='email' placeholder='이메일을 입력해주세요' value={email} onChange={onChangeEmail} />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledInput type='password' placeholder='비밀번호를 입력해주세요' value={passoword} onChange={onChangePassword} />
          </StyledInputWrapper>
          <StlyedButtonWrapper>
            <StyledButton type='submit'>회원가입 완료하기</StyledButton>
          </StlyedButtonWrapper>
        </StyledFomr>
        <StyledDescriptionWrapper>
          <StyledDescription>
            아이디가 있는 매쉬업 회원이라면?
        </StyledDescription>
          <StyledLink to='/login'>
            로그인하기
        </StyledLink>
        </StyledDescriptionWrapper>
      </StyledWrapper>
    </StyledLogin>
  )
}

export default Signup;
