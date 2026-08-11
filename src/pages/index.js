import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        {/* 新增：头像图片 */}
        <img
          src="/img/logo.jpg"
          alt="个人头像"
          className={styles.heroAvatar}
        />
        <h1 className={styles.title}>o绿叶o</h1>
        <p className={styles.subtitle}>
          原多玩盒子开发者，现网易我的世界独立开发者
        </p>
        <p className={styles.description}>
          致力于高质量的免费地图，专注于跑酷和小游戏地图的开发，希望带给玩家更多的欢乐，请多多关照:)
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/blog">
            探索本站
          </Link>
        </div>
      </div>
    </header>
  );
}

// WorkSection, WorkCard 以及 Home 组件的其余部分请直接使用
// 之前我提供给你的完整代码，这里为了简洁不重复列出。
// 请将上述 HomepageHeader 替换到你的 Home 组件中。

function WorkSection({ title, subtitle, children }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{title}</h2>
        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        <div className={styles.workGrid}>
          {children}
        </div>
      </div>
    </section>
  );
}

// ... 其他组件代码 ...

function WorkCard({ title, subtitle, description, tags, children, to="/blog" }) {
  return (
    // 使用 <Link> 组件包裹整个卡片，使其成为一个可点击的链接
    <Link to={to} className={styles.cardLink}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
        <div className={styles.cardContent}>
          {description && <p>{description}</p>}
          {children}
        </div>
        {tags && (
          <div className={styles.cardTags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

// ... Home 组件及其他代码 ...

export default function Home() {
  return (
    <Layout
      title="个人主页"
      description="我的世界地图作者的个人作品集"
    >
      <HomepageHeader />
      
      <main>
        {/* 作品集 - 绿尘药水游戏系列 */}
        <WorkSection title="作品博客" subtitle="主创和参与制作的MCBE地图">
          <WorkCard 
            title="触发" 
            subtitle="Trigger 递进式创新解谜的基岩版地图，完全支持多人合作游玩"
            description="主线分为A-F六种类型关卡，每种类型1-3难度，主线X为混合玩法。包含纪念品和隐藏关。"
            tags={['二字十部曲', '小游戏', '解谜']}
            to="/blog/trigger"
          />
          <WorkCard 
            title="冒险小世界：剑之试炼" 
            subtitle="欢迎你来参观！这是一张适用于基岩版 1.21.0+的PVE地图"
            description="拥有精美的建筑；全程无命令方块，使用函数驱动；拥有药水、武器等多种自定义物品；各种怪物都进行了不同程度的修改，更具有趣味性和挑战性；可以单人或多人游玩，动态难度会根据游玩人数变化。"
            tags={['PVE', '参与建筑']}
            to="/blog/hole"
          />
          <WorkCard 
            title="随波逐流" 
            subtitle="With Water由水下呼吸效果制成的 寻找出口的解谜，带一些跑酷，为一次性游玩地图"
            description="在水下有着水下呼吸效果的限时内找到出口，混合着解谜元素和跑酷元素。游玩时间约半小时。"
            tags={['“绿尘”药水系列', '解谜', '跑酷']}
            to="/blog/withwater"
          />
          <WorkCard 
            title="升空挑战" 
            subtitle="Lift Challenge 由漂浮和缓降效果制成"
            description="在有限的漂浮效果时间内到达终点 Coming S∞n...."
            tags={['“绿尘”药水系列', '小游戏']}
            to="/blog/liftchallenge"
          />
        </WorkSection>

        {/* 技术文档 */}
        <WorkSection title="技术文档" subtitle="存放一些“数据科学与大数据技术”专业相关的文档">
          <WorkCard 
            title="SQLAlchemy" 
            subtitle="连接数据库的ORM模型"
            description="SQLAlchemy SQL 工具包和对象关系映射器是一套全面的工具，用于处理数据库和 Python。它有几个不同的功能领域，可以单独使用或组合使用。"
            tags={['数据库', 'Python']}
            to="/docs"
          />
        </WorkSection>

        {/* 作品集 - 时光探者系列 */}
{/*         
        <WorkSection title="个人作品集" subtitle="时光探者系列 - 跑酷地图">
          {[
            { title: '征途', desc: '总系列第三部 · 场景：沙漠、山崖、蘑菇、花海、矿洞、深海', time: '10min' },
            { title: '重启', desc: '总系列第四部 · 场景：秋天、雪地、溪流、火山、樱花、沙滩、墓地、时雨', time: '15min' },
            { title: '梦境', desc: '总系列第五部 · 场景：银杏、荒漠、热带草原、沼泽、竹林、田野、黑白、断层、黑暗', time: '15min' },
            { title: '涟漪', desc: '总系列第六部 · 场景：天空、瀑布、溪流、湖泊、深海、溶洞、温泉、雪地、冰河、极地', time: '15min' },
            { title: '炙热', desc: '总系列第七部 · 场景：营地、窑洞、炼钢厂、战争、水晶、火山、地狱', time: '10min' },
          ].map((item) => (
            <WorkCard 
              key={item.title}
              title={item.title} 
              subtitle={`总系列第${['三','四','五','六','七'][['征途','重启','梦境','涟漪','炙热'].indexOf(item.title)]}部`}
              description={item.desc}
              tags={['时光探者', '跑酷', `约${item.time}`]}
            />
          ))}
        </WorkSection> */}

        {/* 联系与留言区 */}
        {/*
        <section className={styles.contactSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>给我留言</h2>
            <p>如果你遇到bug或者有好的建议，可以在这里快捷留言</p>
            <div className={styles.contactRow}>
              <div className={styles.contactInfo}>
                <h3>联系我</h3>
                <p>如果有好的建议或者是有bug，欢迎联系我</p>
                <ul>
                  <li>📧 1902917631@qq.com</li>
                </ul>
              </div>
              <div className={styles.contactMessage}>

                <Link className="button button--secondary button--lg" to="mailto:1902917631@qq.com">
                  发送邮件
                </Link>
              </div>
            </div>
          </div>
        </section>*/}
      </main>
    </Layout>
  );
}