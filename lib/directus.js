import { createDirectus, graphql } from "@directus/sdk";
const directus = createDirectus(process.env.DIRECTUS_APP_URL).with(graphql());
export default  directus
