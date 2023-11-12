import { CodegenConfig } from "@graphql-codegen/cli";
import { createContext } from "./src/context";

const config: CodegenConfig = {
  schema: "./*.graphql",
  generates: {
    "./src/__generated__/resolvers-types.ts": {
      config: {
        federation: true,
        useIndexSignature: true,
        //contextType: createContext,
        
      },
      plugins: ["typescript","typescript-resolvers"]
    },
  },
};

export default config;