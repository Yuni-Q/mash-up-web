import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import { StyledSubHead, StyledH1, StyledH1B, StyledNav, StyledHeadLogoWrapper, StyledHeadLogo, StyledHeadName, StlyedLink, StyledUserInfo, StyledH2, StyledNavText, StyledHead } from '../../common/StyledComponents';

const StyledMain = styled.div``;

const StyledPostButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #4f42e9;
  z-index: 999;
`;

const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;

`;

const StyledMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 72px;
  height: 22px;
  border: solid 1.5px #616a76;
`;


interface Props {

}

const Main: React.FC<Props> = () => {
  return (
    <StyledMain>
      <Link to="/add/schedule">
        <StyledPostButton>5</StyledPostButton>
      </Link>
      <StyledHead>
        <StyledNav>
          <StyledHeadLogoWrapper>
            <StyledHeadLogo />
            <StyledHeadName>MASH UP</StyledHeadName>
          </StyledHeadLogoWrapper>
          <StlyedLink to="/">
            <StyledNavText white={true}>전체회의 공지</StyledNavText>
          </StlyedLink>
          <StlyedLink to="/">
            <StyledNavText>팀별 스터디 공지</StyledNavText>
          </StlyedLink>
          <StlyedLink to="/">
            <StyledNavText>앱프로젝트 공지</StyledNavText>
          </StlyedLink>
        </StyledNav>
        <Link to="/">
          <StyledUserInfo>
            디자인 고은이
          </StyledUserInfo>
        </Link>
      </StyledHead>
      <StyledSubHead>
        <StyledH1>매쉬업 <StyledH1B>전체회의 공지</StyledH1B>를 확인하세요.</StyledH1>
        <StyledH2>총 10 회의 중 9번 참여</StyledH2>
      </StyledSubHead>
      <StyledCardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </StyledCardWrapper>
      <StyledMoreButton>6</StyledMoreButton>
    </StyledMain>
  )
}

export default Main


