# React&TS项目模板

## 项目说明

### 一、安装、运行

#### 1. 开发时：

- 安装开发环境：

  `yarn` or `npm install`

- 启动开发环境：

  `npm dev` or `yarn dev`

#### 2. 发布生产：

- build 构建打包文件：`yarn build` or `npm run build`

- 发布时请使用 `yarn release` or `npm run release`

### 二、关于 git、代码格式化等规范

#### 1. git 使用规范

有问题请在 issue 面板中记录

#### 创建分支须知

- dev 开发分支，较为稳定的开发分支（用于部署到预发环境，方便进行线上测试），后续功能分支 feat-xx 合并至 dev 需要确保自测 ok；
- master 稳定分支，用于部署到正式环境（进行上线操作），dev 分支测试稳定后方可合并至 master 分支；
- feat-xxx 开发新功能请从 dev 拉新分支（创建功能分支），并经常保持拉取同步（同步请使用 git rebase）。（分支命名：feat-xxx/fix-xxx，xxx 为数字）
- 功能分支开发完成后，请尽可能在本地进行自测，自测 ok 后才可以合并至 dev 分支；
- dev 和 master 分支禁止强推，尽可能走线上请求合并操作流程，避免覆盖的他人的新功能代码（备注：dev 分支同步 master 最新代码时允许强推）；

#### 关于线上 bug 修复：线上发现 bug 后，可以按以下流程进行操作：

1. 在 master 分支创建 bug 分支（分支命名：bug-xxx，xxx 为数字，同功能分支命名）；
2. 修复 bug，本地自测 ok 后方可提交（提交前请先进行 build 构建编译操作）合并至 master，master 进行上线操作；
3. dev 分支同步 master 的最新代码；

##### git 提交信息约定

1. 本工程使用 standard-version 管理 git 提交记录自动生成 Changelog，所以 git commit message 需要遵循一定规范[the convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)。

   提交消息格式：每个提交消息由 header ，body 和 footer 组成。

   header 具有特殊格式，包括类型（type），范围（scope）和主题（subject）：

   ```
   <type>(<scope>): <subject>
   <BLANK LINE>
   <body>
   <BLANK LINE>
   <footer>

   header 是必须的，而 scope 是可选的。
   提交消息的任何行都不能超过 100 个字符！这允许在 GitHub 以及各种 git 工具中更容易阅读消息。
   页脚应包含对问题的结束引用（如果有）。
   ```

例子：

```
   feat(编辑器): 完成前端实时缓存功能开发

   主要修改内容：widgetEditor 。。。
```

##### commit message 类型

必须是以下之一：

- feat：新功能开发
- fix：功能优化、页面样式重构等
- bug：用于修复 bug 的临时分支
- build：影响构建系统或外部依赖项的更改（示例范围：gulp，broccoli，npm）
- refactor：代码更改既不修复错误也不添加功能
- style：不影响代码含义的更改（空格，格式，缺少分号等）
- ci：对 CI 配置文件和脚本的更改（示例范围：Travis，Circle，BrowserStack，SauceLabs）
- docs：文档只会更改
- perf：改进性能的代码更改
- test：添加缺失测试或更正现有测试

#### 2. 代码格式化

    统一使用 [prettier](https://prettier.io/) 格式化代码，可安装对应开发工具的插件。_**不要自己修改格式化配置文件**_

#### 3. 系统样式使用注意事项

    src/assets/scss/mixin.scss: 用于放置 sass 的mixin、function 等，可以在任何地方引入，最后只会生成使用到的相关 css 代码；
    src/assets/scss/common.scss: 用于放置 sass 的变量，可以在任何地方引入；
    src/assets/css/reset.css: 用于重置系统默认样式的 css 代码，以及存放常用的通用 css 代码，仅在一级页面引入，避免组件内引用，以免出现重新的 css 代码；
