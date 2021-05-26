//https://www.youtube.com/watch?v=4I-b6tIg52w

const TailwindYt = () => { 
    return (
        <div className="card group text-2xl flex flex-col shadow-lg bg-white lg:w-3/6 xl:w-4/12 mx-2 mt-4
        " style={{maxWidth: "485px"}}>
            <div className="image-data relative z-20 h-96 overflow-hidden">
                <div className="h-full w-full absolute top-0 left-0 bg-cover z-0 group-hover:scale15 focus:scale15"
                    style={{ backgroundImage: "url(/card-image.jpg)" }}
                >
                    
                </div>
                <div className="
                publication-details inline-flex left-0 top-0 absolute h-full w-full p-3
                ">
                <svg className="h-5 w-5" 
                viewBox="0 0 20 20"
                fill="white">
							<path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
						</svg>
                    <a href="#" className="author hover:text-opacity-70 h-5 text-base text-white font-bold mx-1">Author</a>
                    
                    <svg class="svg-icon h-5 w-5 ml-1.5" 
                    viewBox="0 0 20 20"
                    fill="white"
                    >
							<path d="M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z">                                
                            </path>
					</svg>

                    <span className="mx-1 date text-base text-white font-bold h-5">March 30, 2020</span>
                </div>
            </div>

            <div className="post-data px-7 py-4">
                <h1 className="title text-4xl font-bold ">Title goies here</h1>
                <h2 className="subtitle text-base text-gray-900 text-opacity-60  uppercase mt-2 mb-4 ml-2">Subtitle goies here</h2>
                <p className="description text-lg text-gray-900 mb-4 leading-5">
                    <span className="ml-5">L</span>orem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur mollitia natus, illum omnis nemo
                    adipisicing elit. Pariatur mollitia natus, illum omnis nemo
                    adipisicing elit. Pariatur mollitia natus, illum omnis nemo </p>
                <div className="cta text-right text-green-700 hover:text-green-500 text-xl font-bold mt-4">
                    <a href="#" className="" >Read more &rarr;</a>
                </div>
            </div>
        </div>
    )
}
export default TailwindYt
