import NavBar from "@/components/NavBar";
import "@/components/about.css";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ui/ScrollButton"; // Импортируем новый компонент

export async function generateMetadata() {
    return {
        title: "О нас",
        description: "Информация о нас",
    };
}

export default function AboutPage() {
    return (
        <div className="flex justify-center items-center flex-col content-max w-[100%]">
            <div className="main-contaner">
                <div className="home-container w-full flex-col flex items-cente">
                    <NavBar></NavBar>
                    <div className="bg-block_1">
                    <div className="elipse_4 rounded-[100%]"></div>
                        <div className="elipse_1 rounded-[100%]"></div>
                        <div className="elipse_3 rounded-[100%]"></div>
                        <div className="elipse_2 rounded-[100%]"></div>
                    </div>
                    <div className="bg-block_2">
                        <div className="elipse_5 rounded-[100%]"></div>
                        <div className="elipse_6 rounded-[100%]"></div>
                    </div>
                    <div className="bg-block_3">
                        <div className="elipse_7 rounded-[100%]"></div>
                    </div>
                    <div className="text-content flex flex-col items-center">
                        <h1>
                            Откройте <span>для себя</span> силу нашего <br />
                            <span>видения</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat velit nec augue eleifend, at dapibus erat scelerisque. Sed quis arcu id justo
                        </p>
                    </div>
                    {/* Заменяем img на клиентский компонент */}
                    <ScrollButton />
                </div>
            </div>
            <div className="section-about flex flex-col mt-[80px]">
                <h1>Узнайте о нас больше</h1>
                <div className="info-about flex items-end">
                    <p className="font-sans w-[405px] mr-[180px] h-[400px] text-[18px] text-white text-opacity-75 about-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat velit nec augue eleifend, at dapibus erat scelerisque. Sed quis arcu id justo suscipit cursus. Curabitur euismod nunc id lectus scelerisque, sed malesuada ex bibendum. Pellentesque habitant
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat velit nec augue eleifend, at dapibus erat scelerisqu
                    </p>
                    <div className="elipse_8 rounded-[100%]"></div>
                    <div className="w-[645px] overflow-hidden">
                        <img src="/Clip-path-group.svg" className="w-[645px] h-[479px]" alt="" />
                    </div>
                </div>
                <div className="elipse_9 rounded-[100%]"></div>
                <div className="info-about flex">
                    <div className="info-about-2">
                    <img src="/Change this 1.svg" className="w-[271px] h-[407px] rounded-[10px] img-about" alt="" />
                    <img src="/Change this 1.svg" className="w-[271px] h-[407px] rounded-[10px] " alt="" />
                    </div>
                    <div className="elipse_10 rounded-[100%]"></div>
                    <div className="elipse_11 rounded-[100%]"></div>
                    <p className="font-sans w-[37%] ml-[100px] pt-[50px] text-[18px] text-white text-opacity-75 about-p about-p-mob">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat velit nec augue eleifend, at dapibus erat scelerisqu
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat velit nec augue eleifend, at dapibus erat scelerisqu
                    </p>
                    <div className="elipse_12 rounded-[100%]"></div>
                    <div className="elipse_13 rounded-[100%]"></div>
                    <div className="vector_1 rounded-[100%]"></div>
                    <div className="vector_3"></div>
                    <div className="vector_2 rounded-[100%]"></div>
                </div>
                <div className="info-about flex mt-[100px] info-about-mob">
                    <div className="elipse_14 rounded-[100%]"></div>
                    <p className="font-sans w-[37%] ml-[50px] pt-[50px] mr-[120px] text-[18px] text-white text-opacity-75 about-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat velit nec augue eleifend, at dapibus erat scelerisque. Sed quis arcu id justo suscipit cursus. Curabitur euismod nunc id lectus scelerisque, sed malesuada ex bibendum. Pellentesque habitant
                    </p>
                    <div className="elipse_15 rounded-[100%]"></div>
                    <img src="/Change this 2.svg" className="w-[556px] h-[407px] rounded-[10px]" alt="" />
                </div>
                <div className="footer h-[370px]">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}