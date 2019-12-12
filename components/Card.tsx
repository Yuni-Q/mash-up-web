import * as React from 'react';
import styled from 'styled-components';

import deleteIcon from '../images/icon_delete.svg'
import authorImage from '../images/icon_writer.svg'
import dateIcon from '../images/icon_date.svg'
import clockIcon from '../images/icon_clock.svg'
import placeIcon from '../images/icon_place.svg'
import editIcon from '../images/icon_edit.svg'
import voteIcon from '../images/icon_vote.svg'
import checkIcon from '../images/icon_check.svg'

const StyledCardWrapper = styled.div<any>`
  display: inline-block;
  width: ${({isNew}) => isNew ? 560 : 420}px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
  margin: 75px 16px;
  position: relative;
`;

const StyledCategory = styled.div`
  width: 122px;
  height: 34.7px;
  border-radius: 35px;
  background-color: #ffb941;
  line-height: 34.7px;
  text-align: center;
  margin-left: 16px;
`;

const StyledCardHead = styled.div`
  width: 420px;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDeleteImage = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 24px;
  margin-top: 12px;
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const StyledCatdTitle = styled.div`
  height: 47.1px;
  font-family: NotoSansCJKjp;
  font-size: 27px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.48;
  letter-spacing: -0.68px;
  text-align: center;
  color: #525c69;
`;

const StyledAuthorWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const StyledAuthorImage = styled.img`
  width: 33.3px;
  height: 33.3px;
  object-fit: contain;
`;

const StyledAuthorName = styled.span`
  height: 29.9px;
  font-family: NotoSansCJKjp;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 29.9px;
  letter-spacing: -0.4px;
  text-align: left;
  color: #4b9efd;
`;

const StyledCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid 1px #ededed;
  border-bottom: solid 1px #ededed;
  padding: 16px 0;
`;

const StyledCardInfo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCardInfoImage = styled.img`
  width: 33.3px;
  height: 33.3px;
  object-fit: contain;
`;
const StyledCardInfoText = styled.div`
  width: 277.2px;
  height: 30.5px;
  font-family: NotoSansCJKjp;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 30.5px;
  letter-spacing: -0.4px;
  text-align: left;
  color: #262626;
`;

const StyledDescription = styled.div`
  width: 350px;
  height: 124px;
  font-family: NotoSansCJKjp;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: left;
  color: #262626;
  padding: 12px 36px;
`;

const StyledFixBoxWrapper = styled.div`
  display: flex;
  height: 48px;
  border-top: solid 1px #ededed;
`;

const StyledFixBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledFixBoxBlue = styled(StyledFixBox)`
  background-color: #4f42e9;
`;

const StyledFixBoxImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const StyledFixBoxText = styled.span`
  display: inline-block;
  height: 23px;
  font-family: NotoSansCJKjp;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 23px;
  letter-spacing: -0.38px;
  text-align: left;
  color: #757575;
`;

// const StyledFixBoxArrow = styled.span`
//   display: inline-block;
//   height: 23px;;
//   line-height: 23px;
//   height: 11.1px;
//   border: solid 0.8px #757575;
// `;

const StlyedVoteText = styled.span`
  display: inline-block;
  height: 26.9px;
  font-family: NotoSansCJKjp;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 26.9px;
  letter-spacing: normal;
  text-align: center;
  color: #4f42e9;
`;
const StlyedVoteTextBlue = styled(StlyedVoteText)`
  color: #ffffff;
`;

const StyledVoteImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-left: 4px;
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  margin-left: 12px;
  width: 370px;
  font-family: NotoSansCJKjp;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.5px;
  text-align: left;
  color: #e6e6e6;
  border: none;
  border-bottom: solid 1px #ebf0f3;
`;

const StyledTextarea = styled.textarea`
  width: 485px;
  height: 124px;
  font-family: NotoSansCJKjp;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: left;
  color: #262626;
  padding: 12px 36px;
  border: none;
  resize: none;
`


interface Props {
  isNew?: boolean;
}

const Card: React.FC<Props> = ({isNew}) => {
  console.log('Card',isNew);
  return (
    <StyledCardWrapper isNew={isNew}>
      <StyledCardHead>
        <StyledCategory>MASH-UP</StyledCategory>
        <StyledDeleteImage src={deleteIcon} alt=""/>
        </StyledCardHead>
        <StyledCardBody>
          <StyledCatdTitle>전체회의 공지</StyledCatdTitle>
          <StyledAuthorWrapper>
            <StyledAuthorImage src={authorImage} alt="" />
            <StyledAuthorName>동그래</StyledAuthorName>
          </StyledAuthorWrapper>
          <StyledCardInfoWrapper>
            <StyledCardInfo>
              <StyledCardInfoImage src={dateIcon} alt="" />
              {isNew ? <StyledInput /> : <StyledCardInfoText>강남역 8번 출구 하이퍼커넥트 14층</StyledCardInfoText>}
            </StyledCardInfo>
            <StyledCardInfo>
              <StyledCardInfoImage src={clockIcon} alt="" />
              {isNew ? <StyledInput /> : <StyledCardInfoText>강남역 8번 출구 하이퍼커넥트 14층</StyledCardInfoText>}
            </StyledCardInfo>
            <StyledCardInfo>
              <StyledCardInfoImage src={placeIcon} alt="" />
              {isNew ? <StyledInput /> : <StyledCardInfoText>강남역 8번 출구 하이퍼커넥트 14층</StyledCardInfoText>}
            </StyledCardInfo>
          </StyledCardInfoWrapper>
          {isNew
          ? <StyledTextarea placeholder="이번 전체회의에서는 디자인을 잘 하는 방법에 대한 세미나가 있을 예정입니다. 함께 팀활동을 할 예정이니, 노트북을 가져와주시길 바랍니다. 그 후에는 자유롭게 프로젝트팀 회의 시간을 드릴 예정입니다. 오시는 분들 모두 회의 준비도 열시뮈 해서 만나요!!"/> 
          : <StyledDescription>
              이번 전체회의에서는 디자인을 잘 하는 방법에 대한 세미나가 있을 예정입니다. 함께 팀활동을 할 예정이니, 노트북을 가져와주시길 바랍니다. 그 후에는 자유롭게 프로젝트팀 회의 시간을 드릴 예정입니다. 오시는 분들 모두 회의 준비도 열시뮈 해서 만나요!!
            </StyledDescription>}
          {isNew ? '' : 
            <>
          <StyledFixBoxWrapper>
            <StyledFixBox>
              <StyledFixBoxImage src={editIcon} alt="" />
              <StyledFixBoxText>투표 | 00명 참여 중</StyledFixBoxText>
              <StyledFixBoxText>></StyledFixBoxText>
            </StyledFixBox>
            <StyledFixBox>
              <StyledFixBoxImage src={voteIcon} alt="" />
              <StyledFixBoxText>투표 | 00명 참여 중</StyledFixBoxText>
              <StyledFixBoxText>></StyledFixBoxText>
            </StyledFixBox>
          </StyledFixBoxWrapper>
          <StyledFixBoxWrapper>
            <StyledFixBox>
              <StlyedVoteText>참여할게요! 32</StlyedVoteText>
            </StyledFixBox>
            <StyledFixBoxBlue>
              <StlyedVoteTextBlue>불참할게요! 32</StlyedVoteTextBlue>
              <StyledVoteImage src={checkIcon} alt="" />
            </StyledFixBoxBlue>
          </StyledFixBoxWrapper>
          </>
            }
        </StyledCardBody>
        </StyledCardWrapper>
  )
};

export default Card;
