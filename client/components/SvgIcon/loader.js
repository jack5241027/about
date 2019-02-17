export const svgInlineLoader = require.context('./rawIcons');

export const icons = svgInlineLoader.keys();
