import _ from "underscore";
import EnumStatusCode from "@enums/EnumStatusCode";

function getStatusCode(code) {
  return _.find(EnumStatusCode, (statusCode) => {
    return _.isEqual(statusCode.code, code);
  });
}

export default {
  filter(response) {
    const { code, message } = getStatusCode(response.status);

    let filtered = {
      code,
      message,
      isSuccess: false,
      data: null,
    };

    switch (code) {
      case EnumStatusCode.OK.code:
        filtered.isSuccess = true;
        filtered.data = response.data;
        break;
      case EnumStatusCode.CREATED.code:
        filtered.isSuccess = true;
        filtered.data = response.body.postResponse;
        break;
      case EnumStatusCode.NOT_CONTENT.code:
        filtered.isSuccess = true;
        break;
      case EnumStatusCode.UNAUTHORIZED.code:
        filtered.isAuthorized = false;
        filtered.data = response.data;
        break;
      case EnumStatusCode.BAD_REQUEST.code:
        filtered.data = response.data;
        break;
      default:
    }

    return filtered;
  },
};
