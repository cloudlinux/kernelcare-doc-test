const urls = require("./urls-mapping.js");

module.exports = {
  base: "/",

  // tracking ids
  head: [["script", { src: "https://js.hs-scripts.com/5408110.js" }]], // HubSpot
  ga: "UA-12711721-6", // google analitics
  fbPixelID: "645174729237247", // facebook pixel

  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  base: "/",
  locales: {
    "/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Documentation",
      description: "KernelCare documentation"
    },
    "/jp/": {
      lang: "jp",
      title: "ドキュメンテーション",
      description: "KernelCare ドキュメンテーション"
    }
  },
  theme: "cloudlinux",
  themeConfig: {
    repo: "cloudlinux/kernelcare-doc",
    editLinks: true,
    docsBranch: "dev",
    docsDir: "docs",

    defaultURL: "/installation/",
    redirectionMapping: urls,
    sidebarDepth: 2,
    logo: "/logo.svg",
    try_free: "https://cloudlinux.com/kernelcare-free-trial5",

    social: [
      { url: "https://www.facebook.com/kernelcare/", logo: "/fb.png" },
      { url: "https://twitter.com/kernelcare/", logo: "/tw.png" },
      { url: "https://linkedin.com/company/cloudlinux", logo: "/in.png" },
      {
        url: "https://www.youtube.com/channel/UCZ3YMHWnMP7TaxlXVay5-aw",
        logo: "/ytube.png"
      }
    ],
    cloudlinuxSite: "https://cloudlinux.com",
    locales: {
      "/": {
        // text for the language dropdown title
        title: "Language",
        // text for the language dropdown
        selectText: "En",
        // label for this locale in the language dropdown
        label: "English",
        // text for the edit-on-github link
        editLinkText: "Edit this page",
        tryFree: "Try Free",
        search: "Search",
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {
          apiKey: "9e2f9685334c9bab4a296dce7b5b77cd",
          indexName: "kernelcare"
        },
        stayInTouch: "Stay in touch",
        bottomLinks: [
          {
            text: "How to",
            url: "https://www.kernelcare.com/install-kernelcare/"
          },
          {
            text: "Sales and Technical FAQs",
            url: "https://www.kernelcare.com/faq/"
          },
          {
            text: "Contact support",
            url: "https://cloudlinux.zendesk.com/hc/en-us/requests/new"
          },
          { text: "Blog", url: "https://www.kernelcare.com/blog/" }
        ],

        sidebar: [
          {
            title: "Content",
            collapsable: false,
            children: [
              "/installation/",
              "/settings/",
              "/command_line/",
              "/config_options/",
              "/disabling_some_patches/",
              "/delayed_feed/",
              "/extra_patchset/",
              "/sticky_patches/",
              "/nagios_plugin/",
              "/zabbix_template/",
              "/upgrade/",
              "/uninstall/",
              "/technology/",
              "/AWS_deployment_guide/",
              "/reseller_partner_ui/",
              "/kernelcare_enterprise/",
              "/kcare-nexpose/",
              "/kernelcare_whmcs_plugin/",
              "/proxy_settings/",
              "/eol_ubuntu_lts_kernels_support/"
            ]
          }
        ]
      },
      "/jp/": {
        title: "ランゲージ",
        selectText: "日本人",
        label: "日本人",
        editLinkText: "編集",
        tryFree: "無料で試す",
        search: "検索する",
        serviceWorker: {
          updatePopup: {
            message: "新しいコンテンツが利用可能です",
            buttonText: "最新の情報に更新"
          }
        },
        algolia: {},
        stayInTouch: "連絡を取り合う",
        bottomLinks: [
            {
                text: "ヘルプと使い方",
                url: "https://www.kernelcare.com/install-kernelcare/"
            },
            {
                text: "よく寄せられる質問",
                url: "https://www.kernelcare.com/faq/"
            },
            {
                text: "サポート",
                url: "https://cloudlinux.zendesk.com/hc/en-us/requests/new"
            },
            { text: "ブログ", url: "https://www.kernelcare.com/blog/" }
        ],
        sidebar: [
          {
            title: "コンテンツ",
            collapsable: false,
            children: [
              "/jp/installation/",
              "/jp/settings/",
              "/jp/command_line/",
              "/jp/config_options/",
              "/jp/disabling_some_patches/",
              "/jp/delayed_feed/",
              "/jp/extra_patchset/",
              "/jp/sticky_patches/",
              "/jp/nagios_plugin/",
              "/jp/zabbix_template/",
              "/jp/upgrade/",
              "/jp/uninstall/",
              "/jp/technology/",
              "/jp/AWS_deployment_guide/",
              "/jp/kernelcare_enterprise/",
              "/jp/kcare-nexpose/",
              "/jp/kernelcare_whmcs_plugin/",
              "/jp/proxy_settings/",
              "/jp/eol_ubuntu_lts_kernels_support/"
            ]
          }
        ]
      }
    }
  }
};
