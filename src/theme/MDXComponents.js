import React from 'react';
// 导入原始 MDX 组件映射
import MDXComponents from '@theme-original/MDXComponents';
// 导入你的 AuthorMention 组件
import AuthorMention from '@site/src/components/AuthorMention';

export default {
  // 保留所有默认的 MDX 组件
  ...MDXComponents,
  // 注册你的自定义组件
  AuthorMention,
};