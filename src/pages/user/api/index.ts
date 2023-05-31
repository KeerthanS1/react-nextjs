import { noAuthGet } from "@/src/config/axios-client";

export const getUserDataAPI = async () => {
  return new Promise((resolve, reject) => {
    noAuthGet("", {})
      .then((res) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
