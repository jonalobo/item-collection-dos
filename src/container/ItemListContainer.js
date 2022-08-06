/* import ItemCount from '../components/ItemCount' */

import Itemlist from '../components/Itemlist'
import '../css/ItemListContainer.css'
const ItemListContainer = () => {
  return (
    <div className='container'>
      {/* <ItemCount 
      stock="10"
      initial= '1'
      /> */}
      <Itemlist />
    </div>
  )
}
export default ItemListContainer