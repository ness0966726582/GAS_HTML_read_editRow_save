// Google Apps Script 代碼

function doGet() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('Index');
  return htmlOutput;
}

function getData(sheetName) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var data = sheet.getDataRange().getValues();
  return JSON.stringify(data);
}

// 新增編輯數據的函數
function editData(sheetName, row, col, value) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  sheet.getRange(row, col).setValue(value);
}

function editRow(sheetName, row, col, values) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var range = sheet.getRange(row + 1, 1, 1, col - 1); // 注意 col - 1
  range.setValues([values]);
}
