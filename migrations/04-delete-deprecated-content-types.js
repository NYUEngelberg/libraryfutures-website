module.exports = function (migration) {
  migration.deleteContentType("codeContent");
  migration.deleteContentType("communityBooks");
  migration.deleteContentType("footnote");
  //migration.deleteContentType("project");
};
