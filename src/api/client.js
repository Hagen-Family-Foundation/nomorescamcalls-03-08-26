/**
 * NoMoreScamCalls API Client
 * This module handles all communication with the backend API.
 * 
 * BASE_URL will be replaced in production with the actual API endpoint.
 */

// TODO: Replace with actual production API URL
const BASE_URL = "https://api.example.com";

/**
 * Helper function to make API requests with consistent error handling
 */
async function apiRequest(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    // Network error or JSON parse error
    return {
      status: 'error',
      message: 'Network error, please try again.',
    };
  }
}

/**
 * POST /v1/report-number
 * Reports a phone number as good or bad.
 * 
 * @param {Object} body - The request body
 * @param {string} body.subscriberId - Required, subscriber identifier
 * @param {string} body.moniker - Required, format "ST-12345" (2 uppercase letters, dash, 5 digits)
 * @param {string} body.reportedNumber - Required, E.164 format (starts with +, then 8-15 digits)
 * @param {string} body.reportType - Required, "good" or "bad"
 * @param {string} [body.comment] - Optional, up to 50 words
 * 
 * @returns {Promise<Object>} Response with status, reportId, normalizedNumber, aggregate on success
 */
export async function postReportNumber(body) {
  return apiRequest('/v1/report-number', {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

/**
 * POST /v1/check-call
 * Checks whether a call should be blocked or allowed.
 * 
 * @param {Object} body - The request body
 * @param {string} body.subscriberId - Required, subscriber identifier
 * @param {string} body.number - Required, E.164 format
 * 
 * @returns {Promise<Object>} Response with status, local, global, and decision info on success
 */
export async function postCheckCall(body) {
  return apiRequest('/v1/check-call', {
    method: 'POST',
    body: JSON.stringify(body),
  });
}
