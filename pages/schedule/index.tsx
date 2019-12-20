import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';

import {
	StyledHead,
	StyledNav,
	StyledHeadLogoWrapper,
	StyledHeadLogo,
	StyledHeadName,
	StyledUserInfo,
	StyledSubHead,
	StyledH1,
	StyledH2,
} from '../../common/StyledComponents';
import Card from '../../components/Card';
import checkLogin from '../../common/checkLogin';
import * as apis from '../../apis/notice';
import Router from 'next/router';

const { Link } = require('../../routes');

const StyledCardWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

interface Props {
	token: string;
	user: any;
	firstNoticesSet: any;
}

const AddSchedule: NextPage<Props> = ({ user }) => {
	const notice = {
		author: {
			name: '',
		},
		startAt: '',
		duration: '',
		address1: '',
		address2: '',
		description: '',
	};
	const onClose = () => {
		Router.push('/');
	};
	return (
		<div>
			<StyledHead>
				<StyledNav>
					<Link to="/">
						<StyledHeadLogoWrapper>
							<StyledHeadLogo />
							<StyledHeadName>MASH UP</StyledHeadName>
						</StyledHeadLogoWrapper>
					</Link>
				</StyledNav>
				<Link href="/">
					<StyledUserInfo>{`${user.userPeriodTeamSet[0].team.name} ${user.name}`}</StyledUserInfo>
				</Link>
			</StyledHead>
			<StyledSubHead>
				<StyledH1>매쉬업 공지를 작성해주세요.</StyledH1>
				<StyledH2>매쉬업 전체회의/팀스터디/앱프로젝트 중 1가지를 골라 작성해주세요.</StyledH2>
			</StyledSubHead>
			<StyledCardWrapper>
				<Card isNew={true} notice={notice} onClose={onClose} user={user} />
			</StyledCardWrapper>
		</div>
	);
};

export default AddSchedule;

AddSchedule.getInitialProps = async ({ res, token }: any) => {
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
