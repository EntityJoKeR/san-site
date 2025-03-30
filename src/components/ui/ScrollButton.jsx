"use client"; // Директива для клиентского компонента

export default function ScrollButton() {
    const handleScroll = () => {
        const section = document.querySelector(".section-about");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <img
            src="chevron-down.svg"
            className="cursor-pointer z-50"
            onClick={handleScroll}
            alt="Scroll down"
        />
    );
}