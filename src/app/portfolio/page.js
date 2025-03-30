import NavBar from "@/components/NavBar";

export async function generateMetadata() {
    return {
      title: "Порфолио",
      description: "Наши работы",
    };
  }

export default function PortfolioPage() {
    return (
        <NavBar></NavBar>
    );
  }