# 📊 How to Connect RESH AI Form to Your Google Sheet (2-Minute Guide)

This guide shows you how to connect the RESH AI consultation form directly to your Google Sheet so that every client submission automatically creates a new row with full details.

---

## ⚡ Step-by-Step Setup

### Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.new) and create a new blank spreadsheet.
2. Name the sheet: **RESH AI Leads**.
3. In the first row (Row 1), add these column headers:
   - **Column A:** `Timestamp`
   - **Column B:** `Name`
   - **Column C:** `Email`
   - **Column D:** `Phone`
   - **Column E:** `Company`
   - **Column F:** `Service`
   - **Column G:** `Date`
   - **Column H:** `Time`
   - **Column F:** `Notes`

---

### Step 2: Add Google Apps Script
1. In your Google Sheet top menu, click **Extensions** > **Apps Script**.
2. Delete any code in the editor and paste the following script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
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
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### Step 3: Deploy as Web App
1. At the top right of Apps Script, click the blue **Deploy** button > **New deployment**.
2. Click the gear icon (⚙️) next to "Select type" and select **Web app**.
3. Fill in:
   - **Description:** `RESH AI Form Webhook`
   - **Execute as:** `Me (your email)`
   - **Who has access:** `Anyone`  *(⚠️ Important: Must be "Anyone" so the website can submit without logging in)*
4. Click **Deploy**.
5. Google will ask for permission:
   - Click **Authorize access**.
   - Choose your Google account.
   - Click **Advanced** > **Go to RESH AI Form Webhook (unsafe)**.
   - Click **Allow**.
6. Copy the **Web App URL** (looks like: `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Step 4: Link URL into RESH AI
You can connect the URL in either of two easy ways:

1. **Option A (Instant in Browser):**
   - Click the small **Sheet Icon / Connect Google Sheet** in the booking form header or footer.
   - Paste your Web App URL and click **Save**. It will instantly persist!

2. **Option B (Environment Variable):**
   - Create a `.env` file in the project root:
     ```env
     VITE_GOOGLE_SHEET_URL=https://script.google.com/macros/s/AKfycb.../exec
     ```
   - Run `npm run build` or restart dev server.

---

## 🔒 100% Data Redundancy
Even if the internet drops or before you connect your Google Sheet URL, all form submissions are automatically backed up in browser storage (`localStorage`), so no client lead is ever lost!
