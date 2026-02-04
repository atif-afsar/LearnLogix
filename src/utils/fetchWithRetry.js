/**
 * Fetches data from an API with retry logic and timeout handling
 * This is especially useful for backends that may be sleeping (e.g., Render free tier)
 * 
 * @param {string} url - The URL to fetch from
 * @param {Object} options - Fetch options (same as standard fetch)
 * @param {number} maxRetries - Maximum number of retry attempts (default: 3)
 * @param {number} timeout - Request timeout in milliseconds (default: 10000)
 * @param {number} retryDelay - Initial delay between retries in milliseconds (default: 1000)
 * @returns {Promise<Response>} - The fetch response
 */
export const fetchWithRetry = async (
  url,
  options = {},
  maxRetries = 3,
  timeout = 10000,
  retryDelay = 1000
) => {
  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    let abortController;
    let timeoutId;

    try {
      // Create AbortController for timeout handling
      abortController = new AbortController();
      
      // Set up timeout
      const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
          abortController.abort();
          reject(new Error('Request timeout'));
        }, timeout);
      });

      // Race between fetch and timeout
      const fetchPromise = fetch(url, {
        ...options,
        signal: abortController.signal,
      });

      const response = await Promise.race([fetchPromise, timeoutPromise]);
      
      // Clear timeout if fetch succeeds
      clearTimeout(timeoutId);

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      // Clear timeout on error
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      lastError = error;

      // Don't retry on the last attempt
      if (attempt < maxRetries) {
        // Exponential backoff: wait longer between each retry
        const delay = retryDelay * Math.pow(2, attempt);
        console.log(
          `Fetch attempt ${attempt + 1} failed for ${url}. Retrying in ${delay}ms...`,
          error.message
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        console.error(`All ${maxRetries + 1} fetch attempts failed for ${url}:`, error);
      }
    }
  }

  throw lastError;
};

/**
 * Fetches JSON data with retry logic
 * 
 * @param {string} url - The URL to fetch from
 * @param {Object} options - Fetch options
 * @param {number} maxRetries - Maximum number of retry attempts (default: 3)
 * @returns {Promise<any>} - The parsed JSON data
 */
export const fetchJSONWithRetry = async (
  url,
  options = {},
  maxRetries = 3
) => {
  const response = await fetchWithRetry(url, options, maxRetries);
  return response.json();
};
