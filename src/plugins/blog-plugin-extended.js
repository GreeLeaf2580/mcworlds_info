const blogPluginExports = require('@docusaurus/plugin-content-blog');

async function blogPluginExtended(context, options) {
  const blogPluginInstance = await blogPluginExports.default(context, options);

  return {
    ...blogPluginInstance,
    async contentLoaded({ content, actions }) {
      // 从内容中提取所有作者数据
      const { blogPosts } = content;
      // 注意：这里需要从blogPosts中提取出所有独特的作者信息
      // 具体实现可能需要遍历blogPosts，从每个post的metadata.authors中收集
      // 但鉴于authors.yml是全局的，一个更直接的方式是直接读取并解析该文件
      // 以下为思路示例，实际可能需要使用fs读取并解析YAML
      const allAuthors = {}; // { 'authorId': { name, title, url, ... } }

      // 调用原始插件的 contentLoaded，并传入额外的全局数据
      await blogPluginInstance.contentLoaded({
        content,
        actions: {
          ...actions,
          // 将作者数据设置为全局数据，以便在组件中用 useGlobalData 访问
          setGlobalData: (data) => {
            // 这个data会被合并到全局数据中
            // 你可以在后续的钩子中通过 useGlobalData 访问
          }
        }
      });
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};