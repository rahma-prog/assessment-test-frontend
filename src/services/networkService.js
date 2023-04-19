import { toast } from "react-toastify";
import httpClient from "./utils/httpClient";

class NetworkService {
  async sendHttpRequest({ url, method, body, headers, params }) {
    try {
      const response = await httpClient({
        method,
        url,
        params: params || null,
        data: body || null,
        headers,
      });

      return this.handleSuccessResponse(response);
    } catch (err) {
      this.handleErrorResponse(err);
      throw err;
    }
  }

  handleSuccessResponse(response) {
    console.log("API RESPONSE ::::::::", response);
    return response?.data;
  }

  handleErrorResponse(err) {
    console.log("API ERROR ::::::::", err);
    if (err?.response?.data) {
      const { data } = err.response;

      if (data.message) {
        toast.error(
          typeof data.message === "string" ? data.message : data.message[0]
        );

        return;
      }
      toast.error("Unexpected error");
    }
  }

  isAuthenticated() {
    return !!localStorage.getItem("token");
  }
}

const networkService = new NetworkService();

export default networkService;
