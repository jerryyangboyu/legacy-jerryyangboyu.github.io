# JNote 项目
JNote项目始于2019年，当时我在准备CAIE与IGCSE考试，写了很多笔记，写完了之后想要和别人分享，所以在暑期的时候搭建了这个内容分享平台。网站初期的架构分为如下三个部分
```text
yangboyu.net -> 主要站点（目前仅存首页，等得后续维护）
    cloud.yangboyu.net -> 笔记内容浏览网站（已经停运，不再维护）
    dev.yangboyu.net -> 笔记内容编辑网站（已经停运，不再维护）
    portal.yangboyu.net -> 服务器cdn资源管理，由一个开源网络文件服务器软件管理（已经停运，内容等待后续更新）
```

## 历史教学软件项目
从高中至今，我的个人项目主要集中于用于教学和学习相关的软件开发，下面是所有项目的汇总：
### JMind
[JMind](https://yangboyu.net/jmind)（现已不再维护）是一个纯前端项目。他的软件很小，功能非常简陋，只能提供最简单的前端用户交互界面。核心功能依赖了JsMind这个思维导图绘制前端库。这是我的第一个成型的前端项目。开发此项目我研究了百度脑图，angular等源代码，对大型软件的开发有了基础认知。
### JNote Cloud
JNoteCloud(原cloud.yangboyu.net，现已不再维护)提供了编辑笔记，浏览笔记的功能。网站使用Node.JS开发，使用MongoDB作为后端数据库，前端使用Nuxt.JS开发。这是我写的第一个有前后端交互功能的网站。
### My Past Paper
[My Past Paper](https://my-past-paper.vercel.app/) (网站仍在运行，现已不再维护)项目主要提供刷题的功能，用户可以左侧浏览试卷，右侧看试卷答案。试卷资源主要来自gceguide.com.

## 开发中的教学项目
### LogicShark
Github地址：https://github.com/jerryyangboyu/LogicShark
LogicShark是逻辑语言学习工具，他的主要功能是计算逻辑表达式，并绘制逻辑门。他的开发设想包含如下三方面：
- 逻辑解析
- 逻辑推导
- 逻辑可视化

未来进一步的开发计划包括：
- 实现类prolog逻辑语言编译
- 实现逻辑表达式自动推导
- 移植到iOS, ipadOS, MacOS平台

关于项目的可持续性依然待议。

## 未来的项目设想
下面内容仅仅为初步设想，具体细节仍需斟酌
- 算法竞赛平台
- 基于Notion的内容分享平台
    - 整理原来的资料，合并到notion
    - 重新开发前端页面
    - 项目持久化
- 基于GPT-3内容生成API的应用
