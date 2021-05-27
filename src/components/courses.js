import { Link } from "react-router-dom";

const Courses = () => {

    return (
        <section className="text-gray-600 body-font pt-10">
            <div className="container px-5 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col items-center text-center justify-center mt-20 md:mt-48">
                            <h2 className=" mt-1 md:mt-4 md:mb-2.5 text-gray-900 text-2xl md:text-4xl font-semibold">Cursos ministrados pela Nativa Lab</h2>
                            <div className="w-52 h-1 bg-green-500 rounded mt-3 mb-8 md:mb-8 "></div>
                            </div>
                        
                    <div className=" flex rounded-lg h-64 overflow-hidden relative" >
                        <img alt="content" className="object-cover relative object-center h-full w-full" src="images/curso.jpg"/>
                        <div class="px-8 py-10 absolute border-4 w-full h-full border-gray-200 bg-black bg-opacity-60 opacity-0 hover:opacity-100 cursor-pointer">
                            <h2 class="tracking-widest text-sm title-font font-extrabold text-green-200 mb-1">12 - 13 de Junho</h2>
                            <h1 class="title-font text-lg font-medium text-white mb-3">Morro do Ferro/MG</h1>
                            <p class="leading-relaxed text-white">Entre em contato (31) 99809-9747 <br></br>
                            2º Lote 96,00 U$.</p>
                            <button className=" mx-auto mt-6 text-white bg-green-600 border-0 py-2 px-5 focus:outline-none hover:bg-green-900 rounded-2xl">
                                <Link to="/contato" replace>Reserve Já</Link>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-4">
                        <div className="sm:w-1/3 text-center sm:pr-8">
                        <div className="flex flex-col items-center text-center justify-center mt-1">
                        <h2 className="md:mb-4 text-gray-900 text-2xl md:mt-6 md:text-3xl font-semibold">Bambu na construção</h2>
                        <div className="w-12 h-1 bg-green-500 rounded mt-4 mb-4 md:mt-0 "></div>
                            <p className="text-lg text-gray-900">Identificação de espécies, colheita e tratamento.</p>
                            <p className="text-sm md:text-xl text-black italic">Ministrado por <b>Ivan Greive</b>.</p>
                        </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle.</p>
                        <a className="text-green-800 font-bold inline-flex items-center cursor-pointer">Saiba Mais!
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
</section>
    )
}

export default Courses