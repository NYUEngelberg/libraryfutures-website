module.exports = function (migration) {
  const index = migration
    .createContentType("index")
    .name("Landing page")
    .description("")
    .displayField("heroHeading");

  index
    .createField("topNavigation")
    .name("Top navigation")
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
          linkContentType: ["navigation"],
        },
      ],

      linkType: "Entry",
    });

  index
    .createField("heroBadge")
    .name("Hero badge")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("heroImage")
    .name("Hero image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  index
    .createField("heroHeading")
    .name("Hero heading")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  index
    .createField("heroBody")
    .name("Hero body")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: [
          "bold",
          "italic",
          "underline",
          "code",
          "superscript",
          "subscript",
          "strikethrough",
        ],

        message:
          "Only bold, italic, underline, code, superscript, subscript, and strikethrough marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "table",
          "asset-hyperlink",
          "embedded-entry-inline",
          "entry-hyperlink",
          "hyperlink",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, Unordered list, horizontal rule, quote, block entry, asset, table, link to asset, inline entry, link to entry, and link to Url nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  index
    .createField("heroCardTitle")
    .name("Hero card title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("heroCardLink1Text")
    .name("Hero card link 1 text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("heroCardLink1Link")
    .name("Hero card link 1 link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("heroCardLink2Text")
    .name("Hero card link 2 text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("heroCardLink2Link")
    .name("Hero card link 2 link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("newsletterSignupTitle")
    .name("Newsletter signup title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("newsletterSignupText")
    .name("Newsletter signup text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("newsletterSignupButtonText")
    .name("Newsletter signup button text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("learnMoreTitle")
    .name("Learn more title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("learnMoreButtonText")
    .name("Learn more button text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("learnMoreButtonLink")
    .name("Learn more button link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("aboutTitle")
    .name("About title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("aboutSubtitle")
    .name("About subtitle")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("aboutLeftCardTitle")
    .name("About left card title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  index
    .createField("aboutLeftCardText")
    .name("About left card text")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: [
          "bold",
          "italic",
          "underline",
          "code",
          "superscript",
          "subscript",
          "strikethrough",
        ],

        message:
          "Only bold, italic, underline, code, superscript, subscript, and strikethrough marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "table",
          "asset-hyperlink",
          "embedded-entry-inline",
          "entry-hyperlink",
          "hyperlink",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, Unordered list, horizontal rule, quote, block entry, asset, table, link to asset, inline entry, link to entry, and link to Url nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  index
    .createField("aboutLeftCardIcon")
    .name("About left card icon")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("aboutRightCardTitle")
    .name("About right card title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  index
    .createField("aboutRightCardText")
    .name("About right card text")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: [
          "bold",
          "italic",
          "underline",
          "code",
          "superscript",
          "subscript",
          "strikethrough",
        ],

        message:
          "Only bold, italic, underline, code, superscript, subscript, and strikethrough marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "table",
          "asset-hyperlink",
          "embedded-entry-inline",
          "entry-hyperlink",
          "hyperlink",
        ],

        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, Unordered list, horizontal rule, quote, block entry, asset, table, link to asset, inline entry, link to entry, and link to Url nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  index
    .createField("aboutRightCardIcon")
    .name("About right card icon")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("aboutSectionButtonText")
    .name("About section button text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("aboutSectionButtonLink")
    .name("About section button link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("updatesTitle")
    .name("Updates title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("updatesSubtitle")
    .name("Updates subtitle")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("updatesSectionPostLinkText")
    .name("Updates section post link text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("updatesSectionEventLinkText")
    .name("Updates section event link text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("featuredTitle")
    .name("Featured title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("featuredSubtitle")
    .name("Featured subtitle")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  index
    .createField("featuredCards")
    .name("Featured cards")
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
          linkContentType: ["news", "event", "publication"],
        },
      ],

      linkType: "Entry",
    });

  index
    .createField("featuredSectionLinkText")
    .name("Featured section link text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("featuredSectionLinkUrl")
    .name("Featured section link url")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("donateSectionTitle")
    .name("Donate section title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  index
    .createField("donateSectionText")
    .name("Donate section text")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold"],
        message: "Only bold marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "blockquote",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
        ],

        message:
          "Only heading 1, quote, link to Url, link to entry, and link to asset nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  index
    .createField("donateButtonText")
    .name("Donate button text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("donateSectionTitle1")
    .name("Donate section title 1")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("donateSectionSubtext1")
    .name("Donate section subtext 1")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("donateSectionTitle2")
    .name("Donate section title 2")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("donateSectionSubtext2")
    .name("Donate section subtext 2")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("donateSectionTitle3")
    .name("Donate section title 3")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("donateSectionSubtext3")
    .name("Donate section subtext 3")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("donateSectionTitle4")
    .name("Donate section title 4")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("donateSectionSubtext4")
    .name("Donate section subtext 4")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("footerText")
    .name("Footer text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  index
    .createField("footerNav")
    .name("Footer nav")
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
          linkContentType: ["navigation"],
        },
      ],

      linkType: "Entry",
    });

  index
    .createField("footerCopyright")
    .name("Footer copyright")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index
    .createField("footerEngelbergLinkText")
    .name("Footer Engelberg link text")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  index.changeFieldControl("topNavigation", "builtin", "entryLinksEditor", {});
  index.changeFieldControl("heroBadge", "builtin", "singleLine", {});
  index.changeFieldControl("heroImage", "builtin", "assetLinkEditor", {});
  index.changeFieldControl("heroHeading", "builtin", "singleLine", {});
  index.changeFieldControl("heroBody", "builtin", "richTextEditor", {});
  index.changeFieldControl("heroCardTitle", "builtin", "singleLine", {});
  index.changeFieldControl("heroCardLink1Text", "builtin", "singleLine", {});
  index.changeFieldControl("heroCardLink1Link", "builtin", "singleLine", {});
  index.changeFieldControl("heroCardLink2Text", "builtin", "singleLine", {});
  index.changeFieldControl("heroCardLink2Link", "builtin", "singleLine", {});
  index.changeFieldControl(
    "newsletterSignupTitle",
    "builtin",
    "singleLine",
    {}
  );
  index.changeFieldControl("newsletterSignupText", "builtin", "singleLine", {});
  index.changeFieldControl(
    "newsletterSignupButtonText",
    "builtin",
    "singleLine",
    {}
  );
  index.changeFieldControl("learnMoreTitle", "builtin", "singleLine", {});
  index.changeFieldControl("learnMoreButtonText", "builtin", "singleLine", {});
  index.changeFieldControl("learnMoreButtonLink", "builtin", "singleLine", {});
  index.changeFieldControl("aboutTitle", "builtin", "singleLine", {});
  index.changeFieldControl("aboutSubtitle", "builtin", "singleLine", {});
  index.changeFieldControl("aboutLeftCardTitle", "builtin", "singleLine", {});
  index.changeFieldControl(
    "aboutLeftCardText",
    "builtin",
    "richTextEditor",
    {}
  );
  index.changeFieldControl("aboutLeftCardIcon", "builtin", "markdown", {});
  index.changeFieldControl("aboutRightCardTitle", "builtin", "singleLine", {});
  index.changeFieldControl(
    "aboutRightCardText",
    "builtin",
    "richTextEditor",
    {}
  );
  index.changeFieldControl("aboutRightCardIcon", "builtin", "markdown", {});
  index.changeFieldControl(
    "aboutSectionButtonText",
    "builtin",
    "singleLine",
    {}
  );
  index.changeFieldControl(
    "aboutSectionButtonLink",
    "builtin",
    "singleLine",
    {}
  );
  index.changeFieldControl("updatesTitle", "builtin", "singleLine", {});
  index.changeFieldControl("updatesSubtitle", "builtin", "singleLine", {});
  index.changeFieldControl(
    "updatesSectionPostLinkText",
    "builtin",
    "singleLine",
    {}
  );
  index.changeFieldControl(
    "updatesSectionEventLinkText",
    "builtin",
    "singleLine",
    {}
  );
  index.changeFieldControl("featuredTitle", "builtin", "singleLine", {});
  index.changeFieldControl("featuredSubtitle", "builtin", "singleLine", {});
  index.changeFieldControl("featuredCards", "builtin", "entryLinksEditor", {});
  index.changeFieldControl(
    "featuredSectionLinkText",
    "builtin",
    "singleLine",
    {}
  );
  index.changeFieldControl(
    "featuredSectionLinkUrl",
    "builtin",
    "singleLine",
    {}
  );
  index.changeFieldControl("donateSectionTitle", "builtin", "singleLine", {});
  index.changeFieldControl(
    "donateSectionText",
    "builtin",
    "richTextEditor",
    {}
  );
  index.changeFieldControl("donateButtonText", "builtin", "singleLine", {});
  index.changeFieldControl("donateSectionTitle1", "builtin", "singleLine", {});
  index.changeFieldControl(
    "donateSectionSubtext1",
    "builtin",
    "singleLine",
    {}
  );
  index.changeFieldControl("donateSectionTitle2", "builtin", "singleLine", {});
  index.changeFieldControl(
    "donateSectionSubtext2",
    "builtin",
    "singleLine",
    {}
  );
  index.changeFieldControl("donateSectionTitle3", "builtin", "singleLine", {});
  index.changeFieldControl(
    "donateSectionSubtext3",
    "builtin",
    "singleLine",
    {}
  );
  index.changeFieldControl("donateSectionTitle4", "builtin", "singleLine", {});
  index.changeFieldControl(
    "donateSectionSubtext4",
    "builtin",
    "singleLine",
    {}
  );
  index.changeFieldControl("footerText", "builtin", "singleLine", {});
  index.changeFieldControl("footerNav", "builtin", "entryLinksEditor", {});
  index.changeFieldControl("footerCopyright", "builtin", "singleLine", {});
  index.changeFieldControl(
    "footerEngelbergLinkText",
    "builtin",
    "singleLine",
    {}
  );
};
