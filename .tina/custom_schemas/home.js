export const home = {
    label: "Homepage Texts",
    name: "home",
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
        label: "????????? ???????????? ?????? ?????????.",
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
            label: "Client Image",
            name: "icon",
            type: "image",
            parse: (media) => {
              return `${media}`; // This is how the image is saved in public/uploads
            },
            previewSrc: (fullSrc) => fullSrc.replace("/public", ""), //This is what is shown after inserted
          },
          {
            label: "Client Image Mobile",
            name: "iconMobile",
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
        label: "VIXPAY ???????????? ????????? ?????????, ??????, ???????????? ???????????? ???????????? ????????? ??? ????????????. VIXPAY ???????????? ???????????? ??????????????? ???????????? ????????? ???????????? ???????????? ???????????? ???????????? ??????????????? ????????? ??? ????????? ???????????????.",
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
        label: "VIXPAY??? e-commerce",
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