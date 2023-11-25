const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  let defaultConfig = await getDefaultConfig(__dirname);
  defaultConfig.resolver.resolverMainFields.unshift("sbmodern");
  defaultConfig.resolver.sourceExts.push("mjs");
  return defaultConfig;
})();

// import { getDefaultConfig } from "expo/metro-config";

// export default async () => {
//   const defaultConfig = await getDefaultConfig(__dirname);

//   return {
//     resolver: {
//       // assetExts: [...defaultConfig.resolver.assetExts, 'db'],
//       sourceExts: [...defaultConfig.resolver.sourceExts, "mjs"],
//       resolverMainFields: [
//         ...defaultConfig.resolver.resolverMainFields,
//         "sbmodern",
//       ],
//     },
//   };
// };
