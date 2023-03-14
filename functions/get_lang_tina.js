import client from "../.tina/__generated__/client";

export const getLangTina = async (locale) => {
  return await client.queries.homepage_texts_fetch({
    relativePath: `home.json`,
    // relativePath: `${locale}_test.json`,
  });
};