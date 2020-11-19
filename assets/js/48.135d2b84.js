(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{424:function(t,_,v){"use strict";v.r(_);var e=v(0),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[v("p"),t._m(0),v("p"),t._v(" "),v("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),v("p",[t._v("HTTP定义了一组"),v("code",[t._v("请求方法")]),t._v("，以表明要给定资源执行的操作。指示针对给定资源要执行的期望动作。每个请求方法都实现了不同的语义，但一些共同的特征由一组共享，例如一个请求方法可以是"),v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/safe",target:"_blank",rel:"noopener noreferrer"}},[t._v("安全"),v("OutboundLink")],1),t._v("、"),v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/%E5%B9%82%E7%AD%89",target:"_blank",rel:"noopener noreferrer"}},[t._v("幂等"),v("OutboundLink")],1),t._v("、"),v("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/cacheable",target:"_blank",rel:"noopener noreferrer"}},[t._v("可缓存"),v("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(2),t._v(" "),v("p",[t._v("请求方法出现的时间：")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),v("table",[t._m(5),t._v(" "),v("tbody",[t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),v("tr",[v("td",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PATCH",target:"_blank",rel:"noopener noreferrer"}},[t._v("PATCH"),v("OutboundLink")],1)]),t._v(" "),v("td",[t._v("用于对资源进行部分修改。由于PATCH不是标准的HTTP方法，所以不能保证客户端和服务端都已经实现。")])])])]),t._v(" "),t._m(14),t._v(" "),v("p",[t._v("根据RFC2616，HTTP 方法是区分大小写的，而Header是不区分的。")]),t._v(" "),v("p",[t._v("当指定资源不支持对应请求方法时，服务器返回状态码405(Method Not Allowed)。")]),t._v(" "),v("p",[t._v("当服务器不认识或者不支持对应请求方法时，服务器返回状态码501(Not Implemented)。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.zhihu.com/question/28586791",target:"_blank",rel:"noopener noreferrer"}},[t._v("GET 和 POST 到底有什么区别？知乎"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.w3school.com.cn/tags/html_ref_httpmethods.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3school"),v("OutboundLink")],1),t._v("给的标准答案：")]),t._v(" "),t._m(17),t._v(" "),v("p",[t._v("从标准上来看，GET 和 POST 的区别如下：")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),v("p",[t._v("以下几点POST确实比GET安全一点：")]),t._v(" "),t._m(20),t._v(" "),v("p",[t._v("上述内容只是浅显的解释，对于真正意义上的安全没有任何作用。然而，从传输的角度来说，他们都是不安全的，因为 HTTP 在网络上是明文传输的，只要在网络节点上捉包，就能完整地获取数据报文。")]),t._v(" "),v("p",[t._v("要想安全传输，就只有加密，也就是 HTTPS。")]),t._v(" "),t._m(21),t._v(" "),v("p",[t._v("GET、POST是由HTTP协议定义的。HTTP协议中没有定义：GET请求的数据要放在URL中，POST请求的数据放在BODY中。是HTML标准对GET、POST进行了以上约定。现在web server大都是支持GET中包含body这样的请求。")]),t._v(" "),v("p",[t._v("我们可以在GET请求中通过body传递参数，但是需要后端服务进行相应的解析，在复杂的网络环境中需要考虑中转服务器、代理服务器对body数据的处理，避免参数丢失。")]),t._v(" "),t._m(22),t._v(" "),v("p",[t._v("有些文章中提到，post 会将 header 和 body 分开发送，先发送 header，服务端返回 100 状态码再发送 body。")]),t._v(" "),v("p",[t._v("HTTP 协议中没有明确说明 POST 会产生两个 TCP 数据包，而且实际测试(Chrome)发现，header 和 body 不会分开发送。")]),t._v(" "),v("p",[t._v("所以，header 和 body 分开发送是部分浏览器或框架的请求方法，不属于 post 必然行为。")]),t._v(" "),t._m(23),t._v(" "),v("p",[t._v("put和post的技术实现上应该是没有很大区别的。但在于协议上语义是很大区别。")]),t._v(" "),v("p",[t._v("PUT方法是幂等的：连续调用一次或者多次的效果相同（无副作用），而POST方法是非幂等的。")]),t._v(" "),v("p",[t._v("除此之外还有一个区别，通常情况下，PUT的URI指向是具体单一资源，而POST可以指向资源集合。")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),v("p",[t._v("PUT和PATCH都是更新资源，而PATCH用来对已知资源进行局部更新。")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),v("p",[v("a",{attrs:{href:"https://raw.githubusercontent.com/for-GET/http-decision-diagram/master/httpdd.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片来源"),v("OutboundLink")],1)]),t._v(" "),t._m(32),t._v(" "),v("p",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 请求方法 MDN"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/ccpat/article/details/79463473",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP协议漫谈 - HTTP协议请求方法"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.oschina.net/news/77354/http-get-post-different",target:"_blank",rel:"noopener noreferrer"}},[t._v("99%的人理解错 HTTP 中 GET 与 POST 的区别"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.runoob.com/http/http-status-codes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP状态码 菜鸟教程"),v("OutboundLink")],1)])])}),[function(){var t=this.$createElement,_=this._self._c||t;return _("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#_1-请求方法说明：get、post、option"}},[this._v("1. 请求方法说明：get、post、option.....")])]),_("li",[_("a",{attrs:{href:"#_2-关于请求方法的说明、区别"}},[this._v("2. 关于请求方法的说明、区别")]),_("ul",[_("li",[_("a",{attrs:{href:"#_2-1-get和post区别"}},[this._v("2.1 GET和POST区别")])]),_("li",[_("a",{attrs:{href:"#_2-2-put、post区别"}},[this._v("2.2 PUT、POST区别")])]),_("li",[_("a",{attrs:{href:"#_2-3-put、patch区别"}},[this._v("2.3 PUT、PATCH区别")])])])]),_("li",[_("a",{attrs:{href:"#_3-http状态码"}},[this._v("3. HTTP状态码")])]),_("li",[_("a",{attrs:{href:"#参考资料"}},[this._v("参考资料")])])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h1",{attrs:{id:"http-请求方法和状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-请求方法和状态码"}},[this._v("#")]),this._v(" HTTP 请求方法和状态码")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[v("p",[t._v("安全")]),t._v(" "),v("p",[t._v("安全是指一个HTTP方法不会修改服务器的数据。也就是说，这是一个对服务器只读操作的方法。"),v("code",[t._v("GET")]),t._v("、"),v("code",[t._v("HEAD")]),t._v("、"),v("code",[t._v("OPTIONS")]),t._v("是安全的，"),v("code",[t._v("POST")]),t._v("、"),v("code",[t._v("PUT")]),t._v("、"),v("code",[t._v("DELETE")]),t._v("则不是安全的。")])]),t._v(" "),v("li",[v("p",[t._v("幂等")]),t._v(" "),v("p",[t._v("幂等是指一个HTTP方法同样的请求被执行一次与连续执行多次的效果是一样的，服务器的状态也是一样的。也就是说，幂等方法不应该具有副作用(统计用途除外)。"),v("code",[t._v("GET")]),t._v("、"),v("code",[t._v("HEAD")]),t._v("、"),v("code",[t._v("PUT")]),t._v("、"),v("code",[t._v("DELETE")]),t._v("等方法都是幂等的，而"),v("code",[t._v("POST")]),t._v("方法不是。所有安全方法也都是幂等的。")])]),t._v(" "),v("li",[v("p",[t._v("可缓存")]),t._v(" "),v("p",[t._v("可缓存响应是指，HTTP响应可以被缓存，响应被存储以供后面检索和使用，从而不需要从服务器从新获取。并不是所有HTTP响应都能被缓存，缓存HTTP响应有一下约束：")]),t._v(" "),v("ul",[v("li",[t._v("请求方法本身是可缓存的，如"),v("code",[t._v("GET")]),t._v("或"),v("code",[t._v("HEAD")]),t._v("方法。如果设置了缓存字段并设置了"),v("code",[t._v("Content-Location")]),t._v("头，则也可以缓存"),v("code",[t._v("POST")]),t._v("或"),v("code",[t._v("PATCH")]),t._v("响应，但很少实现，(例如，Firefox不支持它，)")]),t._v(" "),v("li",[t._v("响应的状态代码由应用程序缓存知道，并且它被视为可缓存的。以下状态代码是可缓存的：200、203、204、206、300、301、404、405、410、414 和 501。")]),t._v(" "),v("li",[t._v("响应头中没有指定缓存的头部，如"),v("code",[t._v("Cache-Control")]),t._v("，它可以阻止缓存。")])]),t._v(" "),v("p",[t._v("***注意:***对特定的URI的某些不可缓存的请求/响应可能会使以前缓存的响应失效。例如PUT到"),v("code",[t._v("pageX.html")]),t._v("页面，将使相同URI下所有的GET或HEAD请求缓存失效。")])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("ul",[_("li",[this._v("HTTP/0.9: GET")]),this._v(" "),_("li",[this._v("HTTP/1.0: POST、HEAD")]),this._v(" "),_("li",[this._v("HTTP/1.1: OPTIONS、PUT、DELETE、TRACE、CONNECT")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"_1-请求方法说明：get、post、option"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求方法说明：get、post、option"}},[this._v("#")]),this._v(" 1. 请求方法说明：get、post、option.....")])},function(){var t=this.$createElement,_=this._self._c||t;return _("thead",[_("tr",[_("th",[this._v("方法")]),this._v(" "),_("th",[this._v("说明")])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("tr",[_("td",[this._v("GET")]),this._v(" "),_("td",[this._v("请求一个指定资源的表示形式. 使用GET的请求应该只被用于获取数据.")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("tr",[_("td",[this._v("HEAD")]),this._v(" "),_("td",[this._v("请求一个与GET请求的响应相同的响应，但没有响应体.HEAD方法作用：1、在不获取资源的情况下获取资源信息(类型、大小等)。2、通过状态码查看资源是否存在。3、通过查看首部，测试资源是否被修改了。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("tr",[_("td",[this._v("POST")]),this._v(" "),_("td",[this._v("向指定资源提交数据，请求服务器对数据进行相应处理，如：表单数据提交、文件上传等，请求数据会被包含在请求体中。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("tr",[_("td",[this._v("PUT")]),this._v(" "),_("td",[this._v("向服务器写入资源，请求服务器创建一个新的目标资源，或者替换原先的目标资源。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("tr",[_("td",[this._v("OPTIONS")]),this._v(" "),_("td",[this._v("该请求返回服务器对指定资源支持哪些 HTTP 请求方法。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("tr",[_("td",[this._v("DELETE")]),this._v(" "),_("td",[this._v("用于删除指定的资源。和PUT一样，服务器可能会不支持。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("tr",[_("td",[this._v("TRACE")]),this._v(" "),_("td",[this._v("回显服务器收到的请求，主要用于测试或诊断。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("tr",[_("td",[this._v("CONNECT")]),this._v(" "),_("td",[this._v("HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[_("strong",[this._v("注意：")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"_2-关于请求方法的说明、区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-关于请求方法的说明、区别"}},[this._v("#")]),this._v(" 2. 关于请求方法的说明、区别")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"_2-1-get和post区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-get和post区别"}},[this._v("#")]),this._v(" 2.1 GET和POST区别")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th",[t._v("GET")]),t._v(" "),v("th",[t._v("POST")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("浏览器后退/刷新 按钮")]),t._v(" "),v("td",[t._v("无害")]),t._v(" "),v("td",[t._v("数据会被重新提交（浏览器应该告知用户数据会被重新提交）。")])]),t._v(" "),v("tr",[v("td",[t._v("书签")]),t._v(" "),v("td",[t._v("可以收藏为书签")]),t._v(" "),v("td",[t._v("不能收藏为书签")])]),t._v(" "),v("tr",[v("td",[t._v("缓存")]),t._v(" "),v("td",[t._v("可以被缓存")]),t._v(" "),v("td",[t._v("不能被缓存")])]),t._v(" "),v("tr",[v("td",[t._v("编码类型")]),t._v(" "),v("td",[t._v("application/x-www-form-urlencoded")]),t._v(" "),v("td",[t._v("application/x-www-form-urlencoded 或 multipart/form-data。为二进制数据使用多重编码。")])]),t._v(" "),v("tr",[v("td",[t._v("历史记录")]),t._v(" "),v("td",[t._v("参数保留在浏览器历史中。")]),t._v(" "),v("td",[t._v("参数不会保存在浏览器历史中。")])]),t._v(" "),v("tr",[v("td",[t._v("数据长度限制")]),t._v(" "),v("td",[t._v("当发送数据时，GET 方法向 URL 添加数据；URL 的长度是受限制的（URL 的最大长度是 2048 个字符）。")]),t._v(" "),v("td",[t._v("无限制。")])]),t._v(" "),v("tr",[v("td",[t._v("对数据类型的限制")]),t._v(" "),v("td",[t._v("只允许 ASCII 字符。")]),t._v(" "),v("td",[t._v("没有限制。也允许二进制数据。")])]),t._v(" "),v("tr",[v("td",[t._v("安全性")]),t._v(" "),v("td",[t._v("与 POST 相比，GET 的安全性较差，因为所发送的数据是 URL 的一部分。在发送密码或其他敏感信息时绝不要使用 GET ！")]),t._v(" "),v("td",[t._v("POST 比 GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中。")])]),t._v(" "),v("tr",[v("td",[t._v("可见性")]),t._v(" "),v("td",[t._v("数据在 URL 中对所有人都是可见的。")]),t._v(" "),v("td",[t._v("数据不会显示在 URL 中。")])])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("ul",[_("li",[this._v("GET 用于获取信息，是无副作用的，是幂等的，且可缓存")]),this._v(" "),_("li",[this._v("POST 用于修改服务器上的数据，有副作用，非幂等，不可缓存")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h4",{attrs:{id:"_2-1-1-post-方法比-get-方法安全？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-post-方法比-get-方法安全？"}},[this._v("#")]),this._v(" 2.1.1 POST 方法比 GET 方法安全？")])},function(){var t=this.$createElement,_=this._self._c||t;return _("ul",[_("li",[this._v("GET方法容易被浏览器缓存")]),this._v(" "),_("li",[this._v("在浏览器的历史记录中会保留请求的地址")]),this._v(" "),_("li",[this._v("使用GET提交数据还可能会造成"),_("code",[this._v("Cross-site request forgery")]),this._v("攻击")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h4",{attrs:{id:"_2-1-2-get、post与请求数据如何传递没有关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-get、post与请求数据如何传递没有关系"}},[this._v("#")]),this._v(" 2.1.2 GET、POST与请求数据如何传递没有关系")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h4",{attrs:{id:"_2-1-3-post产生两个tcp数据包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-post产生两个tcp数据包"}},[this._v("#")]),this._v(" 2.1.3 POST产生两个TCP数据包?")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"_2-2-put、post区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-put、post区别"}},[this._v("#")]),this._v(" 2.2 PUT、POST区别")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("举个例子，我们在开发一个博客系统，当我们要创建一篇文章的时候往往用"),_("code",[this._v("POST https://www.jianshu.com/articles")]),this._v("，这个请求的语义是，在articles的资源集合下创建一篇新的文章，如果我们多次提交这个请求会创建多个文章，这是非幂等的。")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("而"),_("code",[this._v("PUT https://www.jianshu.com/articles/820357430")]),this._v("的语义是更新对应文章下的资源（比如修改作者名称等），这个URI指向的就是单一资源，而且是幂等的，比如你把『刘德华』修改成『蔡徐坤』，提交多少次都是修改成『蔡徐坤』")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h3",{attrs:{id:"_2-3-put、patch区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-put、patch区别"}},[this._v("#")]),this._v(" 2.3 PUT、PATCH区别")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"_3-http状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-http状态码"}},[this._v("#")]),this._v(" 3. HTTP状态码")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[_("strong",[this._v("HTTP状态码")]),this._v("（英语：HTTP Status Code）用来表示请求的结果，状态码被分为五大类：")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ol",[v("li",[v("code",[t._v("100-199")]),t._v(" 信息，服务器收到请求，需要请求者继续执行操作。")]),t._v(" "),v("li",[v("code",[t._v("200-299")]),t._v(" 表示请求成功，操作被成功接收并处理。")]),t._v(" "),v("li",[v("code",[t._v("300-399")]),t._v(" 重定向，需要进一步的操作以完成请求。")]),t._v(" "),v("li",[v("code",[t._v("400-499")]),t._v(" 表示浏览器方面出错。")]),t._v(" "),v("li",[v("code",[t._v("500-599")]),t._v(" 表示服务器方面出错。")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",[v("thead",[v("tr",[v("th",[t._v("状态代码")]),t._v(" "),v("th",[t._v("状态信息")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("100")]),t._v(" "),v("td",[t._v("Continue")]),t._v(" "),v("td",[t._v("初始的请求已经接受，客户应当继续发送请求的其余部分。（HTTP 1.1新）")])]),t._v(" "),v("tr",[v("td",[t._v("101")]),t._v(" "),v("td",[t._v("Switching Protocols")]),t._v(" "),v("td",[t._v("服务器将遵从客户的请求转换到另外一种协议（HTTP 1.1新）")])]),t._v(" "),v("tr",[v("td",[t._v("200")]),t._v(" "),v("td",[t._v("OK")]),t._v(" "),v("td",[t._v("一切正常，对GET和POST请求的应答文档跟在后面。")])]),t._v(" "),v("tr",[v("td",[t._v("201")]),t._v(" "),v("td",[t._v("Created")]),t._v(" "),v("td",[t._v("服务器已经创建了文档，Location头给出了它的URL。")])]),t._v(" "),v("tr",[v("td",[t._v("202")]),t._v(" "),v("td",[t._v("Accepted")]),t._v(" "),v("td",[t._v("已经接受请求，但处理尚未完成。")])]),t._v(" "),v("tr",[v("td",[t._v("203")]),t._v(" "),v("td",[t._v("Non-Authoritative Information")]),t._v(" "),v("td",[t._v("文档已经正常地返回，但一些应答头可能不正确，因为使用的是文档的拷贝（HTTP 1.1新）。")])]),t._v(" "),v("tr",[v("td",[t._v("204")]),t._v(" "),v("td",[t._v("No Content")]),t._v(" "),v("td",[t._v("没有新文档，浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而Servlet可以确定用户文档足够新，这个状态代码是很有用的。")])]),t._v(" "),v("tr",[v("td",[t._v("205")]),t._v(" "),v("td",[t._v("Reset Content")]),t._v(" "),v("td",[t._v("没有新的内容，但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容（HTTP 1.1新）。")])]),t._v(" "),v("tr",[v("td",[t._v("206")]),t._v(" "),v("td",[t._v("Partial Content")]),t._v(" "),v("td",[t._v("客户发送了一个带有Range头的GET请求，服务器完成了它（HTTP 1.1新）。")])]),t._v(" "),v("tr",[v("td",[t._v("300")]),t._v(" "),v("td",[t._v("Multiple Choices")]),t._v(" "),v("td",[t._v("客户请求的文档可以在多个位置找到，这些位置已经在返回的文档内列出。如果服务器要提出优先选择，则应该在Location应答头指明。")])]),t._v(" "),v("tr",[v("td",[t._v("301")]),t._v(" "),v("td",[t._v("Moved Permanently")]),t._v(" "),v("td",[t._v("客户请求的文档在其他地方，新的URL在Location头中给出，浏览器应该自动地访问新的URL。")])]),t._v(" "),v("tr",[v("td",[t._v("302")]),t._v(" "),v("td",[t._v("Found")]),t._v(" "),v("td",[t._v("类似于301，但新的URL应该被视为临时性的替代，而不是永久性的。注意，在HTTP1.0中对应的状态信息是“Moved Temporatily”。出现该状态代码时，浏览器能够自动访问新的URL，因此它是一个很有用的状态代码。注意这个状态代码有时候可以和301替换使用。例如，如果浏览器错误地请求http://host/~user（缺少了后面的斜杠），有的服务器 返回301，有的则返回302。严格地说，我们只能假定只有当原来的请求是GET时浏览器才会自动重定向。请参见307。")])]),t._v(" "),v("tr",[v("td",[t._v("303")]),t._v(" "),v("td",[t._v("See Other")]),t._v(" "),v("td",[t._v("类似于301/302，不同之处在于，如果原来的请求是POST，Location头指定的重定向目标文档应该通过GET提取（HTTP 1.1新）。")])]),t._v(" "),v("tr",[v("td",[t._v("304")]),t._v(" "),v("td",[t._v("Not Modified")]),t._v(" "),v("td",[t._v("客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告 诉客户，原来缓冲的文档还可以继续使用。")])]),t._v(" "),v("tr",[v("td",[t._v("305")]),t._v(" "),v("td",[t._v("Use Proxy")]),t._v(" "),v("td",[t._v("客户请求的文档应该通过Location头所指明的代理服务器提取（HTTP 1.1新）。")])]),t._v(" "),v("tr",[v("td",[t._v("307")]),t._v(" "),v("td",[t._v("Temporary Redirect")]),t._v(" "),v("td",[t._v("和302 （Found）相同。许多浏览器会错误地响应302应答进行重定向，即使原来的请求是POST，即使它实际上只能在POST请求的应答是303时才能重定 向。由于这个原因，HTTP 1.1新增了307，以便更加清除地区分几个状态代码：当出现303应答时，浏览器可以跟随重定向的GET和POST请求；如果是307应答，则浏览器只 能跟随对GET请求的重定向。（HTTP 1.1新）")])]),t._v(" "),v("tr",[v("td",[t._v("400")]),t._v(" "),v("td",[t._v("Bad Request")]),t._v(" "),v("td",[t._v("请求出现语法错误。")])]),t._v(" "),v("tr",[v("td",[t._v("401")]),t._v(" "),v("td",[t._v("Unauthorized")]),t._v(" "),v("td",[t._v("客户试图未经授权访问受密码保护的页面。应答中会包含一个WWW-Authenticate头，浏览器据此显示用户名字/密码对话框，然后在填 写合适的Authorization头后再次发出请求。")])]),t._v(" "),v("tr",[v("td",[t._v("403")]),t._v(" "),v("td",[t._v("Forbidden")]),t._v(" "),v("td",[t._v("资源不可用。服务器理解客户的请求，但拒绝处理它。通常由于服务器上文件或目录的权限设置导致。")])]),t._v(" "),v("tr",[v("td",[t._v("404")]),t._v(" "),v("td",[t._v("Not Found")]),t._v(" "),v("td",[t._v("无法找到指定位置的资源。这也是一个常用的应答。")])]),t._v(" "),v("tr",[v("td",[t._v("405")]),t._v(" "),v("td",[t._v("Method Not Allowed")]),t._v(" "),v("td",[t._v("请求方法（GET、POST、HEAD、DELETE、PUT、TRACE等）对指定的资源不适用。（HTTP 1.1新）")])]),t._v(" "),v("tr",[v("td",[t._v("406")]),t._v(" "),v("td",[t._v("Not Acceptable")]),t._v(" "),v("td",[t._v("指定的资源已经找到，但它的MIME类型和客户在Accpet头中所指定的不兼容（HTTP 1.1新）。")])]),t._v(" "),v("tr",[v("td",[t._v("407")]),t._v(" "),v("td",[t._v("Proxy Authentication Required")]),t._v(" "),v("td",[t._v("类似于401，表示客户必须先经过代理服务器的授权。（HTTP 1.1新）")])]),t._v(" "),v("tr",[v("td",[t._v("408")]),t._v(" "),v("td",[t._v("Request Timeout")]),t._v(" "),v("td",[t._v("在服务器许可的等待时间内，客户一直没有发出任何请求。客户可以在以后重复同一请求。（HTTP 1.1新）")])]),t._v(" "),v("tr",[v("td",[t._v("409")]),t._v(" "),v("td",[t._v("Conflict")]),t._v(" "),v("td",[t._v("通常和PUT请求有关。由于请求和资源的当前状态相冲突，因此请求不能成功。（HTTP 1.1新）")])]),t._v(" "),v("tr",[v("td",[t._v("410")]),t._v(" "),v("td",[t._v("Gone")]),t._v(" "),v("td",[t._v("所请求的文档已经不再可用，而且服务器不知道应该重定向到哪一个地址。它和404的不同在于，返回407表示文档永久地离开了指定的位置，而 404表示由于未知的原因文档不可用。（HTTP 1.1新）")])]),t._v(" "),v("tr",[v("td",[t._v("411")]),t._v(" "),v("td",[t._v("Length Required")]),t._v(" "),v("td",[t._v("服务器不能处理请求，除非客户发送一个Content-Length头。（HTTP 1.1新）")])]),t._v(" "),v("tr",[v("td",[t._v("412")]),t._v(" "),v("td",[t._v("Precondition Failed")]),t._v(" "),v("td",[t._v("请求头中指定的一些前提条件失败（HTTP 1.1新）。")])]),t._v(" "),v("tr",[v("td",[t._v("413")]),t._v(" "),v("td",[t._v("Request Entity Too Large")]),t._v(" "),v("td",[t._v("目标文档的大小超过服务器当前愿意处理的大小。如果服务器认为自己能够稍后再处理该请求，则应该提供一个Retry-After头（HTTP 1.1新）。")])]),t._v(" "),v("tr",[v("td",[t._v("414")]),t._v(" "),v("td",[t._v("Request URI Too Long")]),t._v(" "),v("td",[t._v("URI太长（HTTP 1.1新）。")])]),t._v(" "),v("tr",[v("td",[t._v("416")]),t._v(" "),v("td",[t._v("Requested Range Not Satisfiable")]),t._v(" "),v("td",[t._v("服务器不能满足客户在请求中指定的Range头。（HTTP 1.1新）")])]),t._v(" "),v("tr",[v("td",[t._v("500")]),t._v(" "),v("td",[t._v("Internal Server Error")]),t._v(" "),v("td",[t._v("服务器遇到了意料不到的情况，不能完成客户的请求。")])]),t._v(" "),v("tr",[v("td",[t._v("501")]),t._v(" "),v("td",[t._v("Not Implemented")]),t._v(" "),v("td",[t._v("服务器不支持实现请求所需要的功能。例如，客户发出了一个服务器不支持的PUT请求。")])]),t._v(" "),v("tr",[v("td",[t._v("502")]),t._v(" "),v("td",[t._v("Bad Gateway")]),t._v(" "),v("td",[t._v("服务器作为网关或者代理时，为了完成请求访问下一个服务器，但该服务器返回了非法的应答。")])]),t._v(" "),v("tr",[v("td",[t._v("503")]),t._v(" "),v("td",[t._v("Service Unavailable")]),t._v(" "),v("td",[t._v("服务器由于维护或者负载过重未能应答。例如，Servlet可能在数据库连接池已满的情况下返回503。服务器返回503时可以提供一个 Retry-After头。")])]),t._v(" "),v("tr",[v("td",[t._v("504")]),t._v(" "),v("td",[t._v("Gateway Timeout")]),t._v(" "),v("td",[t._v("由作为代理或网关的服务器使用，表示不能及时地从远程服务器获得应答。（HTTP 1.1新）")])]),t._v(" "),v("tr",[v("td",[t._v("505")]),t._v(" "),v("td",[t._v("HTTP Version Not Supported")]),t._v(" "),v("td",[t._v("服务器不支持请求中所指明的HTTP版本。（HTTP 1.1新）")])])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/for-GET/http-decision-diagram/master/httpdd.png",alt:""}})])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);_.default=r.exports}}]);