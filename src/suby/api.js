// Determine API URL based on environment
const isDevelopment = process.env.NODE_ENV === 'development'
export const API_URL = isDevelopment 
  ? "http://localhost:4000" 
  : "https://quick-backend-nodejs.onrender.com"

// Utility function for making API requests
export const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}
