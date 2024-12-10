import * as CookieConsent from "vanilla-cookieconsent";

const handle = () => {
  console.log(CookieConsent.acceptedCategory("analytics"));
};

export const initCookieConsent = () => {
  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom right",
      },
    },
    categories: {
      analytics: {
        enabled: true,
      },
    },
    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "We use cookies",
            description:
              "Hello, this website uses essential cookies to ensure its proper functioning and tracking cookies to understand how you interact with it. The latter is only set after permission.",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            showPreferencesBtn: "Manage Individual preferences",
          },
          preferencesModal: {
            title: "Manage cookie preferences",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            savePreferencesBtn: "Accept current selection",
            closeIconLabel: "Close modal",
            sections: [
              {
                title: "Cookie Usage",
                description:
                  "We use cookies to ensure basic website functionality and to improve your online experience. You can choose to opt in or out of each category whenever you want.",
              },
              {
                title: "Strictly Necessary cookies",
                description:
                  "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                linkedCategory: "necessary",
              },
              {
                title: "Analytics Cookies",
                description:
                  "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
                linkedCategory: "analytics",
                cookieTable: {
                  headers: {
                    name: "Name",
                    domain: "Service",
                    description: "Description",
                    expiration: "Expiration",
                  },
                  body: [
                    {
                      name: "_ga",
                      domain: "Google Analytics",
                      description:
                        'Cookie set by <a href="#das">Google Analytics</a>.',
                      expiration: "Expires after 12 days",
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
    onConsent: handle,
    onChange: handle,
  });
};
