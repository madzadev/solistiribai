exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-image-appear/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
