
export const Button= (props)=>{
  const {imagesrc, handleClick}= props;
return(
  <button onClick={handleClick}>
    <img src={imagesrc} alt="image" />
  </button>
)
}