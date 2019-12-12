import React, { useCallback, useState, useContext } from 'react'
import Axios from 'axios';

import { UserContext } from '../../App';
import { StyledLogin, StyledWrapper, StyledLogoWrapper, StyledLogo, StyledName, StyledTitle, StyledFomr, StyledInputWrapper, StyledInput, StlyedButtonWrapper, StyledButton, StyledDescription, StyledLink, StyledDescriptionWrapper } from '../../common/StyledComponents';

const Login: React.FC = ({ history }: any) => {
  const { context: { userDispatch } }: any = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [passoword, setPassword] = useState('');
  const onSubmit = useCallback( async event => {
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
    // const result = await Axios.post('https://mashup.lhy.kr/api/members/', {
    //   email,
    //   passoword,
    // })
    // console.log(11, result)
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
        <StyledTitle>로그인</StyledTitle>
        <StyledFomr onSubmit={onSubmit} >
          <StyledInputWrapper>
            <StyledInput type='email' placeholder='이메일을 입력해주세요' value={email} onChange={onChangeEmail} />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledInput type='password' placeholder='비밀번호를 입력해주세요' value={passoword} onChange={onChangePassword} />
          </StyledInputWrapper>
          <StlyedButtonWrapper>
            <StyledButton type='submit'>로그인하기</StyledButton>
          </StlyedButtonWrapper>
        </StyledFomr>
        <StyledDescriptionWrapper>
          <StyledDescription>
            아이디가 없는 매쉬업 회원이라면?
          </StyledDescription>
          <StyledLink to='/authentication'>
            인증 및 회원가입
          </StyledLink>
        </StyledDescriptionWrapper>
      </StyledWrapper>
    </StyledLogin>
  )
}

export default Login;
