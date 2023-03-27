import axios from 'axios'

export default class FakeYoutube{
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'http://localhost:3000',
            params: { key: process.env.REACT_APP_USER_TOKEN }
        });
    }

    async search(keyword) {
        return keyword ? await this.#searchByKeyword(keyword) : await this.#mostPopular()
    }
    async #searchByKeyword() {
        return axios.get(`/data/search.json`)
            .then((res) => res.data.items)
            .then(items=>items.map(item=>({...item,id:item.id.videoId})))
    }
    async #mostPopular() {
        return axios.get(`/data/hottrend.json`)
            .then((res) => res.data.items)
            .then(items=>items.map(item=>({...item,id:item.id.videoId})))
    }

}