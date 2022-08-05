function doGet() {

  let template = HtmlService.createTemplateFromFile("page");

  let optionsList = SpreadsheetApp
                                .openByUrl('https://docs.google.com/spreadsheets/d/1l1BhT33vpWnW026PWOj54mQAzG0pI4rmNVyDrN-a4hA/edit#gid=1154013329')
                                .getSheetByName("Options")
                                .getDataRange()
                                .getValues();

  template.options = optionsList
                              .map(function(r) {return "<option>" + r[0] + "</option>";})
                              .join("");

  return template.evaluate();

}

function include_(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function userClicked(userInfo) {
  let ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1l1BhT33vpWnW026PWOj54mQAzG0pI4rmNVyDrN-a4hA/edit#gid=0');
  let ws = ss.getSheetByName('Data');

  ws.appendRow([userInfo.fname, userInfo.lname, userInfo.app, new Date()]);

}
