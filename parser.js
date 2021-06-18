const axios = require("axios");
const { convert } = require("html-to-text");

const config = {
  method: "get",
  url: "http://localhost:3000/?url=https://www.zerobounce.net",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log("response: ", response);
    const HTML = JSON.stringify(response.data);
    const text = convert(HTML, {
      wordwrap: 130,
    });
    console.log("page text", text);
  })
  .catch(function (error) {
    console.log(error);
  });
