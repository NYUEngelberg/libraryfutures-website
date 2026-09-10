module.exports = function (migration) {

  const eventsPage = migration
    .editContentType("eventsPage");

  eventsPage
    .createField("defaultEventImage")
    .name("Default Event Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
};
