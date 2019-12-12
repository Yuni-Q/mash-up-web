import React, { useCallback, useState, useContext } from 'react'

import { UserContext } from '../../App';
import { StyledLogin, StyledWrapper, StyledLogoWrapper, StyledLogo, StyledName, StyledTitle, StyledFomr, StyledInputWrapper, StyledInput, StlyedButtonWrapper, StyledButton, StyledDescription, StyledLink, StyledDescriptionWrapper } from '../../common/StyledComponents';

const Authentication: React.FC = ({ history }: any) => {
  const { context: { userDispatch } }: any = useContext(UserContext);
  const [number, setNumber] = useState('');
  const onSubmit = useCallback(event => {
    event.preventDefault();
    event.stopPropagation();
    // userDispatch({
    //   type: 'login',
    //   payload: {
    //     email,
    //   }
    // })
    history.push('/signup');
  }, [number]);
  const onChangeNumber = useCallback(event => {
    setNumber(event.target.value);
  }, [])
  return (
    <StyledLogin>
      <StyledWrapper>
        <StyledLogoWrapper>
          <StyledLogo />
        </StyledLogoWrapper>
        <StyledName>MASH UP</StyledName>
        <StyledTitle>인증하기</StyledTitle>
        <StyledFomr onSubmit={onSubmit} >
          <StyledInputWrapper>
            <StyledInput type='number' placeholder='휴대폰 번호를 입력해주세요' value={number} onChange={onChangeNumber} />
          </StyledInputWrapper>
          <StlyedButtonWrapper>
            <StyledButton type='submit'>번호 인증하기</StyledButton>
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

export default Authentication;
