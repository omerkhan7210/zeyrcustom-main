import React from 'react'

export const VariationsPriceStockPopup = ({ show,value,vari,handleAddVariation,handleClosePopup,setFormData,formData,index,variation}) => {
    
      
      if (!show) return null;
    
      return (
        <div className="otp-popup-overlay">
          <div className="otp-popup-container">
            <button className="otp-popup-close-btn" onClick={handleClosePopup}>
              &times;
            </button>
            <div className="d-flex flex-c align-center g1">
            {value==="Price" ? (
                    <p className='input-row '>
                    <label htmlFor="price">Price: </label>
                    <input
                      type="number"
                      id="price"
                      value={vari}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          variations: [
                            ...formData.variations.slice(0, index),
                            { ...variation, price: e.target.value },
                            ...formData.variations.slice(index + 1),
                          ],
                        })
                      }
                    />
                  </p>
            ) : (
                <p className='input-row '>
                <label htmlFor="price">Stock: </label>
              <input
                type="number"
                id="stock"
                value={vari}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    variations: [
                      ...formData.variations.slice(0, index),
                      { ...variation, stock: e.target.value },
                      ...formData.variations.slice(index + 1),
                    ],
                  })
                }
              />
                </p>
            )
            }
                   
                    <button type="button" className="form-btn" onClick={handleAddVariation}>
                        Add Variation {value}
                    </button>
            </div>
          </div>
        </div>
      );
    };
    
