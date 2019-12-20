import Axios from 'axios';

export const fetchNotices = (page: number, token: string, type: string = 'all') => {
	return Axios.get(`https://mashup.lhy.kr/api/notices/?page=${page}&page_size=${3}&type=${type}`, {
		headers: { Authorization: `Token ${token}` },
	});
};

export const deleteNotice = (pk: number, token: string) => {
	return Axios.delete(`https://mashup.lhy.kr/api/notices/${pk}/`, {
		headers: { Authorization: `Token ${token}` },
	});
};
