# KernelCare.ePortal

KernelCare.ePortalはインターネットにアクセスできない、ファイアウォールの内側にあるサーバのためのKernelCare用のWebベース管理コンソールです。これはKernelCare Enterprise製品の一部であり、オンプレミスにインストールする必要があります。


## ePortalのハードウェア要件

ePortalマシンのディスクサイズは接続されているサーバの数によって変わりません。

要件は常に同じです。:

* 100 GB 以上
* 200 GB 推奨
* SSD

:::注記
SSDは非常に重要な要件です。
:::

その他の要件に関しては、以下の構成と以下の数の接続サーバにおいてテスト済みです。:

* 次の要件の場合、接続マシンの最大数は10,000台です。:
  * VM
  * 1 VCPU
  * 1 GB RAM 
* 次の要件の場合、接続マシンの最大数は75,000台です。:
  * Core i5
  * 1 CPU
  * 4 GB RAM

## インストール

### EL6上のKernelCare.ePortal


KernelCare.ePortalをインストールするには、EL6の最小イメージから始めてください。

e-portalのインストールと作業性のために、nginx Webサーバが必要となってきます。オフィシャルnginxリポジトリからの安定版を使用することをお勧めします。:

```
$ cat > /etc/yum.repos.d/nginx.repo <<EOL
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/6/\$basearch/
gpgcheck=0
enabled=1
EOL
```

