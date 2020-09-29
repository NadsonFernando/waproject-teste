import Api from "@services/api";
import ResponseUtil from "@utils/ResponseUtil";

const resource = "/users";

async function find(username) {
  let response = {};

  try {
    response = await Api.get(`${resource}/${username}`);
  } catch (error) {
    response = error.response;
  }

  return ResponseUtil.filter(response);
}

export default { find };
