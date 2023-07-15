let productCount = 0;
let displayformattedProductCount = () => {
    return productCount > 0 ? productCount:'Zero';
}
function productDetails(props){
    let badgeClass = 'badge';
    badgeClass += props.isAvailable? 'bg-success' :'bg-danger';
return(
    <div className="d-flex align-items-center justify-content-start mt-1">
    <h6 className="font-weight-bold my-2">{props.price}</h6>
    <button className='btn btn-primary'>-</button>
    <span>{displayformattedProductCount()}</span>
    <button className='btn btn-primary'>+</button>
    <span className = {badgeClass} >{props.isAvailable? 'Available':'unavailable'}</span>
  </div>
)
}
export default productDetails;