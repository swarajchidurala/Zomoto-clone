import React, { useState, useEffect } from 'react'
import { API_URL } from '../api'
import { ClipLoader } from 'react-spinners'


const ItemsDisplay = () => {
const [displayItem, setDisplayItem] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

console.log('Rendering ItemsDisplay component')


const fetchItems = async () => {
  try {
    setLoading(true)
    setError(null)
    const response = await fetch(`${API_URL}/items`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    setDisplayItem(data.items)
  } catch (error) {
    setError(error.message)
    console.error("Failed to fetch items:", error)
  } finally {
    setLoading(false)
  }
}

useEffect(() => {
  fetchItems()
}, [])



  return (
        <div className="itemSection">
            {loading && (
              <div className="loading-spinner">
                <ClipLoader color="#36d7b7" size={50} />
                <p>Loading items...</p>
              </div>
            )}
            {error && (
              <div className="error">
                Error: {error}
                <button onClick={fetchItems} className="retry-button">
                  Retry
                </button>
              </div>
            )}
            {!loading && !error && displayItem.length > 0 ? (
              displayItem.map((item, index) => {


                return(
                    <div className="gallery" key={index}>

                        <img src={item.item_img} alt={item.item_img} />
                    </div>
                )
              })
            ) : (
              !loading && !error && <div className="no-items">No items found</div>
            )}
        </div>

  )
}

export default ItemsDisplay
