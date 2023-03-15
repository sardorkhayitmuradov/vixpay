import client from "../.tina/__generated__/client";

export const getLangTina = async (locale) => {
  return await client.queries.home({
    relativePath: `home.json`,
    // relativePath: `${locale}_test.json`,
  });
};