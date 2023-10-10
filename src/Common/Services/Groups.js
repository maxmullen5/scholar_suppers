const axios = window.axios;
const url =
  "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

export const createGroup = (id, groupName, password) => {
  return axios({
    method: "post",
    url: `${url}/users`,
    data: {
      id,
      groupName,
      password
    },
    headers: {
      "Content-Type": "application/json"
    },
    json: true
  })
    .then((response) => {
      console.log("POST response: ", response);
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });
};

export const getAllGroups = () => {
  return (
    axios
      // .get(`${url}/users`)
      .get("./Services/groups.json")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log("GET Error: ", err);
      })
  );
};
