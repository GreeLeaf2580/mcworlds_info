const blogPluginExports = require('@docusaurus/plugin-content-blog');

async function blogPluginExtended(context, options) {
  const blogPluginInstance = await blogPluginExports.default(context, options);
  return {
    ...blogPluginInstance,
    async contentLoaded({ content, actions }) {
      // 1. 从 content 中提取出所有独特的作者数据
      const allAuthors = extractAllAuthors(content.blogPosts); 

      // 2. 使用 setGlobalData 将数据注入到全局状态
      // 这样数据会被序列化并包含在静态资源中，客户端可通过 usePluginData 访问
      actions.setGlobalData({ allAuthors }); 

      // 3. 继续执行原始插件的 contentLoaded 逻辑
      await blogPluginInstance.contentLoaded({ content, actions });
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};