詳細は [http://nginx.org/en/linux_packages.html#stable](http://nginx.org/en/linux_packages.html#stable) をご覧ください。

KernelCare.ePortalリポジトリを設定します。:

```
$ cat > /etc/yum.repos.d/kcare-eportal.repo <<EOL
[kcare-eportal]
name=kcare-eportal
baseurl=http://repo.eportal.kernelcare.com/x86_64/
gpgkey=http://repo.cloudlinux.com/kernelcare-debian/6/conf/kcaredsa_pub.gpg
enabled=1
gpgcheck=1
EOL
```

KernelCare.eportalをインストールします。:

```
$ yum install kcare-eportal
```


### EL7上のKernelCare.ePortal


 
KernelCare.ePortalをインストールするには、EL7の最小イメージから始めてください。

e-portalのインストールと作業性のために、nginx Webサーバが必要となってきます。オフィシャルnginxリポジトリからの安定版を使用することをお勧めします。:

```
$ cat > /etc/yum.repos.d/nginx.repo <<EOL
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/\$basearch/
gpgcheck=0
enabled=1
EOL
```

詳細は [http://nginx.org/en/linux_packages.html#stable](http://nginx.org/en/linux_packages.html#stable) をご覧ください。

KernelCare.ePortalリポジトリを設定します。:

```
$ cat > /etc/yum.repos.d/kcare-eportal.repo <<EOL
[kcare-eportal]
name=KernelCare ePortal
baseurl=https://repo.eportal.kernelcare.com/x86_64.el7/
enabled=1
gpgkey=https://repo.cloudlinux.com/kernelcare/RPM-GPG-KEY-KernelCare
gpgcheck=1
EOL
```

KernelCare.eportalをインストールします。:

```
$ yum install kcare-eportal
```

## ePortalマシンでプロキシを調整する方法

ePortalマシンではコマンドラインで使用するのと同じプロキシ設定を定義する必要があります。

これを行うには <span class="notranslate">`PROXY = 'http://example.com'`</span> を次のファイルに追加します。: <span class="notranslate">`/usr/share/kcare-eportal/config/local.py`</span>

このファイルが存在しない場合、NGINXの所有者で作成してください。:

<div class="notranslate">

```
echo "PROXY = 'http://example.com'" > /usr/share/kcare-eportal/config/local.py
chown nginx:nginx /usr/share/kcare-eportal/config/local.py
```
</div>


ePortal をリスタートします。([停止とスタート](/kernelcare_enterprise/#stopping-starting) セクションを参照し、対応するOSを選択してください)。

## ユーザを管理する


 `/usr/bin/kc.eportal` ユーティリティを使用し、ポータルを管理できます。:
| | | |
|-|-|-|
|`-l` | `--list-users`| すべてのユーザを一覧表示|
|`-a` | `--add-user`| ユーザを追加|
|`-d` | `--delete-user` | ユーザを削除|
|`-c` | `--change-password`| ユーザパスワードを変更|
|`-p` | `--password` | ユーザのパスワードを指定|
|`-h` | `--help` | ヘルプを表示|
ユーザを追加するには、次のコマンドを実行します。:

```
$ kc.eportal -a admin -p AdminPassword
```

ユーザのパスワードを変更するには、次のコマンドを実行します。:

```
$ kc.eportal -c admin -p NewPassword
```

### LDAP認証


 
安全な接続をサポートすることが可能です。これを行うにはユーザログインを入力するためのkeyとして正しい接続文字列の形式を指定します。

例えば:

`uid=%s,dc=example,dc=com`

:::注記
このkeyは接続文字列では必須で、 `%s` を含める必要があります。
:::

LDAP URLを使用してセキュリティ設定と設定タイムアウトを指定することもできます。


## ePortalにアクセス


KernelCare.eportalマネジメントコンソールにアクセスするには **http://YOUR_IP/admin** に接続します。

その後、あなたのログイン名とパスワードを入力してください。

![](/images/access_eportal.png)

 [kc.eportal tool](/kernelcare_enterprise/#managing-users) を使ってあなたのログイン情報を管理することができます。

## パッチセットの展開


:::注記
ePortal ver0.8以降
:::

KernelCare.ePortalには最新のパッチをダウンロードするためのメカニズムが組み込まれています。使用を開始するには、KernelCare.ePortalナビゲーションバーの _Patch Source_ リンクをクリックしてから Settings をクリックします。パッチソースへのアクセス情報はKernelCare社もしくはその代理者から提供されます。

![](/images/eportal_dep01_1_zoom70.png)


パッチソースアクセス情報を設定すると、利用可能なパッチセットのリストが表示されます。 _Source_ リンクをクリックすると、いつでも戻ってアクセス情報を変更できます。

![](/images/eportal_dep02_1_zoom70.png)

 _[changelog]_ をクリックすると、指定されたパッチセットの変更履歴が表示されます。
 _[deploy this patch, and all before it]_ をクリックすると、このパッチセットとそれ以前のすべてのパッチセットをダウンロードし、展開します。パッチセットは正しい順序で充てていかないと、展開されません。


## Keyを管理する


新しいサーバを登録するには、サーバ登録に使用されるKernelCareキーを作成する必要があります。
Keyのリストに移動するには、左上のKernelCare ePortalロゴをクリックしてください。

![](/images/key-menu_zoom70.png)

* Keyを編集するには、 ![](/images/eportal_keys_edit.png) をクリックします。 _Edit_ タブが開きます。
* Keyを削除するには、 ![](/images/eportal_keys_remove.png) をクリックします。 Keyを削除すると、そのKeyの下にあるすべてのサーバが削除されることに注意してください。
* Keyをクリックして Servers タブに移動すると、そのKeyの下に [登録されているサーバ](/kernelcare_enterprise/#managing-servers) のリストが表示されます。そのタブでサーバを削除することもできます。

新しい登録を作成するには _Create_ タブをクリックします。
   ![](/images/key-creation_zoom70.png) 
以下のフィールドに入力してください。:

* **Key** —  Key名を入力するかフィールドを空白のままにすることができます。空白の場合、自動生成された名前が使用されます。
* **Description** — Keyの説明を入力できます。
* **Server Limit** — そのキーの下に登録可能なサーバの数
* **Feed** — 特定のフィードを選択するか、空白のままにします。

 _Save_ をクリックしてキーを追加します。新しい登録キーが作成され、リストに追加されます。Key自体は個々のサーバで登録コマンドの一部として使用されます。

 _Save and Add Another_ をクリックすると、このKeyが保存され、Keyがもう1つ追加されます。

 _Save and Continue Editing_ をクリックすると、Keyが追加され、Key編集タブが開かれます。

 _Cancel_ をクリックすると、新しいKeyを追加せずにKeyリストタブに戻ります。


## サーバの管理


 [Managing Keys](/kernelcare_enterprise/#managing-keys) のインターフェイスで Key自体をクリックすると、そのKeyに属するサーバを確認できます。

![](/images/server_list_1_zoom70.png)


画面にはKeyの下で登録されている　サーバ　IP、ホスト名、有効なカーネル、および登録時刻と最後のチェックインが表示されます。

### スクリプトの管理


:::注記
スクリプトがePortalで機能しない場合、最初にePortalをアップデートする必要があります。 ePortalをアップデートするには、次のコマンドを実行します。:

```
> yum update kcare-eportal
```
:::
特定のキーに接続されているすべてのサーバIDのリストを表示するには以下を実行します。:
* UIではKeyのリストがあるページに移動します。それから特定のKeyをクリックします。このKeyに接続されているサーバのリストが表示されます。

どのKeyにも接続されていないすべてのサーバIDのリストを表示するには、ナビゲーションバーの <span class="notranslate">_Servers_</span> ボタンを使用します。

![](/images/eportal-servers.png)


### パッチセットを展開するスクリプト


パッチセットを展開するには、次のコマンドを実行します。:

```
> kc.eportal --unroll 16012017_1
```

### KeyごとにePortalの管理下にあるサーバの数を決定するスクリプト


Keyのペア/サーバ数を確認するには、次のコマンドを実行します。:

```
> kc.eportal --list-servers
```
| | |
|-|-|
|Count | Key|
|`0` | `2shcolu7Y1x6885Q`|
|`2` | `6J89aS44j6OmTr05`|


### 最新のパッチセットを自動的にインストールするためのスクリプト

最新のパッチが利用可能かどうかを判断し、インストールします。

```
>kc.eportal --get-latest
```

### UIからパッチを展開する

 
パッチソースページには利用可能なパッチのリストがあります。パッチを展開するには _Roll back this patch, and all after it_ ボタンをクリックします。
パッチとそれ以降のすべてのパッチをロールバックするために使用します。

### 管理UIに拡張チェックイン統計を表示する

新しいテーブルが開始ページに追加されます。このテーブルには次のものが表示されます。:
* サーバの総数
* 過去48時間にチェックインしたサーバの数

各Keyのサーバ数は _Key Inventory_ テーブルに表示されます。

### 読み取り専用ユーザを作成する機能

```
[root@localhost ~]# kc.eportal -l
Num | Username
--- + --------------------------------
 1 | admin
 2 | user
[root@localhost ~]# kc.eportal -r user
User 'user' is now readonly
```

### フィード管理



フィードはサーバ上のパッチセットを管理することを目的としており、パッチセットを特定のKeyにバインドする可能性を提供します。 使用例: パッチの予備テスト、類似のハードウェアを持つサーバグループへのアップデートの適用など。

フィード管理インターフェースに入るには Settings → Feeds と進みます。:

![](/images/feed-button_zoom70.png)

このページにおいてユーザは既存のフィードを管理することができます。: 作成、削除、編集

![](/images/feed-menu_zoom70.png)

利用可能なオプション:
* Name — フィードの名前
* Auto update — このフィードへのパッチの自動ダウンロードを有効または無効にします
* Deploy after X hours — パッチセットが展開可能になってからフィードにインストールされるまでの時間

10分ごとにePortalは、メインのパッチサーバで新しいパッチをチェックしています。新しいパッチが入手可能であれば、ePortalサーバにアップロードされます。 注記: そのパッチはアップロードされていますが、展開はされていません。パッチの入手可能時間は新しいパッチがePortalに表示された時点から開始すると考えられ、その時間は `Deploy after X hours` オプションで設定されます。従って、ユーザが `Deploy after X hours = 10` と設定すると、パッチはePortalサーバにダウンロードされてから10時間後にフィードに展開されます。

フィードをすぐに自動アップデートする（つまり、ePortalで利用可能になった直後に新しいパッチがフィードにロードされるようにする）には、 `Deploy after X hours = 0` に設定します。

特別なケースとしては、ePortalが新しいサーバにインストールされている場合のクリーンインストールです（デフォルトフィードを含みパッチを含むダウンロードされたアーカイブや展開されたパッチセットを含むフィードはありません）。この場合、ユーザが新しいフィードを作成して　Deployed after X hours　オプションをすぐに設定すると、指定したX時間後にすべてのパッチ（最も古いものから最新のものまで）がフィードに展開されます。これはアーカイブが最初からダウンロードされ、「ePortalに表示されたばかり」と見なされるためです。つまりすべてのパッチはePortal上で同じ出現時刻を持ち、それ以降は Deploy after X hours オプションは無効になります。

![](/images/feedmanagement3_zoom70.png)

メインのePortalページにてユーザは対応するKey <> フィードペアを設定できます。 これはKey作成インターフェースまたはKeyを編集するときに行われます。

![](/images/feedmanagement4_zoom70.png)

デフォルトでは新しいKeyはデフォルトのフィードにバインドされています。もしくはユーザはドロップダウンメニューから目的のフィードを選択できます。

![](/images/feedmanagement5_01_zoom70.png)

:::注記
フィードを削除すると、このフィードに添付されているすべてのKeyがデフォルトのフィードに移動します。
:::

![](/images/feedmanagement6_zoom70.png)

### 追加タグフィールドを追加する


 
サーバに追加タグフィールドを追加するには、次のコマンドを実行します。:

```
kcarectl --tag command
```

この `command` はユーザが定義したパラメーターです。このパラメータはサーバのUIに表示されます。ユーザは各サーバに複数のタグを追加できます。各タグは `;` で区切る必要があります。

例:

```
kcarectl --tag “env:prod;ubuntu”
```

このサーバには2つのタグがあります。: `env:prod` と `ubuntu`.

`env:prod` はタグ名 `env` と 値 `prod`　を持つパラメータです。

![](/images/addingextratagfield_zoom88.png)

特定のサーバからすべてのタグを削除するには、次のコマンドを実行します。:

```
kcarectl --tag ""
```

この `""` は以前に定義したタグを削除するためのパラメータです。


### HTTPSを使用するePortalを設定する方法


e-portalが展開されているサーバに関するいくつかの前提条件:

1. ファイアウォールが443ポートで無効になっている。
2. プライベートKeyとパブリックKeyがサーバにダウンロードされている。

* 証明書に従ってSSL設定テンプレートを編集します。:

```
mv /etc/nginx/eportal.ssl.conf.example /etc/nginx/eportal.ssl.conf
vi /etc/nginx/eportal.ssl.conf
```

* この設定をメインの設定に含めます。:

```
sed -e '3iinclude eportal.ssl.conf;' -i /etc/nginx/conf.d/eportal.conf
```

* nginxをリスタートします。:

```
service nginx restart
```

アップデートされたhttps、e-portalと通信するためには、IPがハードコードされたサーバ設定がある場合、すべてのサーバ上のKernelCare設定ファイルを変更する必要があります。

そうするためには `PATCH_SERVER` 環境変数と `REGISTRATION_URL` 環境変数をアップデートします。:

```
vi /etc/sysconfig/kcare/kcare.conf
```

したがって `/etc/sysconfig/kcare/kcare.conf` を編集した後、以下の例のようにアップデートされた `PATCH_SERVER` および `REGISTRATION_URL` 環境変数を含める必要があります。:

```
PATCH_SERVER=https://eportal_domain_name/
REGISTRATION_URL=https://eportal_domain_name/admin/api/kcare
```


次の例はhttps用に設定されたe-portalに新しいサーバを接続する方法を示しています。:

```
$ export KCARE_PATCH_SERVER=https://eportal_domain_name/
$ export KCARE_REGISTRATION_URL=https://eportal_domain_name/admin/api/kcare
$ export KCARE_MAILTO=admin@mycompany.com
$ curl -s https://repo.cloudlinux.com/kernelcare/kernelcare_install.sh | bash
$ /usr/bin/kcarectl --register key_from_your_eportal
```

## KernelCareの展開


ePortalを使用するために、kernelcareクライアントソフトウェアを展開するには、RPMをインストールする前に以下の環境変数を設定する必要があります。:

| |  | |
|-|--|-|
|**環境変数** | **値** | **説明**|
|`KCARE_PATCH_SERVER` | http://eportal_ip/ | パッチのダウンロード元となるサーバのURL|
|`KCARE_REGISTRATION_URL` | http://eportal_ip/admin/api/kcare | ePortalのapiのURL|
|`KCARE_MAILTO [ver2.5以降]` | email@address | KernelCareアップデートの失敗に関連する全ての通知を受け取るEmailアドレス。 `/etc/cron.d/kcare-cron`　で使用。|

例:

```
$ export KCARE_PATCH_SERVER=http://10.1.10.115/
$ export KCARE_REGISTRATION_URL=http://10.1.10.115/admin/api/kcare
$ export KCARE_MAILTO=admin@mycompany.com
$ curl -s https://repo.cloudlinux.com/kernelcare/kernelcare_install.sh | bash
$ kcarectl --register r72fF838Q47oWigj
```

## KernelCareクライアント設定ファイル


KernelCareクライアント設定ファイルは `/etc/sysconfig/kcare/kcare.conf` にあります。

例:

```
AUTO_UPDATE=True
PATCH_SERVER=http://10.1.10.115/
REGISTRATION_URL=http://10.1.10.115/admin/api/kcare
```

`AUTO_UPDATE` が `True` に設定されている場合、KernelCareクライアントは4時間ごとにチェックインし、最新のパッチをダウンロードして適用しようとします。

`PATCH_SERVER` - パッチのダウンロード元となるサーバ

`REGISTRATION_URL` - サーバの登録/登録解除に使用されるURL


## ePortal IP の変更


ePortal IPはいつでも変更できますが、IPがハードコードされている場合、すべてのサーバ上のKernelCare設定ファイルを変更する必要があります。

これを行うには `/etc/sysconfig/kcare/kcare.conf` を編集します。

変更:

```
PATCH_SERVER=http://10.1.10.115/
REGISTRATION_URL=http://10.1.10.115/admin/api/kcare
```

正しいロケーションを指定します。


## 設定とロケーション


Webサーバ（nginx）の設定は `/etc/nginx/conf.d/eportal.conf` にあります。

データベース（sqlite）は `/usr/share/kcare-eportal/data.sqlite` に保管されています。
データベースをリセットするには、次のコマンドを実行します。:

```
$ rm /usr/share/kcare-eportal/data.sqlite
$ cd /usr/share/kcare-eportal && python createdb.py
```

サーバがパッチにアクセスできるかどうかを判断するために使用されるクライアントアクセスデータファイルは、 `/usr/share/kcare-eportal/kcare_servers.htpasswd` に格納されています。

パッチは `/usr/share/kcare-eportal/patches` に格納されています。


## 停止とスタート


### EL6上のKernelCare.ePortal



nginxサーバの設定を 停止/スタート/再読み込み/再スタート するには次のコマンドを実行します。:

```
$ /etc/init.d/nginx stop|start|reload|restart
```

ePortalを 停止/スタート/再スタート するには、次のコマンドを実行します。（Python）:

```
$ /etc/init.d/uwsgi stop|start|restart
```


### EL7上のKernelCare.ePortal



nginxサーバの設定を 停止/スタート/再読み込み/再スタート するには次のコマンドを実行します。:

```
$ systemctl stop|start|reload|restart nginx
```

ePortalを 停止/スタート/再スタート するには、次のコマンドを実行します。（Python）:

```
$ systemctl stop|start|restart emperor.uwsgi
```


## ログファイル


ePortal メッセージ/エラー: `/var/log/uwsgi/uwsgi-emperor.log`

nginx ePortal アクセスログ: `/var/log/nginx/kcare-eportal.log`

nginx エラーログ: `/var/log/nginx/error_log`


## ePortal API


:::注記
ver0.9以降
:::

KernelCare.ePortalはKeyとIPに基づいてサーバを削除するための限定されたAPIを提供します。

APIにアクセスするには最初に認証に使用されるAPIトークンを設定します。:

`echo your_token > /usr/share/kcare-eportal/config/api.token`

APIメソッド: `unregister_by_key.plain`

パラメーター:

* key - サーバが登録されているKernelCare.ePortalのKey;
* IP - KernelCare.ePortalに表示されるリモートサーバのIP;
* token - APIトークン

例:

```
https://ePortal_url/admin/api/kcare/unregister_by_key.plain?key=2M6gmIS6fHh39aF2&ip=10.1.10.74&token=your_token
```

リターンコード: int型
* `-3` - APIトークンファイルが存在しません。;
* `-2` - APIトークンが一致しません。;
* `-1` - 内部エラー。詳細は `/var/log/uwsgi/uwsgi-emperor.log` を参照してください。;
* その他の数 - 削除されたサーバの数。

## Nagios と Zabbixのサポート


バージョン1.2以降のKernelCare.ePortalは [Nagios](/nagios_plugin/) および [Zabbix](/zabbix_template/) モニターと同様のサーバモニターをサポートしています。

APIを直接カールして情報を受け取ることができます:

```
https://yourserver/admin/api/kcare/nagios/KCAREKEY
```

または [http://patches.kernelcare.com/downloads/nagios/check_kcare](http://patches.kernelcare.com/downloads/nagios/check_kcare) スクリプトを使用して、自分のサーバを指すように KEY_KCARE_NAGIOS_ENDPOINT を変更することもできます ( [https://cln.cloudlinux.com/clweb](https://cln.cloudlinux.com/clweb) （古いUIへのリンク）を変更、または [https://cln.cloudlinux.com/console/auth/login](https://cln.cloudlinux.com/console/auth/login) （新しいUIへのリンク）とともに [https://yourserver/admin](https://yourserver/admin) を変更)。

:::注記
 `PARTNER_LOGIN/TOKEN` を使用したアクセスはKernelCare.ePortalではサポートされていません。
:::

