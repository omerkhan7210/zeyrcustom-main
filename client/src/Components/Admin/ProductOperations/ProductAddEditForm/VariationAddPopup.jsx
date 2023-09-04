import React from 'react'

const VariationAddPopup = ({ show,value,vari,handleAddVariation,handleClosePopup,setVar}) => {

  
  if (!show) return null;

  return (
    <div className="otp-popup-overlay">
      <div className="otp-popup-container">
        <button className="otp-popup-close-btn" onClick={handleClosePopup}>
          &times;
        </button>
        <div className="d-flex flex-c align-center g1">
        {value==="Color" ? (
            <>
                <h4>Color</h4>
                <input
                type="text"
                value={vari}
                onChange={(e) => setVar(e.target.value)}
                />
            </>
        ) : (
            <>
            <h4>Size</h4>
            <input
            type="text"
            value={vari}
            onChange={(e) => setVar(e.target.value)}
            />
        </>
        )
        }
               
                <button type="button" className="form-btn" onClick={handleAddVariation}>
                    Add Variation
                </button>
        </div>
      </div>
    </div>
  );
};

export default VariationAddPopup;

