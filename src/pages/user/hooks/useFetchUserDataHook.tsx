import React, { useEffect, useState } from "react";
import { getUserDataAPI } from "../api";
import { setToLocalStorage } from "@/src/utils/localstorage-helper";

const useFetchUserDataHook = () => {
  const [userData, setUserData] = useState<any>({});

  const handleFetchUserData = async () => {
    await getUserDataAPI()
      .then((res: any) => {
        setUserData(res.data?.results[0]);
        setToLocalStorage("randomUserData", res.data?.results[0]);
      })
      .catch((error: any) => {
        // handle error by showing toast
      });
  };

  useEffect(() => {
    handleFetchUserData();
  }, []);

  return { userData, handleFetchUserData };
};

export default useFetchUserDataHook;
