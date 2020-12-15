(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{229:function(e,n,t){"use strict";t.r(n);var c=t(0),r=Object(c.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("Nagiosモニタリングシステムのインストールから始めます。")]),e._v(" "),t("p",[e._v("このプラグインは "),t("a",{attrs:{href:"http://patches.kernelcare.com/downloads/nagios/check_kcare",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://patches.kernelcare.com/downloads/nagios/check_kcare"),t("OutboundLink")],1),e._v(" からダウンロードすることができます。")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._v(" "),t("p",[e._v("Nagiosサービスを再起動（リスタート）し、Nagios Web UI (http://NAGIOS_IP/nagios/) にアクセスします。_Services_リンク(_Hosts_の左上)をクリックします。モニタリングスクリプトからの出力を示す文字列を見つけることができるはずです（下記のスクリーンショットをご覧ください）。")]),e._v(" "),t("p",[e._v("スクリプトオプション:")]),e._v(" "),e._m(6),e._v(" "),t("p",[e._v("KeyベースのKernelCareライセンスの設定の例は以下の通りです（IPベースのセクションはここではコメントアウトされています）。:")]),e._v(" "),t("p",[e._v("KernelCareステータスチェックサービスを関連付けるホストの例です")]),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9)])},[function(){var e=this.$createElement,n=this._self._c||e;return n("h1",{attrs:{id:"nagiosプラグイン"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nagiosプラグイン","aria-hidden":"true"}},[this._v("#")]),this._v(" Nagiosプラグイン")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("code",[this._v("check_kcare")]),this._v(" は古くなったサーバや非アクティブなサーバを監視する方法を提供するNagiosプラグインです。KernelCare Keyに割り当てられているサーバまたはパートナーアカウントのすべてのサーバに関する情報を提供できます。")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("そのプラグインを "),n("code",[this._v("/usr/lib64/nagios/plugins/")]),this._v(" ディレクトリに配置し、以下のコマンドを実行してこのスクリプトを実行可能な状態にします。:")])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("chmod +x /usr/lib64/nagios/plugins/check_kcare\n")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("以下のテンプレートから "),n("code",[this._v("kcare.cfg")]),this._v(" 設定ファイルを作成し、 "),n("code",[this._v("/etc/nagios/conf.d/")]),this._v(" ディレクトリに配置します。")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("code",[this._v("KERNELCARE_KEY")]),this._v(" の代わりにKernelCare Keyも指定する必要があります。 ライセンスがIPベースの場合、CLNアカウントの_Profile_セクションに、ログインとAPIセキュリティトークンを見つけることができます。")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("table",[t("thead",[t("tr",[t("th"),e._v(" "),t("th")])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("-k KERNELCARE_KEY")])]),e._v(" "),t("td",[e._v("KEYに関連したサーバの状況を取得")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("-l PARTNER_LOGIN --api-token TOKEN")])]),e._v(" "),t("td",[e._v("ログイン/トークンをベースとしたパートナーアカウントのすべてのサーバ状況を取得")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("-c o,u,i -- return CRITICAL")])]),e._v(" "),t("td",[e._v("カンマで区切られた o, u & i のリスト"),t("br"),t("code",[e._v("o")]),e._v(" - 非最新"),t("br"),t("code",[e._v("u")]),e._v(" - 未知のカーネル"),t("br"),t("code",[e._v("i")]),e._v(" - 非アクティブサーバ")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("-w o,u,i -- return WARNING")])]),e._v(" "),t("td",[e._v("カンマで区切られた o, u & i のリスト"),t("br"),t("code",[e._v("o")]),e._v(" - 非最新"),t("br"),t("code",[e._v("u")]),e._v(" - 未知のカーネル"),t("br"),t("code",[e._v("i")]),e._v(" - 非アクティブサーバ")])])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("define host {\n      host_name                       kcare-service\n      notifications_enabled           0\n      max_check_attempts             1\n      notification_interval           0\n      check_period                   24x7\n}\n \n \ndefine command {\n      command_name     check_kcare\n      command_line     /usr/lib64/nagios/plugins/check_kcare -k $ARG1$\n}\n \ndefine command {\n      command_name     check_kcare_opts\n      command_line     /usr/lib64/nagios/plugins/check_kcare -k $ARG1$ -c $ARG2$ -w $ARG3$\n}\ndefine command {\n      command_name     check_kcare_partner\n      command_line     /usr/lib64/nagios/plugins/check_kcare -l $ARG1$ --api-token $ARG2$\n}\n \ndefine command {\n      command_name     check_kcare_partner_opts\n      command_line     /usr/lib64/nagios/plugins/check_kcare -k $ARG1$ -l $ARG1$ --api-token $ARG2$ -c $ARG2$ -w $ARG3$\n}\n \ndefine service {\n      host_name                       kcare-service\n      service_description             KernelCare Server Status Checker By Key\n      check_command                   check_kcare!KERNELCARE_KEY\n      notifications_enabled           1\n      check_interval                 240\n      retry_interval                 60\n      max_check_attempts             4\n      notification_options           w,c,r\n      check_period                     24x7\n      notification_period             24x7\n}\n \n#define service {\n#       host_name                       kcare-service\n#       service_description             KernelCare Server Status Checker By login/token with outdated/inactive considered as critical\n#       check_command                   check_kcare_partner_opts!partner_login!partner_token!o,i!u\n#       notifications_enabled           1\n#       check_interval                  240\n#       retry_interval                  60\n#       max_check_attempts              4\n#       notification_options            w,c,r\n#       check_period                     24x7\n#       notification_period             24x7\n#}\n")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("img",{attrs:{src:"/images/nagiosservices_zoom70.png",alt:""}})])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("img",{attrs:{src:"/images/hmfile_hash_6837b862.png",alt:""}})])}],!1,null,null,null);n.default=r.exports}}]);