import React, { useCallback, useState } from 'react';
import Router from 'next/router';

import {
	StyledLogin,
	StyledWrapper,
	StyledLogoWrapper,
	StyledLogo,
	StyledName,
	StyledTitle,
	StyledFomr,
	StyledInputWrapper,
	StyledInput,
	StlyedButtonWrapper,
	StyledButton,
} from '../../common/StyledComponents';
import * as apis from '../../apis/users';

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const onSubmit = useCallback(
		async event => {
			event.preventDefault();
			event.stopPropagation();
			try {
				const { data } = await apis.login(email, password);
				const { user, key } = data;
				document.cookie = `token=${key}; path=/`;
				document.cookie = `pk=${user.pk}; path=/`;
				Router.push('/');
			} catch (error) {
				console.log(error);
				alert('입력하신 아이디/비밀번호에 해당하는 계정이 없습니다.');
			}
		},
		[email, password],
	);
	const onChangeEmail = useCallback(event => {
		setEmail(event.target.value);
	}, []);
	const onChangePassword = useCallback(event => {
		setPassword(event.target.value);
	}, []);
	return (
		<StyledLogin>
			<StyledWrapper>
				<StyledLogoWrapper>
					<StyledLogo />
				</StyledLogoWrapper>
				<StyledName>MASH UP</StyledName>
				<StyledTitle>로그인</StyledTitle>
				<StyledFomr onSubmit={onSubmit}>
					<StyledInputWrapper>
						<StyledInput type="email" placeholder="이메일을 입력해주세요" value={email} onChange={onChangeEmail} />
					</StyledInputWrapper>
					<StyledInputWrapper>
						<StyledInput
							type="password"
							placeholder="비밀번호를 입력해주세요"
							value={password}
							onChange={onChangePassword}
						/>
					</StyledInputWrapper>
					<StlyedButtonWrapper>
						<StyledButton type="submit">로그인하기</StyledButton>
					</StlyedButtonWrapper>
				</StyledFomr>
				{/* <StyledDescriptionWrapper>
          <StyledDescription>
            아이디가 없는 매쉬업 회원이라면?
          </StyledDescription>
          <StyledLink to='/authentication'>
            인증 및 회원가입
          </StyledLink>
        </StyledDescriptionWrapper> */}
			</StyledWrapper>
		</StyledLogin>
	);
};

export default LoginPage;
