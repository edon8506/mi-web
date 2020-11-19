(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{427:function(t,s,_){"use strict";_.r(s);var e=_(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("div",{staticClass:"content"},[_("p"),t._m(0),_("p"),t._v(" "),_("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),_("p",[t._v("转载自：https://www.cnblogs.com/qidh/p/11455062.html")]),t._v(" "),_("p",[t._v("web性能优化，主要分为前端和后台两个部分性能优化，后台性能优化决定了web能不能用，前端优化决定了其好不好用，也就是牵涉到前端用户体验和web易用性等情况，所以前端性能与用户体验是有着极大的关联的。")]),t._v(" "),_("p",[t._v("首先，前端优化之前，我们需要知道其整体性能情况，然后对整体情况进行细分与分析，了解其每一步所损耗的时间和消耗的原由，然后进行细节优化，才能达成一个整体性能质的飞越，并不是其中一部分或者一个步骤的优化就能够解决问题的，只有优化的量才能达到性能质的飞越。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),_("p",[t._v("80%的响应的时间是消耗在网页的内容下载上，例如：图片、样式、脚本等。所以减少请求次数是缩短响应时间的关键之处。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),_("p",[t._v("重定向是一个比较常使用的技术手段，比如服务器地址进行迁移，修改了请求的url地址，这时通常会使用重定向，把访问原网址的用户重定向到新的url。")]),t._v(" "),_("p",[t._v("由于浏览器访问地址是一连串的过程，如果重定向的话，就需要在访问过程中重复发起一连串的动作，会消耗很多时间，因此避免出现多次重定向地址或资源的访问。")]),t._v(" "),t._m(6),t._v(" "),_("p",[t._v("当浏览器与web服务器建立连接时，它是需要进行DNA解析的，将域名解析为IP地址。首先我们来了解一下它的过程：")]),t._v(" "),_("p",[t._v("a.先检查本地 hosts 文件中是否有映射，有则使用；")]),t._v(" "),_("p",[t._v("b.查找本地 DNS 缓存，有则返回；")]),t._v(" "),_("p",[t._v("c.根据配置在 TCP/IP 参数中设置 DNS 查询服务器，并向其进行查询，这里先称为本地 DNS；")]),t._v(" "),_("p",[t._v("d.如果该服务器无法解析域名（没有缓存），且不需要转发，则会向根服务器请求；")]),t._v(" "),_("p",[t._v("e.根服务器根据域名类型判断对应的顶级域名服务器（.com），返回给本地 DNS，然后重复该过程，直到找到该域名；")]),t._v(" "),_("p",[t._v("f.当然，如果设置了转发，本地 DNS 会将请求逐级转发，直到转发服务器返回或者也不能解析。")]),t._v(" "),_("p",[t._v("所以减少DNS的查询次数非常重要，页面加载时就尽量避免额外耗时。为了减少DNS的询次数，最好的解决方法就是在页面中减少不同的域名请求的机会。")]),t._v(" "),t._m(7),t._v(" "),_("p",[t._v("使用内容分发网络，把你的网站内容分散到多个、处于不同地域位置的服务器上可以加快下载速度。")]),t._v(" "),t._m(8),t._v(" "),_("p",[t._v("对一个网站而言，CSS、javascript、logo、图标这些静态资源文件更新的频率都比较低，而这些文件又几乎是每次http请求都需要的，如果将这些文件缓存在浏览器中，可以极好的改善性能。通过设置http头中的cache-control和expires的属性，可设定浏览器缓存，缓存时间可以是数天，甚至是几个月。")]),t._v(" "),_("p",[t._v("在某些时候，静态资源文件变化需要及时应用到客户端浏览器，这种情况，可通过改变文件名实现，即更新javascript文件并不是更新javascript文件内容，而是生成一个新的JS文件并更新HTML文件中的引用。")]),t._v(" "),_("p",[t._v("使用浏览器缓存策略的网站在更新静态资源时，应采用逐量更新的方法，比如需要更新10个图标文件，不宜把10个文件一次全部更新，而是应该一个文件一个文件逐步更新，并有一定的间隔时间，以免用户浏览器忽然大量缓存失效，集中更新缓存，造成服务器负载骤增、网络堵塞的情况。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),_("p",[t._v("如果将css样式定义放在页面中或者页面底部，会出现短暂白屏或者某一区域短暂白板的情况，这和浏览器的运营机制有关的，不管页面如何加载，页面都是逐步呈现的。所以在每做一个页面的时候，用Link标签把每一个样式表定义放在head中。")]),t._v(" "),t._m(11),t._v(" "),_("p",[t._v("浏览器在加载css文件时，页面逐步呈现会被阻止，直到所有css文件加载完毕，所以要把css文件的引用放到head中去，这样在加载css文件时不会组织页面的呈现。但是对于js文件，在使用的时候，它下面所有也页面内容的呈现都会被阻塞，将脚本放在页面越靠下的地方，就意味着越多的内容能够逐步呈现。")]),t._v(" "),t._m(12),t._v(" "),_("p",[t._v("内联js和css其实比外部文件有更快的响应速度，那为什么还要使用外部呢？因为使用外部的js和css可以让浏览器缓存他们，这样不仅HTML文档大小减少，而且不会增加HTTP请求数量。另外，使用外部js和css可以提高组件的可复用性。")]),t._v(" "),t._m(13),t._v(" "),_("p",[t._v("通过压缩工具将js、css、html文件进行压缩，减少项目文件大小。")]),t._v(" "),t._m(14),t._v(" "),_("p",[t._v("图片的优化主要是针对图片大小、格式、展现形式进行处理，对于图片资源处理网上介绍的方式有很多，在这里就不进行详细的介绍。")]),t._v(" "),t._m(15),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.cnblogs.com/qidh/p/11455062.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web前端性能优化"),_("OutboundLink")],1)])])}),[function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#_1-http请求"}},[t._v("1. HTTP请求")]),_("ul",[_("li",[_("a",{attrs:{href:"#_1-1-减少http请求数量"}},[t._v("1.1 减少HTTP请求数量")])]),_("li",[_("a",{attrs:{href:"#_1-2-避免重定向"}},[t._v("1.2 避免重定向")])]),_("li",[_("a",{attrs:{href:"#_1-3-dns预解析"}},[t._v("1.3 DNS预解析")])]),_("li",[_("a",{attrs:{href:"#_1-4-使用cdn"}},[t._v("1.4 使用CDN")])])])]),_("li",[_("a",{attrs:{href:"#_2-浏览器缓存"}},[t._v("2. 浏览器缓存")])]),_("li",[_("a",{attrs:{href:"#_3-页面静态资源"}},[t._v("3. 页面静态资源")]),_("ul",[_("li",[_("a",{attrs:{href:"#_3-1-将css样式表放在顶部"}},[t._v("3.1 将CSS样式表放在顶部")])]),_("li",[_("a",{attrs:{href:"#_3-2-将js脚本放在底部"}},[t._v("3.2 将JS脚本放在底部")])]),_("li",[_("a",{attrs:{href:"#_3-3-使用js和css"}},[t._v("3.3 使用JS和CSS")])]),_("li",[_("a",{attrs:{href:"#_3-4-组件压缩"}},[t._v("3.4 组件压缩")])]),_("li",[_("a",{attrs:{href:"#_3-5-图片优化"}},[t._v("3.5 图片优化")])])])]),_("li",[_("a",{attrs:{href:"#参考资料"}},[t._v("参考资料")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"web前端性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web前端性能优化"}},[this._v("#")]),this._v(" Web前端性能优化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-http请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-http请求"}},[this._v("#")]),this._v(" 1. HTTP请求")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-1-减少http请求数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-减少http请求数量"}},[this._v("#")]),this._v(" 1.1 减少HTTP请求数量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("合并文件：将相关代码文件进行合并")]),this._v(" "),s("li",[this._v("CSS Sprites：将多张图片合并成单张图片，通过css来控制显示位置")]),this._v(" "),s("li",[this._v("图片映射：将多个图片拼在一起，然后通过坐标来控制。通常在页面中连续的时候才有用，比如导航条")]),this._v(" "),s("li",[this._v("行内图片使用Base64编码：通过编码的字符串将图片内嵌到网页文本中")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-2-避免重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-避免重定向"}},[this._v("#")]),this._v(" 1.2 避免重定向")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-3-dns预解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-dns预解析"}},[this._v("#")]),this._v(" 1.3 DNS预解析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-4-使用cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-使用cdn"}},[this._v("#")]),this._v(" 1.4 使用CDN")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-浏览器缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-浏览器缓存"}},[this._v("#")]),this._v(" 2. 浏览器缓存")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-页面静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-页面静态资源"}},[this._v("#")]),this._v(" 3. 页面静态资源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-1-将css样式表放在顶部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-将css样式表放在顶部"}},[this._v("#")]),this._v(" 3.1 将CSS样式表放在顶部")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-2-将js脚本放在底部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-将js脚本放在底部"}},[this._v("#")]),this._v(" 3.2 将JS脚本放在底部")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-3-使用js和css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-使用js和css"}},[this._v("#")]),this._v(" 3.3 使用JS和CSS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-4-组件压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-组件压缩"}},[this._v("#")]),this._v(" 3.4 组件压缩")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-5-图片优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-图片优化"}},[this._v("#")]),this._v(" 3.5 图片优化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);s.default=r.exports}}]);