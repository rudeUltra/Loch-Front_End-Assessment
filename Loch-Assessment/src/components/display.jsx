import Notify from "./top";
import Mid from "./mid";
function Display(){
    return(
        <div className="d-flex flex-column bd-highlight mb-3">
  <div className=""><Notify></Notify></div>
  <div className="p-2 bd-highlight"><Mid></Mid></div>
  <div className="p-2 bd-highlight">Flex item 3</div>
</div>
    )
}

export default Display;