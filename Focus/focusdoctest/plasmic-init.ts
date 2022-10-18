import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import TokenDocumentation  from "../Sync/components/TokenDocumentation"

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "5qqynfEyE1GRjXiSU2SzXg",
      token: "2lAamrbG7UGR5Dtl0mZnXu5NMGWcQWUYSmVQUUA8kHXH5Rgf1mK98YqwI7M8C0UgvTuswvOXBPt2BRKpQ",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

PLASMIC.registerComponent(TokenDocumentation, {
  name: 'TokenDocumentation',
  props: {
    children: 'slot',
    color: 'string'
  }
});