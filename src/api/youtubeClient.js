import axios from "axios";
export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_USER_TOKEN },
    });
  }
  async search(params) {
    return this.httpClient.get("search", params);
  }
  async trend_videos(params) {
    return this.httpClient.get("videos", params);
  }
  async channels(params) {
    return this.httpClient.get("channels", params);
  }
}
