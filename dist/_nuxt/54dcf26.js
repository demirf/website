(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4],{251:function(t,n,e){"use strict";e.r(n);var r=e(45),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"sticky px-4 md:px-0 pt-24"},[e("div",{staticClass:"flex justify-between items-center"},[e("nuxt-link",{staticClass:"app-logo",attrs:{to:"/"}},[e("p",[t._v("\n        ferhatdemir.com\n      ")])]),t._v(" "),e("div",{staticClass:"space-x-4"},[e("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)],1)])}),[],!1,null,null,null);n.default=component.exports},252:function(t,n,e){"use strict";e.r(n);var r={components:{AppNavbar:e(251).default}},l=e(45),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"max-w-2xl mx-auto w-full"},[e("app-navbar"),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{AppNavbar:e(251).default})},253:function(t,n,e){"use strict";e.r(n);var r={props:{content:{type:Object,required:!0}},computed:{url:function(){return"/blog/".concat(this.content.slug)}}},l=e(45),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nuxt-link",{staticClass:"content-item",attrs:{to:t.url}},[e("section",[e("p",{staticClass:"text-white mb-2"},[t._v("\n      "+t._s(t.content.title)+"\n    ")]),t._v(" "),e("p",{staticClass:"text-gray-500 dark:text-zinc-400 font-normal leading-6"},[t._v("\n      "+t._s(t.content.description)+"\n    ")])])])}),[],!1,null,null,null);n.default=component.exports},266:function(t,n,e){"use strict";e.r(n);var r=e(9),l=(e(46),e(252)),c=e(253),o={components:{Page:l.default,ContentItem:c.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,t.params,n.next=3,e().fetch();case 3:return r=n.sent,n.abrupt("return",{contents:r});case 5:case"end":return n.stop()}}),n)})))()}},f=e(45),component=Object(f.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("page",[e("div",{staticClass:"mt-12"},t._l(t.contents,(function(content,t){return e("content-item",{key:t,attrs:{content:content}})})),1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ContentItem:e(253).default,Page:e(252).default})}}]);