import axios from "axios";
export default class FakeYoutubeClient {
  async search(params) {
    return params.relatedToVideoid
      ? axios.get(`/data/related.json`)
      : axios.get(`/data/search.json`);
  }
  async trend_videos() {
    return axios.get(`/data/hottrend.json`);
  }
  async channels() {
    return axios.get(`/data/channel.json`);
  }
}
