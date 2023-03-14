import { defineConfig } from "tinacms";
import { home } from "./custom_schemas/home";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: "fea8b261-1746-4548-ab9b-d8a9aeb5b1d0", // Get this from tina.io
  token: "793ffa1a5b521052238c9d1ebf32837c2e43a200", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
     // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "assets/images",
    },
  },
  schema: {
    collections: [
      home
    ],
  },
});
