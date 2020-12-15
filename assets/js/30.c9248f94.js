(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{204:function(t,e,_){"use strict";_.r(e);var c=_(0),s=Object(c.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),_("div",{staticClass:"tip custom-block"},[_("p",{staticClass:"custom-block-title"},[t._v("注記")]),t._v(" "),_("p",[t._v("この機能はePortalのお客様はご利用いただけません。ePortalを使用している場合、代わりに "),_("router-link",{attrs:{to:"/jp/kernelcare_enterprise/#フィード管理"}},[t._v("フィード管理")]),t._v(" をご利用ください。")],1)]),t._v(" "),_("p",[t._v("最新のパッチを使用したくない場合もあり、その代わりにどのパッチをインストールするかをコントロールしたい場合もあるかと思います。例えば2018年5月25日にリリースされたパッチをテストし、そのパッチをすべてのサーバで使用したいというような場合です。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),_("p",[t._v("これは最初にQAでパッチをテストし、後でシステムに変更を加えずにパッチを運用環境に展開する場合に非常に便利です。")]),t._v(" "),_("p",[t._v("これを行う方法は次のとおりです。:")]),t._v(" "),t._m(4),t._v(" "),_("p",[t._v("これらのパッチで問題無ければ、運用サーバ用に同じSticky Tagを設定してください。 4時間以内に運用サーバはQAサーバと同じパッチにアップデートされます。")]),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"stickyパッチ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stickyパッチ","aria-hidden":"true"}},[this._v("#")]),this._v(" Stickyパッチ")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("code",[t._v("/etc/sysconfig/kcare/kcare.conf")]),t._v(" において "),_("code",[t._v("STICKY_PATCH=250518")]),t._v(" （ddmmyyフォーマット）を設定することによって、これを実行することができます。\nこれは "),_("code",[t._v("kcarectl --update")]),t._v(" または "),_("code",[t._v("kcarectl --auto-update")]),t._v(" が呼び出された時に最新のパッチではなく、その日時点でのパッチを取得することを保証します。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("STICKY_PATCH")]),this._v(" を使用すると60日前まで戻ることができます。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("あるいは "),e("code",[this._v("STICKY_PATCH=KEY")]),this._v(" を設定することもできます。\nこの方法でCLNにおいてKernelCareキーを使用してパッチが適用される日付をコントロールすることができます。\nアップデート時に特定のサーバの登録に使用されたキーの実際の日付がCLNから（キー設定から）取得されます（IPベースのサーバではサポートされていません）。")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[t._v("すべてのサーバで "),_("code",[t._v("STICKY_PATCH=KEY")]),t._v(" を設定します。")]),t._v(" "),_("li",[t._v("一つのKeyでQAサーバを登録し、別のKeyで運用サーバを登録します。")]),t._v(" "),_("li",[t._v("その後、運用サーバの新しいアップデートを停止します。CLNで "),_("code",[t._v("yesterday")]),t._v(" に "),_("code",[t._v("Sticky Tag")]),t._v(" を設定します。 DDMMYYフォーマットでCLNのキーを編集することによってもそれを行うことができます。")]),t._v(" "),_("li",[t._v("例えば、03052018（DDMMYY形式）時点でのパッチを使用してみましょう。QAサーバKeyにそれらを設定します。次回の自動アップデートでQAサーバはそれらのパッチを入手します（自動アップデートは通常4時間毎です）。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注記")]),this._v(" "),e("p",[this._v("過去60日以内の任意の日付を選択できます。今日の日付や将来の日付を選択することはできません。")])])}],!1,null,null,null);e.default=s.exports}}]);