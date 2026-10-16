// ================================================================
// RESH AI — Google Apps Script for Automated Google Sheets Leads
// ================================================================
// Paste this code into Google Sheets -> Extensions -> Apps Script
// Then click Deploy -> New Deployment -> Web App (Access: Anyone)

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Ensure header row exists on row 1
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Work Email",
        "Phone / WhatsApp",
        "Company Name",
        "Service Focus",
        "Preferred Date",
        "Preferred Time",
        "Project Notes"
      ]);
      // Format header row bold with purple background
      sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#F2EDFF").setFontColor("#6D28D9");
    }
    
    // Append the client submission
    sheet.appendRow([
      data.submittedAt || new Date().toLocaleString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.service || '',
      data.date || '',
      data.time || '',
      data.notes || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success", "message": "Lead saved" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
