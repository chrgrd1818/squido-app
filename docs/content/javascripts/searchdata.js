var data = [{"title":"Hello World ","permalink":"hello-world","body":"E\nlalala\nLorem ipsum sjgsj\n\nkkshfwef\ndfjkenoce\nckncdanc\n\nhshsldjfsc\nLoem ipsum jkafhkjhfekf\n\njefejshfw\ndsjkfdsnfsdln\nfdksndskjnsdj\n\n\nehfjkfkjafnkfc\n\n"},{"title":"Getting started Yesaaaaa","permalink":"getting-started","body":"\nWhat is squido XXXx?\nsquido is a dead simple static website builder which can be hosted anywhere for super fast websites and very little effort.\nThe idea is to be a no-code setup and have everything you need to run and host a website. You simply do the writing and customization of style and layout.\nInstallation\nSimply install the squido cli module globally in order to build and manage your static site.\nFrom Github (preferred for latest version)\n$ npm i -g https://github.com/mrvautin/squido.git\n\nFrom npm\n$ npm install -g squido\n\nWith Yarn\n$ yarn global add squido\n\nStart from default blog setup\n\nWarning: This will overwrite any existing content you've created\n\nMake your squido website directory:\n$ mkdir my-squido-website\n\nEnter your new squido website directory:\n$ cd my-squido-website\n\nSetup a new squido website from defaults\n$ squido new\n\nStart from scratch\nMake your squido website directory:\n$ mkdir my-squido-website\n\nEnter your new squido website directory:\n$ cd my-squido-website\n\nGet started building your squido website structure.\nStart from template\nThe example we will use below is our blog example. There is also a documentation website example you can use.\n$ git clone https://github.com/mrvautin/squido-blog-example my-squido-website\n\nReplace my-squido-website with your new website directory name\nEnter your new squido website directory:\n$ cd my-squido-website\n\nRun the following command to build, clean, serve and watch for changes:\n$ squido serve -b -w -c\n\nYou can then visit your website here:\nhttp://localhost:4965\n\n\nClean = removes everything in your /build directory.\n\n\nServe = starts a web server so you can view your website.\n\nWithout Git\nWhilst it's best and easiest (depending on the user) to use squido with Git to manage deployment and source control. If you don't want to use Git you can use our Post Build tasks to easily deploy and manage your website.\nCreate Git repository\n\nCreate repository:\n\n\n\nSet the repository name:\n\n\n\nSet public/private:\n\n\n\nFinish creating the repository:\n\n\n\nAdd your new repository to your git remotes:\n\n$ git remote add origin https://github.com/user/repo.git\n\n\nCheck remote is correctly added:\n\n$ git remote -v\n# Verify new remote\n&gt; origin  https://github.com/user/repo.git (fetch)\n&gt; origin  https://github.com/user/repo.git (push)\n\n\nCreate your first post: /source/posts/hello-world.markdown\n\n---\ntitle: Hello World\npermalink: hello-world\ndescription: Hello World\ndate: &#x27;2021-03-10 01:59:00&#x27;\n---\n\n\nAdd your new files to first commit:\n\n$ git add .\n\n\nCommit your files/changes:\n\n$ git commit -m &quot;First commit&quot;\n\n\nPush your changes to your repository:\n\n$ git push\n\nSetup the deploy/hosting.\nDemos\nBlog style: https://blog.squido.org\nDocumentation style: This website\nTraditional website: https://squido.org\n"},{"title":"Structure","permalink":"structure","body":"You can start by grabbing everything in the /source directory of here.\nThe structure will look something like:\n\nThe /&lt;source_dir&gt; directory is the default directory for all the source files. You can change by adding another directory in the sourceDir of the config.js file.\n\n\n\nFile name\nUsage\n\n\n\n\nindex.hbs\nThe root of your website. The first page which will be rendered.\n\n\npost.hbs\nWill render the contents of the .markdown files in /&lt;source_dir&gt;/posts\n\n\npage.hbs\nDisplayed at /page/x for the pagination of posts\n\n\ntag.hbs\nDisplayed at /tag/x for the collection of posts by tag\n\n\n\nYour posts go in the /&lt;source_dir&gt;/posts directory. You will have .markdown files for each post/page you want.\nThe content directory contains the files used for your website. Eg: Stylesheets, images, javascript files etc.\n"},{"title":"Usage / Commands","permalink":"usage-commands","body":"The CLI comes with a few commands.\nUsage: cli [options] [command]\n\nOptions:\n  -V, --version    output the version number\n  -h, --help       output usage information\n\nCommands:\n  build [options]  Builds your website\n  clean            Clean your website build\n  serve [options]  Serves website\n\nBuild command\nThe build command has the following options:\nUsage: build [options]\n\nBuilds your website\n\nOptions:\n  -c --clean  Cleans build directory\n  -h, --help  output usage information\n\nImport command\nThe import command allows you to import content from external sources. It has the following options:\nUsage: import [options]\n\nImport from external sources\n\nOptions:\n  -f, --file &lt;path&gt;  Specify file to import\n  -t, --type &lt;type&gt;  Specify the type of file to import. Eg: wordpress or ghost\n  -h, --help         output usage information\n\nClean command\nThe clean command has the following options:\nUsage: clean [options]\n\nClean your website build\n\nOptions:\n  -h, --help  output usage information\n\nServe command\nThe serve command has the following options:\nUsage: serve [options]\n\nServes website\n\nOptions:\n  -w --watch  Watches for changes\n  -b --build  Builds on start\n  -c --clean  Cleans build directory\n  -h, --help  output usage information\n\nNew command\nThis command sets up a new website from our blog template.\n\nWarning: This will overwrite any existing content you've created\n\nThe new command has the following options:\nUsage: new [options]\n\nSets up a new website\n\nOptions:\n  -h, --help  output usage information\n\n"},{"title":"Configuration","permalink":"configuration","body":"An example config can be seen below. You can see that you can specify different values for different environments you run. development and production are examples but they need to match up with whatever NODE_ENV is set. If one is not set, the default is development.\nconst config = {\n    development: {\n        name: &#x27;squido&#x27;,\n        description: &#x27;This is the blog description&#x27;,\n        twitterHandle: &#x27;@mrvautin&#x27;,\n        baseUrl: &#x27;http://localhost:4965&#x27;,\n        sourcesExt: &#x27;markdown&#x27;,\n        templateEngine: &#x27;hbs&#x27;,\n        templateConfig: {},\n        sourceDir: &#x27;source&#x27;,\n        buildDir: &#x27;build&#x27;,\n        summaryLength: 250,\n        port: 4965,\n        pagination: true,\n        postPerPage: 8\n    },\n    production: {\n        name: &#x27;squido&#x27;,\n        description: &#x27;This is the blog description&#x27;,\n        twitterHandle: &#x27;@mrvautin&#x27;,\n        baseUrl: &#x27;http://example.com&#x27;,\n        sourcesExt: &#x27;markdown&#x27;,\n        templateEngine: &#x27;hbs&#x27;,\n        templateConfig: {},\n        sourceDir: &#x27;source&#x27;,\n        buildDir: &#x27;build&#x27;,\n        summaryLength: 250,\n        port: 4965,\n        pagination: true,\n        postPerPage: 8,\n        postBuild: [\n            {\n                name: &#x27;zip&#x27;,\n                options: {}\n            }\n        ]\n    }\n};\n\nmodule.exports = config;\n\nThe configuration options are self explanatory. You can use any of the config in your template files using {{config.&lt;option&gt;}}. Eg: For example {{config.baseUrl}}.\nThis is a static website so the port is used for spinning up a Web Server for development.\nThe templateEngine config allows for the setting of which template engine to use - either: hbs or ejs is allowed. The templateConfig object allows for the passing of configurations and is used when ejs is set for the templateEngine. See here for available ejs options.\nThe postBuild array is similar to the plugins which allow you to specify tasks which run after the build is complete. The above configuration runs the zip task which is included in squido core which will zip up your build folder into a zip here: /build/build.zip. You may also use this postBuild task in conjunction with another task to push your website to your hosting provider in Zip format rather than using Git.\n"},{"title":"Posts","permalink":"posts","body":"Posts are essentially pages or blog posts or whatever you like. The content of the post/page is contained in markdown files within the /source/posts folder. The post markdown or contents is rendered using the post.hbs template file. You can edit this any which way your want. See templates for more information.\nPosts have a meta data component at the top of the file which directs how the file is built. The meta data is yaml formatted and sits between two --- tags. Eg:\n---\ntitle: Caede virides oculos armentis\npermalink: caede-virides-oculos-armentis\ndescription: Caede virides oculos armentis\ndate: &#x27;2021-03-11 19:17:00&#x27;\ntemplate: post.hbs\nignore: true\nhidden: false\ntags: \n  - alter\n  - tradere\n---\n\nYou can add any data values your like but the example layouts uses the title and description for SEO for page title.\nNew meta data values can be access in the layouts using {{meta.&lt;new value&gt;}}.\nThe permalink is required. Its used to build the URL for your website: Eg. The above will output a post at: https://example.com/caede-virides-oculos-armentis\nThe visible and hidden are optional tags for controlling the visibility of posts. Defaults is &quot;true&quot; or visible.\n\nvisible: If set to false, the post will not be in the pagination and won't show on the index page.\nhidden: If set to true, the post will not be in the sitemap and RSS feeds.\n\nTemplate file\nThe default template file name for posts is post.hbs but this can be overwritten per post by adding a template meta value to your post. Eg:\n---\ntemplate: template-name.hbs\n---\n\n"},{"title":"Markdown","permalink":"markdown","body":"squido uses CommonMark spec to process the markdown formatted posts.\nA quick syntax summary to get your started:\n\n\n\nType\nRenders\n\n\n\n\nItalic or _Italic_\nItalic\n\n\n*Bold* or _Bold_\nBold\n\n\n# Heading 1\nHeading 1\n\n\n# Heading 2\nHeading 2\n\n\n# Heading 3\nHeading 3\n\n\n[Link](https://a.com)\nLink\n\n\n[Image](https://url/a.png)\n\n\n\n&gt; Blockquote\nBlockquote\n\n\n* List  * List  * List   or  - List  - List  - List\nListListList\n\n\n1. List 2. List3. List or 1) List  2) List  3) List\nListListList\n\n\nHorizontal rule:  ---   or  ***\nHorizontal rule:  \n\n\n`Inline code` with backticks\nInline code with backticks\n\n\n``` javascript  const test = () =&gt; {   console.log('test'); }; ```\n const test = () =&gt; {   console.log('test'); }; \n\n\n\nPlayground\nYou can play around with the Markdown Playground here.\nCode syntax highlighting\nsquido uses Highlight.js for code highlighting. This means you can use the code block example above with code wrapped in ``` backticks. You can specify the language by adding the language for your code block.\nFor example, adding this:\n``` javascript  function test(p1, p2) {   console.log('test'); }; ```\nRenders this:\nfunction test(p1, p2) {\n  console.log(&#x27;test&#x27;);\n};\n\nMarkdown helpers\nAttributes\nYou can add any HTML attributes including ID's and classes by adding {attribute} to your Markdown syntax.\nAdding a class to a header (style-me is the class):\n# header {.style-me}\nAdding a data-toggle attribute to a paragraph:\nparagraph {data-toggle=modal}\nYou can also use this on tables with multiple classes. Eg (note the empty line under the table):\nMy table       | Header                        \n-------------- | ----------\nTable          | Contents\n\n{.table .table-hover .table-bordered}\n\nRenders this:\n\n\n\nMy table\nHeader\n\n\n\n\nTable\nContents\n\n\n\nHeading anchors\nAll headings are automatically rendered as # anchors to hyperlink (skip) to sections within a page / post. This means you add the /#heading-name to the URL to automatically jump to that heading.\nFor example:\nhttps://docs.squido.org/markdown/#playground\n"},{"title":"Templates","permalink":"templates","body":"Templates use Handlebars formatting and the {{}} syntax or EJS. This guide will show Handlebars formatting. Documentation on changing the templateEngine can be found here.\n\nThis guide will show examples in Handlebars formatting.\nDocumentation on changing the templateEngine can be found here.\n\nThe template files needed by default are:\n\nindex.hbs\npost.hbs\npage.hbs\ntag.hbs\n404.hbs\n\nAlso needed is a layout file called layout.hbs located here: /source/layouts/layout.hbs. This file drives the main layout of the page including the &lt;html&gt;, &lt;head&gt;, &lt;body&gt; etc tags.\nAccessible on all layout and templates files is your post meta using {{meta.&lt;property&gt;}} and your config.js object. You can access that using {{config.&lt;propery&gt;}}.\nindex.hbs\nThis is the entry point of your website, the index.html in the root of your build directory.\nYou will have access to a list of posts which you may want to display if building a blog or you may want to manually create a landing page for your website. The choice is yours.\nIf you were to render your posts you may want to do something like where {{#each posts}} is looping our list  of posts:\n&lt;div class=&quot;row&quot;&gt;\n  {{#each posts}}\n  &lt;div class=&quot;article&quot;&gt;\n    &lt;h2&gt;\n      &lt;a href=&quot;/{{this.permalink}}/&quot;&gt;{{this.title}}&lt;/a&gt; \n    &lt;/h2&gt;\n    {{this.summary}}\n  &lt;/div&gt;\n  {{/each}}\n&lt;/div&gt;\n\nDepending on if you have pagination set to true in your config, you will either get a full list of articles or a paginated list. See pagination for more info.\npost.hbs\nThis is the rendering of the post or the markdown content at the permalink set. Eg: mydomain.com/permalink-value.\nTo render the body of the markdown file you will need to add the following tag to your template: {{{body}}}\nYou will have access to the full meta values of the page but can also access the title using {{title}}. Depending on whether you included tags in the meta data of the markdown file, you will also get a tags object you can loop through to display tags. See tags for more info.\nA simple post page could be:\n&lt;div class=&quot;row&quot;&gt;\n    &lt;div class=&quot;col-md-8 offset-md-2 mb-5&quot;&gt;\n        &lt;div class=&quot;mt-5&quot;&gt;\n            &lt;h1&gt;{{title}}&lt;/h1&gt;\n            {{{body}}}\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\npage.hbs\nThis is the pagination aspect of your website. This template is used at /page/x (where x is the page number). If you are creating a blog which will have pagination this could look very similar to the index.hbs which shows all your articles/posts. Similar to the index.hbs you will get a post object with the posts you should render if you are doing pagination.\nA simple template could look like:\n&lt;div class=&quot;row&quot;&gt;\n  {{#each posts}}\n  &lt;div class=&quot;col-xs-12 col-sm-3 mb-4 d-flex align-items-stretch&quot;&gt;\n    &lt;div class=&quot;card shadow-sm&quot;&gt;\n      &lt;div class=&quot;card-body&quot;&gt;\n        &lt;p class=&quot;card-text&quot;&gt;\n          &lt;h2&gt;\n            &lt;a href=&quot;/{{this.permalink}}/&quot;&gt;{{this.title}}&lt;/a&gt; \n          &lt;/h2&gt;\n          {{this.summary}}\n        &lt;/p&gt;\n        &lt;div class=&quot;d-flex justify-content-between align-items-center&quot;&gt;\n          &lt;a class=&quot;btn btn-outline-secondary&quot; href=&quot;/{{this.permalink}}/&quot;&gt;Read more..&lt;/a&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n  {{/each}}\n&lt;/div&gt;\n\ntag.hbs\nThis is the tag page which is generated from the tags set in your post markdown. A page is create for each tag you use in your markdown files and is accessible at: /tag/&lt;tag-value&gt;. Keep this in mind when setting tag values where you will want to give permalink type values for pretty URLs.\nA simple template could look like:\n&lt;div class=&quot;row&quot;&gt;\n  &lt;h1&gt;Tag: {{tag}}&lt;/h1&gt;\n  {{#each posts}}\n  &lt;div class=&quot;col-xs-12 col-sm-3 mb-4 d-flex align-items-stretch&quot;&gt;\n    &lt;div class=&quot;card shadow-sm&quot;&gt;\n      &lt;div class=&quot;card-body&quot;&gt;\n        &lt;p class=&quot;card-text&quot;&gt;\n          &lt;h2&gt;\n            &lt;a href=&quot;/{{this.permalink}}&quot;&gt;{{this.title}}&lt;/a&gt; \n          &lt;/h2&gt;\n          {{this.summary}}\n        &lt;/p&gt;\n        &lt;div class=&quot;d-flex justify-content-between align-items-center&quot;&gt;\n          &lt;a class=&quot;btn btn-outline-secondary&quot; href=&quot;/{{this.permalink}}/&quot;&gt;Read more..&lt;/a&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n  {{/each}}\n&lt;/div&gt;\n\n404.hbs\nHopefully this one is obvious. If at any point a page isn't found or a URL is mistyped this 404 page will be rendered.\nA simple template:\n&lt;div class=&quot;row&quot;&gt;\n    &lt;div class=&quot;col-md-6 offset-md-3 mt-5 mb-3&quot;&gt;\n        &lt;div class=&quot;text-center&quot;&gt;\n            &lt;img src=&quot;/content/images/squido.svg&quot; alt=&quot;&quot; width=&quot;200&quot; height=&quot;200&quot; alt=&quot;squido logo&quot; class=&quot;img-fluid&quot;&gt;\n        &lt;/div&gt;\n        &lt;h1 class=&quot;mt-5 text-center&quot;&gt;404 - Page not found&lt;/h1&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\nIncludes\nYou can include local Stylesheets and Javascript files in the layout.hbs file by using path starting with /content and then wherever you have placed the file. Eg: /content/stylesheets/&lt;myfile&gt;.css.\nThe layout.hbs also includes a config property named fileEnv ({{config.fileEnv}}) which will return either nothing or .min if you have set the NODE_ENV to production. This is useful if you are wanting to use the un-minified CSS or JS file when troubleshooting/developing your website and using the minified version when in production.\nExample usage:\n&lt;link rel=&quot;stylesheet&quot; href=&quot;/content/stylesheets/style{{config.fileEnv}}.css&quot;&gt;\n&lt;script src=&quot;/content/javascripts/site{{config.fileEnv}}.js&quot;&gt;&lt;/script&gt;\n\nTags\nWithin a post you have access to a tag array which contains all the tags for that post. You may want to iterate through that array to link to the /tag/&lt;tag-value&gt; URL. For example:\n{{#if tags}}\n&lt;div class=&quot;row&quot;&gt;\n    &lt;div class=&quot;col-md-8 offset-md-2 mb-5&quot;&gt;\n        &lt;h5 class=&quot;text-muted&quot;&gt;Tags:&lt;/h5&gt;\n        {{#each tags}}\n        &lt;a href=&quot;/tag/{{this}}/&quot;&gt;{{this}}&lt;/a&gt; |\n        {{/each}}\n    &lt;/div&gt;\n&lt;/div&gt;\n{{/if}}\n\nPagination\nIf pagination is set to true in your config.js file, the post object available on all templates will be paginated to the postPerPage value you set in your config.js. Eg: 10 posts and postPerPage set to 5 will create 2 pages. 1, the index page and /page/1 as the first paginated page.\nYou will also get a shouldPaginate variable which will return true or false depending on whether there is more posts than can be displayed - eg: you should paginate.\nAn example displaying the pagination might look like:\n{{!-- Pagination --}}\n{{#if config.pagination}}\n{{#if shouldPaginate}}\n&lt;div class=&quot;row&quot;&gt;\n  &lt;div class=&quot;col-xs-12 col-sm-12 mb-4 text-center&quot;&gt;\n    &lt;p class=&quot;text-muted&quot;&gt;Page {{page}} of {{pages}}&lt;/p&gt;\n    &lt;div class=&quot;btn-group&quot; role=&quot;group&quot;&gt;\n    {{#if prevPage }}\n        &lt;a href=&quot;/page/{{prevPage}}/&quot; class=&quot;btn btn-outline-secondary&quot;&gt;&amp;laquo; Prev Page&lt;/a&gt;\n    {{/if}}\n    {{#if nextPage }}\n        &lt;a href=&quot;/page/{{nextPage}}/&quot; class=&quot;btn btn-outline-secondary&quot;&gt;Next Page &amp;raquo;&lt;/a&gt;\n    {{/if}}\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n{{/if}}\n{{/if}}\n\n"},{"title":"Sitemap and Feeds","permalink":"sitemap-and-feeds","body":"A website sitemap is automatically built and can be found at /sitemap.xml. Eg: example.com/sitemap.xml\nRSS/Atom/JSON feeds are also automatically built and can be found at:\n\n/rss. Eg: example.com/rss\n/atom. Eg: example.com/atom\n/json. Eg: example.com/json\n\n"},{"title":"Plugins","permalink":"plugins","body":"Plugins can be created for if core functionality is not included or customisation is required. Plugins run at the final step of the build so you can override any of the existing steps if needed.\nPlugins are Javascript files within /&lt;source dir&gt;/plugins/&lt;plugin name&gt;.js.\nThe plugin file needs to export a function named run. For example:\nconst run = (opts) =&gt; {\n  /* code in here */\n  console.log(&#x27;opts&#x27;, opts);\n};\n\nmodule.exports = {\n  run\n};\n\nConfiguration\nAdding plugins to your /config.js file is simple by adding the plugin to the plugins array:\nconst config = {\n  development: {\n    ...\n    plugins: [\n      {\n        name: &#x27;search&#x27;,\n        options: {}\n      }\n    ]\n  }\n}\n\nname: the name of the plugin. This also needs to match the name of the file. Eg: /source/plugins/search.js\noptions: An arg object passed into the plugin.\n"},{"title":"Import content","permalink":"import-content","body":"squido allows the importing of content from Ghost and Wordpress.\nWe will use the import command.\nGhost\nTo import data, you first need to export your data from your Ghost site:\n\nLogin to the Ghost admin panel\nSelect the cog icon at the bottom of the sidebar\nSelect Labs\nClick Export your content\n\nTo import that data into squido you need to run this command from the root of your squido website:\n$ squido import -f /path/to/file/ghost.json -t ghost\n\nYou will see a new folder with all your posts in Markdown format here: /imported.\nYou can check your files are imported correctly then move your newly imported Markdown files here: /&lt;source dir&gt;/posts.\nWordpress\nTo import data, you first need to export your data from your Wordpress site:\n\nLogin to Wordpress admin panel\nSelect Tools\nSelect Export\nClick Export all\n\nTo import that data into squido you need to run this command from the root of your squido website:\n$ squido import -f /path/to/file/wordpress.xml -t wordpress\n\nYou will see a new folder with all your posts in Markdown format here: /imported.\nYou can check your files are imported correctly then move your newly imported Markdown files here: /&lt;source dir&gt;/posts.\n"},{"title":"Deployment and hosting","permalink":"deployment-and-hosting","body":"Netlify\nYou can host this website anywhere static websites are supported. Some options are https://www.netlify.com as the deployments are just dead simple.\nSimply connect your Git repo and set the Build settings settings like below:\n\nAnd set the Environment variable to align with your config.js file:\n\nYou are done. Now each push to your Git repo will trigger the build and deploy on Netlify.\nGithub pages\nPublishing to Github pages is easy. Simply set your config buildDir to docs and the correct baseUrl. Eg:\nproduction: {\n    name: &#x27;squido&#x27;,\n    description: &#x27;This is the blog description&#x27;,\n    twitterHandle: &#x27;@mrvautin&#x27;,\n    baseUrl: &#x27;https://&lt;github-username&gt;.github.io&#x27;,\n    sourcesExt: &#x27;markdown&#x27;,\n    sourceDir: &#x27;source&#x27;,\n    buildDir: &#x27;docs&#x27;,\n    summaryLength: 250,\n    port: 4965,\n    pagination: true,\n    postPerPage: 8\n}\n\nThen simply build your website with squido build -c and push to your Github repo.\nYou then need to set Source to /docs as shown here and may need to change the branch.\nYou can then either access at your Repo URL (https://&lt;github-username&gt;.github.io) or a custom domain\nAmazon AWS Amplify\nIt's very easy to publish your squido website to AWS Amplify.\n\nLogin here\nSelect New App\nSelect Host web app\nSelect the Git repository and authenticate. Eg: Github\nSelect the Repository name and branch from the populated list(s)\nClick Edit on the build commands and ensure baseDirectory is set to /build. Eg Yaml file will look like:\n\nversion: 1\nfrontend:\n  phases:\n    preBuild:\n      commands:\n        - npm ci\n    build:\n      commands:\n        - npm run build\n  artifacts:\n    baseDirectory: /build\n    files:\n      - &#x27;**/*&#x27;\n  cache:\n    paths:\n      - node_modules/**/*\n\n\nClick Save and deploy and wait for your website to be built!\n\nCloudflare Pages\nIt's very easy to publish your squido website for FREE using Cloudflare pages. Free SSL, custom domain, global CDN and more and just super simple to setup.\n\nLogin here\nSelect Create new project\nLink your Github account and select your repository, then Begin setup\nSetup like:\n\n\n\nClick Save and deploy\nWait for the build to complete\nYou can then setup Custom domains and you are done\n\nDigitalocean Apps\nDigitalocean Apps makes hosting your static HTML squido website for FREE just so bloody easy. Digitalocean Apps offers free SSL, custom domain, global CDN and more.\n\nLogin here\nSelect Github as source and choose your squido Repository:\n\n\n\nHit Next\nSetup like:\n\n\n\nHit Next.\nName your app then hit Next once more\nSelect the plan. Choose Starter for FREE hosting\nHit Launch Starter App\nWait for your app to build. Watch the logs by clicking the View logs button\nOnce your build is complete you can select Settings and configure your domain and more\n\nYou are done. Enjoy your super fast hosting on the awesome Digitalocean platform!\nAzure Static Web Apps\nPublishing your squido website to Azure Static Web Apps is very easy and low cost.\n\nVisit portal.azure.com, login and create a free Static Web App.\nTo use Azure DevOps instead of a Github repo, select Other under Deployment details.\nOnce the resource is provisioned, from the Static Web App Overview page, click Manage Deployment Token. Copy this token somewhere safe. It will be used later.\n\n\n\nVisit devops.azure.com, login and create a New Project\nClick Repos and clone the Azure repo to your local machine. Either move your existing squido site into this local repo, or create a new squido site. Commit and push code to this Azure DevOps repo\nClick Pipelines and create a new Pipeline for the project. Select Starter Pipeline and paste in the yaml template below\n\ntrigger:\n  - main\npool:\n  vmImage: ubuntu-latest\nvariables:\n- name: NODE_ENV\n  value: production \nsteps:\n  - checkout: self\n    submodules: true\n  - task: AzureStaticWebApp@0\n    inputs:\n      app_location: &#x27;/&#x27;\n      output_location: &#x27;/build&#x27;\n      azure_static_web_apps_api_token: $(deployment_token)\n\n\nClick Variables then New Variable\nName the variable deployment_token and paste in the Deployment Token from Step 1c. above\nSave and run the Pipeline\nVisit the URL shown in Static Web Apps in Azure Portal\n\n"},{"title":"Admin editor","permalink":"admin-editor","body":"The squido admin panel is accessible after running the serve.\nRunning serve:\n$ squido serve -b -c -w\n\nOpen the following in a browser: http://localhost:4965/squido\nYou should see:\n\nHere you can create, edit and delete any posts for you website. Once you have completed you simply need to deploy or Git commit and push to your repo.\n"},{"title":"Post build tasks","permalink":"post-build-tasks","body":"Post build tasks are tasks which run after the website is built. You can configure zipping up your website, automatic deployment etc to make deploying your website faster. See configuration for information on configuring a task.\nZip\nThe zip postBuild task simply zips all the files in your /build directory into a file called build.zip located here: /build/build.zip. You can then send/upload this file to your website host, FTP it or back it up.\nAn example config.js configuration is below. There are no options for this task.\nproduction: {\n  name: &#x27;squido docs&#x27;,\n  description: &#x27;Squido documentation - A dead simple static website generator&#x27;,\n  ...\n  postBuild: [\n    {\n        name: &#x27;zip&#x27;,\n        options: {}\n    }\n  ]\n  ...\n}\n\nNetlify\nThe netlify postBuild deploys your website to Netlify without the use of Git. This task requires the zip task to also be configured before this task (see below config) as this task will upload the zip file containing your website direct to Netlify using their file upload API.\nAn example netlify task configuration is below. You can see the zip task is configured first:\nproduction: {\n  name: &#x27;squido docs&#x27;,\n  description: &#x27;Squido documentation - A dead simple static website generator&#x27;,\n  ...\n  postBuild: [\n    {\n        name: &#x27;zip&#x27;,\n        options: {}\n    },\n    {\n      name: &#x27;netlify&#x27;,\n      options: {\n        siteName: &#x27;squido test website&#x27;\n        apiToken: &#x27;my-netlify-api-token&#x27;\n      }\n    }\n  ]\n  ...\n}\n\nTo use this task you will need to obtain your apiToken from Netlify by:\n\nLogging into Netlify here https://app.netlify.com/user/applications\nUnder Personal access tokens, click New access token\nSet a name of your token which you will remember.\nCopy the token and add to your config.js file under apiToken\n\nAfter you run:\n$ squido build -c\n\nThe build files of your website will first be added to a zip file, then that file is uploaded to Netlify to be built and served. You can then view your Netlify websites under the Sites tab and can control your custom domain and other settings.\n"}];