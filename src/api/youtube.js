import axios from 'axios';
const userToken = process.env.REACT_APP_USER_TOKEN;

export default class Youtube{
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params:{key:userToken}
    })
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async #searchByKeyword(keyword) {
    return this.httpClient.get(`/search`, {
      params: {
        part: 'snippet',
        maxResults: 25,
        q:keyword
      }
    }).then((res) => res.data.items)
    
  }

  async #mostPopular() {
    return this.httpClient.get(`/videos`, {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25
      }
    }).then(res=>res.data.items)
  }
}




// export const getVideo = async () => {
//   // test
//   return await axios.get(`http://localhost:3000/data/hottrend.json`)
//     .then((res) => res.data.items)
//     .catch((error) => console.log("error", error));
//   // return await fetch(
//   //   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${userToken}`
//   // )
//   //   .then((res) => res.json())
//   //   .then((data) => {
//   //     const { items } = data;
//   //     return items;
//   //   })
//   //   .catch((error) => console.log("error", error));
// };

export const getRelatedVideo = async (videoId) => {
  // test
  return axios.get(`http://localhost:3000/data/list.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.data.items)
    .catch((error) => console.log("error", error));
  // return await fetch(
  //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=25&key=${userToken}`,
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   }
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("data", data);
  //     const { items } = data;
  //     return items;
  //   })
  //   .catch((error) => console.log("error", error));
};

// export const getSearchVideo = async (keyword) => {
//   // test
//   return await axios.get(`http://localhost:3000/data/list.json`)
//     .then((res) => res.data.items)
//     .catch((error) => console.log("error", error));
//   // return await fetch(
//   //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${userToken}`
//   // )
//   //   .then((res) => res.json())
//   //   .then((data) => {
//   //     const { items } = data;
//   //     return items;
//   //   })
//   //   .catch((error) => console.log("error", error));
// };
