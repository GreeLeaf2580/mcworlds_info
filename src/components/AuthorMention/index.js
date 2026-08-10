import React from 'react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';

export default function AuthorMention({ 
  authorKey, 
  showAvatar = false,  // 是否显示头像
  showTitle = false,   // 是否显示头衔
}) {
  // 获取当前博客文章的数据
  const { metadata } = useBlogPost();
  
  // 从文章 metadata 中提取作者数据
  // authors 是一个数组，每个元素包含 id, name, title, url, image_url 等
  const authors = metadata.authors || [];
  
  // 根据传入的 authorKey 查找对应的作者
  const author = authors.find(a => a.key === authorKey);
  
  if (!author) {
    return <span style={{ color: 'var(--ifm-color-danger)' }}>
      @{authorKey} (未在本文中找到，请注意key的大小写)
    </span>;
  }
  
  // 如果有 author 的 URL，使用它；否则使用默认的作者页面路径
  const authorUrl = author.page.permalink;
  
  return (
    <a 
      href={authorUrl}
      style={{ 
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontWeight: 'bold',
        color: 'var(--ifm-color-primary)',
        textDecoration: 'none',
      }}
    >
      {showAvatar && author.image_url && (
        <img 
          src={author.image_url} 
          alt={author.name}
          style={{ 
            width: '24px', 
            height: '24px', 
            borderRadius: '50%',
            verticalAlign: 'middle',
          }}
        />
      )}
      <span>@{author.name}</span>
      {showTitle && author.title && (
        <span style={{ fontSize: '0.85em', opacity: 0.7 }}>
          ({author.title})
        </span>
      )}
    </a>
  );
}