import { StackContext, AstroSite } from "sst/constructs";

export function WebsiteStack({ stack }: StackContext) {
  const site = new AstroSite(stack, "personal-site", {
    path: "frontend",
    customDomain: "shreyaslad.com",
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
