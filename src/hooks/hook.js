const userToken = process.env.REACT_APP_USER_TOKEN;
export const getVideo = async () => {
  // test
  //   return await fetch(`http://localhost:3000/data/list.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const { items } = data;
  //       return items;
  //     })
  //     .catch((error) => console.log("error", error));
  return await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=BLACKPINK&key=${userToken}`
  )
    .then((res) => res.json())
    .then((data) => {
      const { items } = data;
      return items;
    })
    .catch((error) => console.log("error", error));
};

export const getRelatedVideo = async (videoId) => {
  // test
  //   return fetch(`http://localhost:3000/data/list.json`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data", data);
  //       const { items } = data;
  //       return items;
  //     })
  //     .catch((error) => console.log("error", error));
  return await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${userToken}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
      const { items } = data;
      return items;
    })
    .catch((error) => console.log("error", error));
};

export const getSearchVideo = async (keyword) => {
  // test
  //   return await fetch(`http://localhost:3000/data/list.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const { items } = data;
  //       return items;
  //     })
  //     .catch((error) => console.log("error", error));
  return await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${userToken}`
  )
    .then((res) => res.json())
    .then((data) => {
      const { items } = data;
      return items;
    })
    .catch((error) => console.log("error", error));
};
