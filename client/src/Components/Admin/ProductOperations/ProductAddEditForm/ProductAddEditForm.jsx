import React,{useContext} from "react";
import ProductVariationsAttributes from "./ProductVariationsAttributes";
import { AddProductAdminContext } from "../../../Context/AddProductContext";
import { CategoriesContextC } from "../../../Context/CategoriesContext";

const ProductAddEditForm = ({handleSubmit,fetchProductDetails})=>{


    const {handleFileChange,handleImageRemove,setFormData,formData,errorMessage,successMessage,loading,handleFeaturedImageRemove} = useContext(AddProductAdminContext)
    const {renderCategoriesCheckboxes,categories} = useContext(CategoriesContextC) ;

    return (
      <div className="d-flex justify-center flex-c align-center">
      <h3>Add New Product</h3>
        <form onSubmit={handleSubmit} encType='multipart/form-data' className="d-grid grid-2 m3 border1 p3">
          
          <div className="form-container-left d-flex justify-center flex-c align-center">
          
           
    
            <p className='input-row w100'>
          <input
              type='text'
              placeholder='Product Name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input-text w100" required
            />
            </p>

            <p className='input-row w100'>
            <input
              type='number'
              placeholder='Price'
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="input-text w100" required
            />
            </p>
            <p className='input-row w100'>
              <input
                type='text'
                placeholder='SKU Number'
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                className="input-text w100" required
              />
            </p>
            <p className='input-row w100'>
            <textarea
              placeholder='Short Description'
              value={formData.shortDescription}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              className="input-text w100" required
            />
            </p>

            <p className='input-row w100'>
            <textarea
              placeholder='Long Description'
              value={formData.longDescription}
              onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
              className="input-text w100" required
            />
            </p>
            
          
            <ProductVariationsAttributes />

          
            <div className='product-img-container-admin d-flex justify-evenly w100 g2 mb2'>
              <div className='featured-img-container d-flex flex-c  justify-center align-center'>
                  <input
                  id="file"
                    type='file'
                    name='featuredImage'
                    className='d-none'
                    accept='image/*'
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file" className="btn-1">Upload Featured Image</label>
                  {formData.featuredImage && (
                    <div  className='d-flex g2 position-r'>
                    <img src={URL.createObjectURL(formData.featuredImage)} alt='Featured' className='featured-img-admin mw100' />
                    <button className='button small position-a' onClick={handleFeaturedImageRemove}>x</button>

                    </div>
                  )}
              </div>
    
              <div className='featured-img-container d-flex flex-c justify-center align-center'>
                  
                  <input
                  type="file"
                    id='file2'
                    name='thumbnailImages'
                    className='d-none'
                    accept='image/*'
                    multiple
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file2" className="btn-1">Upload Thumbnails</label>
                  <div className='thumbnail-img-container'>
                  {formData.thumbnailImages && formData.thumbnailImages.map((image, index) => (
                    <div key={index} className='d-flex g2  position-r'>
                    <img  src={URL.createObjectURL(image)} alt={`Thumbnail ${index + 1}`} className='thumbnail-img-admin mw100'/>

                    <a class="remove" aria-label="Remove this item" onClick={()=>handleImageRemove(index)}><span class="svg-icon icon-close size-normal close-icon">
                      <svg width="24px" height="24px" viewBox="0 0 24 24"><g><rect fill="none" width="24" height="24">
                      </rect>
                      <polygon points="19.778,5.636 18.364,4.222 12,10.586 5.636,4.222 4.222,5.636 10.586,12 4.222,18.364 5.636,19.778 12,13.414 18.364,19.778 19.778,18.364 13.414,12"></polygon>
                      </g>
                      </svg>
                      </span>
                    </a>
                    </div>
                  ))}
                  </div>
              </div>
            </div>
            <button type="submit" className='button medium' disabled={loading}>
          {loading ? 'Loading...' : 'Add Product'}
        </button>
          </div>

          <div className="form-container-right d-flex flex-c align-start g2 pi2" style={{height:'100%'}}>
            <div className="d-flex g2 align-start flex-c">
              <div className='d-flex label-container  justify-center g1 flex-c align-end borderb1'>
              
                <label className="form-control">
                  <input
                    type='checkbox'
                    checked={formData.isOnSale}
                    onChange={(e) => setFormData({ ...formData, isOnSale: e.target.checked })}
                  />
                  On Sale
                </label>
                <label className="form-control">
                  <input
                    type='checkbox'
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                  />
                  Featured
                </label>
        
              </div>
              <div className='d-flex label-container justify-center g1 flex-c align-start borderb1'>
          
            <label>
              <input
                type="radio"
                value="draft"
                checked={formData.status === "draft"}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })} 
              />
              Draft
            </label>
            <label>
              <input
                type="radio"
                value="published"
                checked={formData.status === "published"}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              />
              Published
            </label>
              </div>
            </div>
            <div className="d-flex align-start flex-c">
              <h5 style={{margin:'0'}}>Select Categories</h5>
              {categories.length > 0 ? renderCategoriesCheckboxes(categories) : null}
            </div>
          </div>

          
          
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
        </form>
        </div>
    )
}

export default ProductAddEditForm;