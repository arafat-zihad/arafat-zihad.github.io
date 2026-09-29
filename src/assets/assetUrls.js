const bundledAssets = {
  ...import.meta.glob("./icons/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
  ...import.meta.glob("./images/projects/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
};

const assetsByName = Object.fromEntries(
  Object.entries(bundledAssets).map(([path, url]) => [
    path.split("/").pop(),
    url,
  ]),
);

export const resolveAssetUrl = (path) =>
  assetsByName[path.split("/").pop()] ?? path;
