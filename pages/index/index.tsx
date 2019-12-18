import React, { useState } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';

const { Link } = require('../../routes');

import Card from '../../components/Card';
import {
	StyledSubHead,
	StyledH1,
	StyledH1B,
	StyledNav,
	StyledHeadLogoWrapper,
	StyledHeadLogo,
	StyledHeadName,
	StlyedLink,
	StyledUserInfo,
	StyledH2,
	StyledNavText,
	StyledHead,
} from '../../common/StyledComponents';
import checkLogin from '../../common/checkLogin';
import * as apis from '../../apis/notice';

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
	width: 100vw;
	flex-wrap: wrap;
`;

const StyledMoreButton = styled.button`
	display: block;
	margin: 0 auto;
	width: 72px;
	height: 22px;
	border: solid 1.5px #616a76;
`;

interface Props {
	user: any;
	firstNoticesSet: any;
	token: string;
}

const Main: NextPage<Props> = ({ user, firstNoticesSet, token }) => {
	const [page, setPage] = useState(1);
	const [notices, setNotices] = useState(firstNoticesSet);
	const fetchMoreNotices = async () => {
		if (notices.next !== null)
			try {
				const { data } = await apis.fetchNotices(page + 1, token);
				console.log(1111, data.results);
				setNotices((prevNotices: any) => {
					return {
						...data,
						results: [...prevNotices.results, ...data.results],
					};
				});
				setPage(page => {
					return page + 1;
				});
			} catch (error) {
				console.log(error);
				alert(error);
			}
	};
	const onClose = (pk: number) => async () => {
		console.log(token);
		const { data } = await apis.deleteNotice(pk, token);
		console.log(123, data);
	};
	return (
		<StyledMain>
			<Link to="/schedule">
				<StyledPostButton>5</StyledPostButton>
			</Link>
			<StyledHead>
				<StyledNav>
					<Link to="/">
						<StyledHeadLogoWrapper>
							<StyledHeadLogo />
							<StyledHeadName>MASH UP</StyledHeadName>
						</StyledHeadLogoWrapper>
					</Link>
					<StlyedLink to="/">
						<a>
							<StyledNavText white={true}>전체회의 공지</StyledNavText>
						</a>
					</StlyedLink>
					<StlyedLink to="/">
						<a>
							<StyledNavText>팀별 스터디 공지</StyledNavText>
						</a>
					</StlyedLink>
					<StlyedLink to="/">
						<a>
							<StyledNavText>앱프로젝트 공지</StyledNavText>
						</a>
					</StlyedLink>
				</StyledNav>
				<Link to="/">
					<StyledUserInfo>{`${user.userPeriodTeamSet[0].team.name} ${user.name}`}</StyledUserInfo>
				</Link>
			</StyledHead>
			<StyledSubHead>
				<StyledH1>
					매쉬업 <StyledH1B>전체회의 공지</StyledH1B>를 확인하세요.
				</StyledH1>
				<StyledH2>총 10 회의 중 9번 참여</StyledH2>
			</StyledSubHead>
			<StyledCardWrapper>
				{notices.results.map((notice: any) => {
					return <Card key={notice.pk} notice={notice} onClose={onClose(notice.pk)} />;
				})}
			</StyledCardWrapper>
			{!!notices.next && <StyledMoreButton onClick={fetchMoreNotices}>6</StyledMoreButton>}
		</StyledMain>
	);
};

Main.getInitialProps = async ({ res, token }: any) => {
	const user = await checkLogin({ res, token });
	try {
		const { data } = await apis.fetchNotices(1, token);
		return {
			token,
			user,
			firstNoticesSet: data,
		};
	} catch (error) {
		console.log(error);
		return {
			token,
			user,
			firstNoticesSet: {},
		};
	}
};

export default Main;
