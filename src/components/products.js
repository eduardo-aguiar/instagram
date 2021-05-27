const Products = () => {

    return (
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
            
          <img alt="content" className="object-cover h-full w-full" src="compre2.jpeg"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Compre bambu tratado</h2>
        <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        <button className="flex mx-auto mt-6 text-white bg-green-600 border-0 py-2 px-5 focus:outline-none hover:bg-green-700 rounded">Saiba Mais</button>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="compre.jpg"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Invista em uma Auditoria</h2>
        <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        <button className="flex mx-auto mt-6 text-white bg-green-600 border-0 py-2 px-5 focus:outline-none hover:bg-green-700 rounded">Saiba Mais</button>
      </div>
    </div>
  </div>
</section>
    )
}

export default Products