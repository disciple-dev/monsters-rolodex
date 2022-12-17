const getData = async <T>(url: string): Promise<T> => {
  return await fetch(url).then((res) => res.json());
};

export { getData };
