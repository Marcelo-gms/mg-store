export const getData = async (endPoint, method = "GET") => {
  let baseUrl = `https://fakestoreapi.com/${endPoint}`;

  const res = await fetch(baseUrl);
  const resJson = await res.json();
  const data = await resJson;
  return data
  ;
};
