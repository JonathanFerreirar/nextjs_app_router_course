interface ProductProps {
  params: {
    data: string[]
  }
}


const ProductData = async  (props: any)  => {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  
  function addToCart() {
    console.log('Testando se vai aparecer no servidor')
  }
  return (
    <>
    <h1>{JSON.stringify(props)}</h1>
    <button >Add to cart</button>
    </>
  )
}

export default ProductData