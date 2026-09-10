module.exports = function (migration) {
  const navigation = migration
    .createContentType("navigation")
    .name("Navigation")
    .description("")
    .displayField("title");
  navigation
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  navigation
    .createField("link")
    .name("Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  navigation
    .createField("children")
    .name("Children")
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

  navigation.changeFieldControl("title", "builtin", "singleLine", {});
  navigation.changeFieldControl("link", "builtin", "singleLine", {});
  navigation.changeFieldControl("children", "builtin", "entryLinksEditor", {});
};
