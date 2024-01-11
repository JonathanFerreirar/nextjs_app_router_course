'use client'
import { useEffect, useState } from "react"

interface ProductProps {
  params: {
    data: string[]
  }
}


const ProductData =  (props: any)  => {
  const [data, setData] = useState('')
  const Fetch = async () => {
    try {
      const resp = await fetch('https://viacep.com.br/ws/01001000/json/')
      const respJson = await resp.json()
      setData(respJson)
      
    }catch (error) {
      console.log(error)
    }
  }

  useEffect(()  => {
    Fetch()
  }, [])
  
  function addToCart() {
    console.log('Testando se vai aparecer no servidor')
  }
  return (
    <>
    <h1>{JSON.stringify(data)}</h1>
    <button >Add to cart</button>
    </>
  )
}

export default ProductData