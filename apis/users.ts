import Axios from 'axios';

// https://mashup.lhy.kr/api/notices/?page=1

export const login = (eamil: string, password: string) =>
	Axios.post('https://mashup.lhy.kr/api/members/auth-token/', {
		username: eamil,
		eamil,
		password,
	});
