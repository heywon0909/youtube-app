import axios from "axios";
export default class FakeYoutueClient {
  async search() {
    return axios.get(`/data/search.json`);
  }
  async trend_videos() {
    return axios.get(`/data/hottrend.json`);
  }
}
