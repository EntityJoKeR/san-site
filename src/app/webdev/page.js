import NavBar from "@/components/NavBar";
import "@/components/webdev.css";
import Footer from "@/components/Footer";

export async function generateMetadata() {
  return {
    title: "Разработка сайтов",
    description: "Описание разработки сайтов на фреймворках",
  };
}

export default function PortfolioPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full max-w-[1600px]">
        <NavBar></NavBar>
        <div className="section-1 flex pl-[100px] pr-[100px] justify-between items-center mt-[50px]">
          <div className="el-1"></div>
          <div className="el-2"></div>
          <div className="description-development w-[571px]">
            <h1>
              Описание <span>разработки сайтов</span> на фреймворках
            </h1>
            <div className="el-3"></div>
            <div className="el-4"></div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat velit nec augue eleifend, at dapibus erat scelerisque. Sed
              quis arcu id justo suscipit cursus. Curabitur euismod nunc id
              lectus scel
            </p>
          </div>
          <div className="development-img">
            <img src="development.svg"></img>
          </div>
        </div>
        <div className="section-2 flex pl-[100px] pr-[100px] justify-between items-center mt-[100px]">
          <div className="strategy flex flex-wrap justify-between gap-8 w-[614px] ">
            <div className="info-strategy w-[277px]">
              <h1>Стратегия</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                feugiat velit nec augue eleifend, at dapibus erat scelerisque.
              </p>
            </div>
            <div className="info-strategy w-[277px]">
              <h1>Подход</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                feugiat velit nec augue eleifend, at dapibus erat scelerisque.
              </p>
            </div>
            <div className="info-strategy w-[277px]">
              <h1>Процесс</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                feugiat velit nec augue eleifend, at dapibus erat scelerisque.
              </p>
            </div>
            <div className="info-strategy w-[277px]">
              <h1>Последние этапы</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat velit nec augue eleifend, at dapibus erat scelerisque.
              </p>
            </div>
            <div className="work mt-[30px]">
  <h1>Как мы работаем?</h1>
</div>
<div className="work-process w-full text-white rounded-lg">
  <div className="flex">
    {/* Левая колонка */}
    <div className="flex flex-col flex-1 gap-4">
      <div className="flex items-center">
        <span className="number mr-2">1</span>
        <p>Анализируем задачи</p>
      </div>
      <div className="flex items-center">
        <span className="number mr-2">2</span>
        <p>Планируем проект</p>
      </div>
      <div className="flex items-center">
        <span className="number mr-2">3</span>
        <p>Разрабатываем дизайн</p>
      </div>
    </div>

    {/* Правая колонка */}
    <div className="flex flex-col flex-1 gap-4">
      <div className="flex items-center">
        <span className="number mr-2">4</span>
        <p>Программируем решения</p>
      </div>
      <div className="flex items-center">
        <span className="number mr-2">5</span>
        <p>Сопровождаем проект</p>
      </div>
    </div>
  </div>
</div>

          </div>
          <div className="projects flex">
          <div className="vector"></div>
          <div className="our-projects flex flex-col">
            <h1>Наши проекты</h1>
            <div className="project">
                <img src="Rectangle 859.svg"></img>
                <p>Магазин одежды</p>
            </div>
            <div className="project">
                <img src="Rectangle 859.svg"></img>
                <p>Рекламный сайт</p>
            </div>
            <div className="project">
                <img src="Rectangle 859.svg"></img>
                <p>Рекламный сайт</p>
            </div>
          </div>
          </div>
        </div>
        <div className="footer h-[370px]">
                    <Footer></Footer>
          </div>
      </div>
    </>
  );
}