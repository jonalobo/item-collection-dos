import { useEffect, useState } from 'react'
import Item from '../components/Item'
import { collection, doc, getDocs, getFirestore } from 'firebase/firestore'
const Itemlist = () => {

const [datos, setDatos] = useState([])

useEffect(() => {
  const db = getFirestore() 
  const itemsCollection = collection(db, 'items')
  getDocs(itemsCollection).then((snp)=>{
    setDatos(snp.docs.map((doc)=>({
      id: doc.id, ...doc.data()
    })))
  })
}, [])
  return (
    <>
      <Item products={datos}/>
    </>
  )
}
export default Itemlist