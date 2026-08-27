const crypto = require('crypto');

module.exports = function (migration) {

  const oldProduct = migration
    .editContentType("product")
    .name("Product");

  const product = migration
    .createContentType("publication")
    .name("Publication")
    .description(
      "Promo pages for LF publications, reports, etc. Typically link out to pubs.libraryfutures.net, but can contain fulltext themselves."
    )
    .displayField("title");

  product
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  product
    .createField("subtitle")
    .name("Subtitle")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  product
    .createField("prettyUrl")
    .name("Pretty URL")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  product
    .createField("publicationDate")
    .name("Publication date")
    .type("Date")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  product
    .createField("lawArea")
    .name("Area of Law")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 2,
        },
      },
    ])
    .disabled(true)
    .omitted(false)
    .items({
      type: "Symbol",

      validations: [
        {
          in: [
            "Competition",
            "Copyright",
            "Patent",
            "Privacy",
            "Trademark",
            "Trade Secret",
          ],
        },
      ],
    });

  product
    .createField("topic")
    .name("Topic")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 2,
        },
      },
    ])
    .disabled(true)
    .omitted(false)
    .items({
      type: "Symbol",

      validations: [
        {
          in: [
            "Creativity",
            "Innovation",
            "Litigation",
            "Machine Learning",
            "Markets",
            "Medicine",
            "Open Access",
            "Science",
            "Technology",
            "Workforce",
          ],
        },
      ],
    });

  product
    .createField("tag")
    .name("Tag")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 2,
        },
      },
    ])
    .disabled(true)
    .omitted(false)
    .items({
      type: "Symbol",

      validations: [
        {
          in: [
            "COVID",
            "Data Portability",
            "Open Source Software",
            "Open Source Hardware",
            "Pharma",
            "Digital Ownership",
            "Surveillance",
          ],
        },
      ],
    });

  product
    .createField("authors")
    .name("Author(s)")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["people"],
        },
      ],

      linkType: "Entry",
    });

  product
    .createField("type")
    .name("Type")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        in: [
          "Report",
          "Zine",
          "Guide",
          "Case study",
          "Policy paper",
          "Activity book",
          "Annual report",
          "Narrative",
          "Podcast",
        ],
      },
    ])
    .disabled(false)
    .omitted(false);

  product
    .createField("shortDescription")
    .name("Short description")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 250,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  product
    .createField("coverImage")
    .name("Cover image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  product
    .createField("fixedNav")
    .name("Fixed nav")
    .type("Boolean")
    .localized(false)
    .required(false)
    .validations([])
    .defaultValue({
      "en-US": false,
    })
    .disabled(true)
    .omitted(false);

  product
    .createField("buttonText")
    .name("Button text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  product
    .createField("buttonUrl")
    .name("Button URL")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  product
    .createField("introduction")
    .name("Introduction")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  product
    .createField("body")
    .name("Body")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "ordered-list",
          "unordered-list",
          "blockquote",
          "embedded-entry-block",
          "hyperlink",
          "embedded-entry-inline",
        ],

        message:
          "Only heading 2, heading 3, heading 4, heading 5, ordered list, unordered list, quote, block entry, link to Url, and inline entry nodes are allowed",
      },
      {
        nodes: {
          "embedded-entry-block": [
            {
              linkContentType: [
                "boxContent",
                "figure",
                "iframeContent",
                "pullQuote",
                "table",
                "codeContent",
              ],

              message: null,
            },
          ],

          "embedded-entry-inline": [
            {
              linkContentType: ["footnote"],
              message: null,
            },
          ],
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  product
    .createField("attachment")
    .name("Attachment")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkMimetypeGroup: ["attachment", "pdfdocument"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  product
    .createField("fullAuthor")
    .name("Full author list")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);
  product
    .createField("headerImage")
    .name("Header image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true)
    .linkType("Asset");
  product
    .createField("seoImage")
    .name("SEO image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true)
    .linkType("Asset");
  product
    .createField("seoDescription")
    .name("SEO description")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true);

  product
    .createField("featuredImage")
    .name("Featured image")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(true)
    .omitted(true)
    .items({
      type: "Link",
      validations: [],
      linkType: "Asset",
    });

  product
    .createField("noIndex")
    .name("Hide from web")
    .type("Boolean")
    .localized(false)
    .required(false)
    .validations([])
    .defaultValue({
      "en-US": false,
    })
    .disabled(false)
    .omitted(false);

  product.changeFieldControl("title", "builtin", "singleLine", {
    helpText: "Add the title of the product.",
  });

  product.changeFieldControl("subtitle", "builtin", "singleLine", {
    helpText:
      'Add a subtitle for the product. If the product is a podcast, use this field to add the Season and Episode information (e.g. "Season 3 Episode 11"). ',
  });

  product.changeFieldControl("prettyUrl", "builtin", "slugEditor", {
    helpText:
      "The URL slug is populated by the title of the product. You can change the URL slug here if needed to make the URL more easily sharable (for example, if the title of the product is very long).  ",
  });

  product.changeFieldControl("publicationDate", "builtin", "datePicker", {
    ampm: "24",
    format: "dateonly",
  });

  product.changeFieldControl("lawArea", "builtin", "checkbox", {
    helpText:
      "Select a primary area of law that is most relevant to this product (limit of two).",
  });

  product.changeFieldControl("topic", "builtin", "checkbox", {
    helpText:
      "Select a primary topic area that is most relevant to this product (limit of two).",
  });

  product.changeFieldControl("tag", "builtin", "checkbox", {
    helpText:
      "Select a primary tag that is most relevant to this product (limit of two).",
  });

  product.changeFieldControl("authors", "builtin", "entryLinksEditor", {
    helpText:
      "Use this area to include a link to specific Engelberg Center people on the product page. ",
    bulkEditing: false,
    showLinkEntityAction: true,
    showCreateEntityAction: false,
  });

  product.changeFieldControl("type", "builtin", "radio", {
    helpText: "Select the type of product this is.",
  });

  product.changeFieldControl("shortDescription", "builtin", "markdown", {
    helpText:
      "Use this field to provide a short description of a product. This will be used when a product is featured on the homepage and on topic pages. It should be less than 150 characters.",
  });

  product.changeFieldControl("coverImage", "builtin", "assetLinkEditor", {
    helpText:
      'Use this to add an icon that will be used in the product card when it is referenced throughout the site. Select "Add existing assets" and search for "card-icon".',
    showLinkEntityAction: true,
    showCreateEntityAction: false,
  });

  product.changeFieldControl("fixedNav", "builtin", "boolean", {
    helpText:
      "If this is a long form product (e.g. a report) select Yes to enable a navigation bar on the page. Otherwise select No if you do not want a navigation bar on the page.",
    trueLabel: "Yes",
    falseLabel: "No",
  });

  product.changeFieldControl("buttonText", "builtin", "singleLine", {
    helpText:
      'You can add a button to the product page to direct users to additional context for your product. Add the title of the button here (e.g. "Watch this video on YouTube").',
  });

  product.changeFieldControl("buttonUrl", "builtin", "singleLine", {
    helpText:
      'If you have chosen to have a button on a product page, add the URL you want the button to go to here. Include the full protocol (e.g. "https://example.com").',
  });

  product.changeFieldControl("introduction", "builtin", "markdown", {
    helpText:
      "Use this field to add an introduction to your product. This should be approximately 500 characters.",
  });

  product.changeFieldControl("body", "builtin", "richTextEditor", {
    helpText:
      "Use this to add the full body of your product here. For example, if this is a podcast you can include all of the details about the episode such as summary and guests. Use this area to add iframe content such as embedded podcasts or videos.",
  });

  product.changeFieldControl("attachment", "builtin", "assetLinkEditor", {
    helpText: "Use only if this publication will not be hosted on PressBooks",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  product.changeFieldControl("fullAuthor", "builtin", "markdown", {
    helpText:
      "Use this field to add the list of all report authors. Separate authors by comma/semicolon. Do not add their affiliation here (though you can add hyperlinks). If you are adding a podcast, add the name of the podcast.",
  });

  product.changeFieldControl("headerImage", "builtin", "assetLinkEditor", {
    helpText:
      "This image is used in the header on the right side of the screen and can be used to add an image of a report cover or the cover art for a podcast.",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  product.changeFieldControl("seoImage", "builtin", "assetLinkEditor", {});
  product.changeFieldControl("seoDescription", "builtin", "singleLine", {});
  product.changeFieldControl(
    "featuredImage",
    "builtin",
    "assetLinksEditor",
    {}
  );

  product.changeFieldControl("noIndex", "builtin", "boolean", {
    helpText:
      'Selecting "Yes" will hide this product from being indexed by search engines. The page is still visible by anyone who knows the URL.',
    trueLabel: "Yes",
    falseLabel: "No",
  });


  // Copy entries
  migration.transformEntriesToType({
    sourceContentType: 'product',
    targetContentType: 'publication',
    shouldPublish: 'preserve',
    updateReferences: false, // TODO change when not testing migrations!
    removeOldEntries: false, // TODO remove when migrating
    identityKey: function (fields) {
      const value = `${fields.title['en-US'].toString()}-${fields.publicationDate}`;
      return crypto.createHash("shake256", { outputLength: 12 }).update(value).digest('hex')
    },
    transformEntryForLocale: function (fromFields, currentLocale, { id }) {
      var newEntry = {};
      for (const key of Object.keys(fromFields)) {
        newEntry[key] = fromFields[key][currentLocale]
      }
      return newEntry;
    }
  })

  // Delete old content type
  // TODO - clear out content first
  // migration.deleteContentType("product")

};
