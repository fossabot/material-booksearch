/*
  Takes the title of Book, and calls DuckDuckGo API for proper description
*/
export const getDescriptionFromAPI = async (title) => {
  const parsedTitle = title.split(' ').join('+');
  const noDescriptionFound = 'No description found for this title. Please Search on web for more details.';
  try {
    const apiResponseObject = await fetch(
      `https://api.duckduckgo.com/?q=${parsedTitle}&format=json`,
    );

    const apiResponse = await apiResponseObject.json();

    if (apiResponseObject.status >= 400) {
      return noDescriptionFound;
    }

    const description = apiResponse.Abstract || apiResponse.AbstractText || noDescriptionFound;

    return description === noDescriptionFound
      ? noDescriptionFound
      : `By DuckDuckGo API: ${description}`;
  } catch (e) {
    return noDescriptionFound;
  }
};

/*
  Gives the Search params Value, pass window.location.search
  For url: localhost:3000?a=1&b=2
  returns { a: 1, b: 2 }
*/
export const getParamsValue = (url) => {
  if (!url) {
    return {};
  }
  const searchParams = new URLSearchParams(url);
  const params = [...searchParams.entries()];
  const allParamsObject = params.reduce(
    (allParam, [key, value]) => ({
      ...allParam,
      [key]: value,
    }),
    {},
  );
  return allParamsObject;
};
