export const setToLocalStorage = (itemKey: string, value: any) => {
  const data: string | any = JSON.stringify(value);
  localStorage.setItem(itemKey, data);
};

export const getFromLocalStorage = (itemKey: string) => {
  const localData: string | any = localStorage.getItem(itemKey);
  const parsedData = JSON.parse(localData);
  return parsedData;
};
