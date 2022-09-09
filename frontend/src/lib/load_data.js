const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.potterdb.com";

const simpleFetch = async (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((_error) => {
      return {
        hasError: true,
      };
    });
};

export const getBySlug = async (type, slug) => {
  return simpleFetch(`${apiUrl}/v1/${type}/${slug}`);
};

// const defaultQuery = {
//   page: 1,
//   perPage: 20,
//   search: "",
//   orderBy: "",
//   direction: "asc",
// };

export const getAll = async (type, query = defaultQuery) => {
  const { page, perPage, search, orderBy, direction } = query;
  const pageNumber = `page[number]=${page || 1}`;
  const pageSize = `page[size]=${20}`; /*`page[size]=${perPage || 20}`;*/
  // const searchFilter = `filter[name_cont_any]=${search || ""}`;
  // const sort = `sort=${direction === "desc" ? "-" : ""}${orderBy || ""}`;

  return simpleFetch(
    `${apiUrl}/v1/${type}?${pageNumber}&${pageSize}` /*&${searchFilter}&${sort}*/
  );
};
