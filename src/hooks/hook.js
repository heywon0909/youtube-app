export const getVideo = async () => {
  return await fetch(`http://localhost:3000/data/list.json`)
    .then((res) => res.json())
    .then((data) => {
      const { items } = data;
      return items;
    })
    .catch((error) => console.log("error", error));
};

export const getRelatedVideo = async () => {
  return fetch(`http://localhost:3000/data/list.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
      const { items } = data;
      return items;
    })
    .catch((error) => console.log("error", error));
};

export const getSearchVideo = async () => {
  return await fetch(`http://localhost:3000/data/list.json`)
    .then((res) => res.json())
    .then((data) => {
      const { items } = data;
      return items;
    })
    .catch((error) => console.log("error", error));
};
