$ajaxUtils.sendGetRequest(
  allCategoriesUrl,
  function (categories) {

    var randomIndex = Math.floor(Math.random() * categories.length);
    var randomCategoryShortName = categories[randomIndex].short_name;

    $ajaxUtils.sendGetRequest(
      homeHtmlUrl,
      function (homeHtml) {

        var homeHtmlToInsertIntoMainPage =
          insertProperty(
            homeHtml,
            "randomCategoryShortName",
            "'" + randomCategoryShortName + "'"
          );

        insertHtml("#main-content", homeHtmlToInsertIntoMainPage);
      },
      false
    );

  }
);
