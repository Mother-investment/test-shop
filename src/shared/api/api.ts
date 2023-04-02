import axios from 'axios'

export const $api = axios.create({
	baseURL: __API__
})

export const $postApi = axios.create({
	baseURL: __POSTAPI__
})