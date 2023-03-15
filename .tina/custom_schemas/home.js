export const home = {
    label: "Homepage Texts",
    name: "homepage_texts_fetch",
    path: "content/home",
    format: "json",
    fields: [
      {
        label: "Hero Title",
        name: "hero_title",
        type: "string",
      },
      {
        label: "Hero Subtitle",
        name: "hero_subtitle",
        type: "string",
      },
      {
        label: "App Store",
        name: "app_store",
        type: "string",
      },
      {
        label: "Google play",
        name: "play_market",
        type: "string",
      },
      {
        label: "About VIXPAY",
        name: "about_vixpay",
        type: "string",
      },
      {
        label: "About VIXPAY text",
        name: "about_vixpay_text",
        type: "string",
      },
      {
        label: "About VIXPAY subtext",
        name: "about_vixpay_subtext",
        type: "string",
      },
      {
        label: "VIXPAY Blockchain Network",
        name: "vixpay_blockchain",
        type: "string",
      },
      {
        label: "Cryptocurrency ecosystem for your business",
        name: "vixpay_blockchain_text",
        type: "string",
      },
      {
        label: "VIXPAY Blockchain Network text",
        name: "vixpay_blockchain_subtext",
        type: "string",
      },
      {
        label: "Learn more",
        name: "learn",
        type: "string",
      },
      {
        label: "VIXPAY Payment System",
        name: "vixpay_payment_system",
        type: "string",
      },
      {
        label: "VIXPAY Payment System title",
        name: "vixpay_payment_system_title",
        type: "string",
      },
      {
        label: "VIXPAY Blockchain Network text",
        name: "vixpay_payment_system_text",
        type: "string",
      },
      {
        label: "VIXPAY Payment subtext",
        name: "vixpay_payment_system_subtext",
        type: "string",
      },
      {
        label: "Clients",
        name: "clients",
        type: "string",
      },
      {
        label: "Our clients",
        name: "clients_text",
        type: "string",
      },
      {
        label: "최고의 파트너와 함께 합니다.",
        name: "clients_subtext",
        type: "string",
      },
      {
        label: "Clients Items",
        name: "clients_items",
        type: "object",
        list: true,
        ui: {
          itemProps: (item) => {
            return { label: item?.title };
          },
          router: ({ document }) => {
            return `${document._sys.filename}`
          },
        },
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
          },
          {
            label: "Description",
            name: "description",
            type: "string",
            ui: {
              component: "textarea",
            },
          },
          {
            label: "Icon",
            name: "icon",
            type: "image",
            parse: (media) => {
              return `${media}`; // This is how the image is saved in public/uploads
            },
            previewSrc: (fullSrc) => fullSrc.replace("/public/assets/images", ""), //This is what is shown after inserted
          },
          {
            label: "Icon mobile",
            name: "icon_mobile",
            type: "image",
            parse: (media) => {
              return `${media}`; // This is how the image is saved in public/uploads
            },
            previewSrc: (fullSrc) => fullSrc.replace("/public", ""), //This is what is shown after inserted
          },
          
        ],
      },
      {
        label: "Service",
        name: "service",
        type: "string",
      },
      {
        label: "VIXPAY Solutions",
        name: "service_text",
        type: "string",
      },
      {
        label: "VIXPAY 솔루션을 이용해 사업자, 상점, 소비자를 통합하는 서비스를 제공할 수 있습니다. VIXPAY 솔루션은 온라인과 오프라인을 통합하고 다양한 사용자를 연결하는 독창적인 비즈니스 아이디어를 실현할 수 있도록 제공합니다.",
        name: "service_subtext",
        type: "string",
      },
      {
        label: "Service Items",
        name: "service_items",
        type: "object",
        list: true,
        ui: {
          itemProps: (item) => {
            return { label: item?.title };
          },
        },
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
          },
          {
            label: "Description",
            name: "description",
            type: "string",
            ui: {
              component: "textarea",
            },
          },
          {
            label: "Icon",
            name: "icon",
            type: "image",
            parse: (media) => {
              return `${media}`; // This is how the image is saved in public/uploads
            },
            previewSrc: (fullSrc) => fullSrc.replace("/public", ""), //This is what is shown after inserted
          }
        ],
      },
      {
        label: "FAQ",
        name: "faq",
        type: "string",
      },
      {
        label: "Frequently asked questions",
        name: "faq_text",
        type: "string",
      },
      {
        label: "FAQ subtext",
        name: "faq_subtext",
        type: "string",
      },
      {
        label: "Contact Us",
        name: "contact",
        type: "string",
      },
      {
        label: "Get started with VIXPAY",
        name: "contact_text",
        type: "string",
      },
      {
        label: "VIXPAY은 e-commerce",
        name: "contact_subtext",
        type: "string",
      },
      {
        label: "Location",
        name: "location",
        type: "string",
      },
      {
        label: "Location image",
        name: "location_image",
        type: "image",
      },
      {
        label: "Location subtext",
        name: "location_subtext",
        type: "string",
      },
      {
        label: "Tel",
        name: "tel",
        type: "string",
      },
      {
        label: "Tel Image",
        name: "tel_image",
        type: "image",
      },
      {
        label: "Tel subtext",
        name: "tel_subtext",
        type: "string",
      },
      {
        label: "Email",
        name: "email_input",
        type: "string",
      },

      {
        label: "Name",
        name: "name_input",
        type: "string",
      },
      {
        label: "Inquiry",
        name: "inquiry_input",
        type: "string",
      },
      {
        label: "Company Profile",
        name: "company",
        type: "string",
      },
      {
        label: "Company Introduction",
        name: "company_text",
        type: "string",
      },
      {
        label: "Company subtext",
        name: "company_subtext",
        type: "string",
      },
      {
        label: "Download Document",
        name: "company_button",
        type: "string",
      },
      {
        label: "Service",
        name: "company_button_icon",
        type: "image",
      },
    ],
  };