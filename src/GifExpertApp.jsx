import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

const GifExpertApp = () => {

    const [categories, setCategories] = useState([])
    
    const onAddCategory = (newCategory)=>{
        if (categories.includes(newCategory.toLowerCase())) return;
        setCategories([newCategory.toLowerCase(), ...categories]);

    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
            onNewCategory={onAddCategory}
            categories={categories}/>
        
        {categories.map(cat=>(
            <GifGrid key={cat} category={cat} />
            )
        )}


    </>
  )
}

export default GifExpertApp