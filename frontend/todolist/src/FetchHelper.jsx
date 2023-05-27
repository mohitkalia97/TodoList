import axios from "axios";
import PropTypes from "prop-types";

export default function FetchHelper({ value, url, method }) {
  return new Promise((resolve, reject) => {
    let requestConfig = {};

    if (method === "GET") {
      requestConfig = { method: "GET", url };
    } else if (method === "POST") {
      requestConfig = { method: "POST", url, data: { text: value, todoStatus: "OPEN" } };
    } else if (method === "PUT") {
      requestConfig = { method: "PUT", url, data: { text: value, todoStatus: "OPEN" } };
    } else if (method === "DELETE") {
      requestConfig = { method: "DELETE", url };
    }

    axios(requestConfig)
      .then((response) => {
        console.log("Request successful:", response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Request failed:", error);
        reject(error);
      });
  });
}

FetchHelper.propTypes = {
  value: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.oneOf(["GET", "POST", "PUT", "DELETE"]).isRequired,
};
