/* Gets the background hex codes of each cell in the specified range

   String:range, DynamicRange:range2
    e.g. =getBackgroundHexCodesRange("A1:B1", A1:B1)
                                      ^^ both of these args must be the same, the only difference is the data type
*/

function getBackgroundHexCodesRange(range,range2) {  
  return SpreadsheetApp.getActiveSpreadsheet()
          .getActiveSheet()
            .getRange(range2)
              .getBackgrounds();
}
