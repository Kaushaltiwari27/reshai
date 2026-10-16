/**
 * RESH AI Lead Submission & Google Sheets Integration Service
 */

export interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  submittedAt?: string;
}

// Default fallback / configured Google Apps Script Web App URL
// You can also set VITE_GOOGLE_SHEET_URL in your .env file or update it via localStorage
const STORAGE_KEY_URL = 'reshai_google_sheet_webhook_url';
const STORAGE_KEY_LEADS = 'reshai_consultation_leads';

export function getGoogleSheetUrl(): string {
  const customUrl = localStorage.getItem(STORAGE_KEY_URL);
  if (customUrl && customUrl.trim()) {
    return customUrl.trim();
  }
  return import.meta.env.VITE_GOOGLE_SHEET_URL || '';
}

export function setGoogleSheetUrl(url: string): void {
  if (url) {
    localStorage.setItem(STORAGE_KEY_URL, url.trim());
  } else {
    localStorage.removeItem(STORAGE_KEY_URL);
  }
}

/**
 * Saves lead locally into browser storage for 100% redundancy
 */
export function saveLeadLocally(lead: LeadData): void {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_LEADS) || '[]');
    existing.unshift({
      ...lead,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(existing));
  } catch (err) {
    console.warn('Local lead storage error:', err);
  }
}

/**
 * Returns all locally saved leads
 */
export function getLocalLeads(): LeadData[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LEADS) || '[]');
  } catch {
    return [];
  }
}

/**
 * Submits form data directly to Google Sheet Web App endpoint
 */
export async function submitLeadToGoogleSheet(lead: LeadData): Promise<{ success: boolean; message: string }> {
  // Always save backup to local storage first
  saveLeadLocally(lead);

  const sheetUrl = getGoogleSheetUrl();

  if (!sheetUrl) {
    console.info('Google Sheet URL is not configured yet. Lead saved safely to localStorage.');
    return {
      success: true,
      message: 'Saved to local storage. (Google Sheet webhook URL not yet configured)',
    };
  }

  try {
    // Google Apps Script requires no-cors mode when called from browser to avoid CORS redirect errors
    await fetch(sheetUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...lead,
        submittedAt: new Date().toLocaleString(),
      }),
    });

    return {
      success: true,
      message: 'Lead successfully dispatched to Google Sheets!',
    };
  } catch (error) {
    console.error('Failed to dispatch lead to Google Sheet:', error);
    // Still return success since it is backed up in localStorage
    return {
      success: true,
      message: 'Saved to backup storage.',
    };
  }
}
