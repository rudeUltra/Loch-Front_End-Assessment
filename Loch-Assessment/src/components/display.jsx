import Notify from "./top";
import Mid from "./mid";
import Lower from "./low";
function Display(){
    return(
        <div className="d-flex flex-column bd-highlight mb-3">
  <div className=""><Notify></Notify></div>
  <div className="p-2 bd-highlight"><Mid></Mid></div>
  <div className=""><Lower></Lower></div>
</div>
    )
}

export default Display;