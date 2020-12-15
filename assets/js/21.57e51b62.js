(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{212:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("KernelCareの追加パッチセットにはCentOS 6およびCentOS 7用のKernelCareからのすべてのセキュリティ修正およびCentOS 6用のシンボリックリンク保護とIPSetバグ修正が含まれています。")]),t._v(" "),n("p",[t._v("追加のパッチを有効にしてパッチを適用するには、次のコマンドを実行してください。:")]),t._v(" "),t._m(2),n("p",[t._v("アップデートせずに追加のパッチを適用するには、次のコマンドを実行してください。:")]),t._v(" "),t._m(3),n("p",[t._v("次回の自動アップデートにおいて「追加の」パッチが適用されます。")]),t._v(" "),n("p",[t._v("詳細を見るには、次のコマンドを実行してください。:")]),t._v(" "),t._m(4),n("p",[t._v("以下のようなものが見えるはずです。:")]),t._v(" "),t._m(5),n("p",[t._v("Symlink Owner Match Protectionを有効にするには、次のコマンドを実行してください。:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("p",[t._v("次のコマンドを実行してください。:")]),t._v(" "),t._m(8),n("p",[t._v("より詳細について "),n("a",{attrs:{href:"http://docs.cloudlinux.com/index.html?symlink_owner_match_protection.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://docs.cloudlinux.com/index.html?symlink_owner_match_protection.html"),n("OutboundLink")],1),t._v(" を参照ください。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"追加のパッチセット"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#追加のパッチセット","aria-hidden":"true"}},[this._v("#")]),this._v(" 追加のパッチセット")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注記")]),this._v(" "),e("p",[this._v("KernelCare 2.12-5以降")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("kcarectl --set-patch-type extra --update\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("kcarectl --set-patch-type extra\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("kcarectl --patch-info\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("OS: centos6\nkernel: kernel-2.6.32-696.6.3.el6\ntime: 2017-07-31 22:46:22\nuname: 2.6.32-696.6.3.el6\n \nkpatch-name: 2.6.32/symlink-protection.patch\nkpatch-description: symlink protection // If you see this patch, it mean that you can enable symlink protection.\nkpatch-kernel: kernel-2.6.32-279.2.1.el6\nkpatch-cve: N/A\nkpatch-cvss: N/A\nkpatch-cve-url: N/A\nkpatch-patch-url: https://gerrit.cloudlinux.com/#/c/16508/\n \nkpatch-name: 2.6.32/symlink-protection.kpatch-1.patch\nkpatch-description: symlink protection (kpatch adaptation)\nkpatch-kernel: kernel-2.6.32-279.2.1.el6\nkpatch-cve: N/A\nkpatch-cvss: N/A\nkpatch-cve-url: N/A\nkpatch-patch-url: https://gerrit.cloudlinux.com/#/c/16508/\n \nkpatch-name: 2.6.32/ipset-fix-list-shrinking.patch\nkpatch-description: fix ipset list shrinking for no reason\nkpatch-kernel: N/A\nkpatch-cve: N/A\nkpatch-cvss: N/A\nkpatch-cve-url: N/A\nkpatch-patch-url: https://bugs.centos.org/view.php?id=13499\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Fs.enforce_symlinksifowner =1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("を "),e("code",[this._v("/etc/sysconfig/kcare/sysctl.conf")]),this._v(" に設定してください。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sysctl -w fs.enforce_symlinksifowner=1\n")])])])}],!1,null,null,null);e.default=a.exports}}]);