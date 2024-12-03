import {Basket} from "./component/basket";
import {Button} from "./component/button";
import { useState } from "react";
import right_arrow_img from "./assets/images/Right-Arrow-PNG-Image.png";
import left_arrow_img from "./assets/images/images-of-arrows-pointing-right-20.png";
const App = ()=>{
  let [leftApple, setleftApple]=useState(10);
  let [rightApple, setrightApple]=useState(0);
  const handleClick1 =()=>{
    if(rightApple<=0){
      setrightApple(0);
    }else{
      setrightApple(rightApple-1);
      setleftApple(leftApple+1);
      console.log(leftApple);
    }
    
}
const handleClick2 =()=>{
if(leftApple<=0){
  setleftApple(0);
}else{
  setrightApple(rightApple+1);
  setleftApple(leftApple-1);
  console.log(rightApple);
 
}

}

  return(
     <div className="container">
            <Basket applevalue={leftApple} basketName="Basket 1"/>
            <Button  imagesrc={left_arrow_img}  handleClick={handleClick1}/>
            <Button  imagesrc={right_arrow_img} handleClick={handleClick2} />
            <Basket applevalue={rightApple} basketName="Basket 2"/>
     </div>
  )
}
export default App;