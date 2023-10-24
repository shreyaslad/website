import { SSTConfig } from "sst";
import { WebsiteStack } from "./stacks/WebsiteStack";

export default {
  config(_input) {
    return {
      name: "website",
      region: "us-west-2",
    };
  },
  stacks(app) {
    app.stack(WebsiteStack);
  },
} satisfies SSTConfig;
