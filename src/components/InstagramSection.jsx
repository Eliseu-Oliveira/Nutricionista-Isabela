import React, { useRef, useEffect } from "react";
import "./InstagramSection.css";
import image1 from "../assets/bg1.png";
import image2 from "../assets/bg2.png";
import image3 from "../assets/bg3.png";
import image4 from "../assets/bg4.png";
import image5 from "../assets/bg5.png";
import image6 from "../assets/bgg1.jpg";
import image7 from "../assets/bgg2.jpg";
import image8 from "../assets/bgg3.jpg";

const InstagramSection = () => {
    const scrollContainer = useRef(null);

    // Imagens para o carrossel
    const images = [image1, image2, image3, image4, image5, image6, image7, image8];

    // Clona as imagens
    const cloneImages = [...images, ...images];

    // Manipula o scroll para criar o efeito infinito
    const handleScroll = () => {
        const { scrollLeft, clientWidth } = scrollContainer.current;
        const maxScrollLeft = scrollContainer.current.scrollWidth / 2;

        if (scrollLeft >= maxScrollLeft) {
            scrollContainer.current.scrollLeft = scrollLeft - maxScrollLeft;
        } else if (scrollLeft < 0) {
            scrollContainer.current.scrollLeft = scrollLeft + maxScrollLeft;
        }
    };

    useEffect(() => {
        const container = scrollContainer.current;
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseDown = (e) => {
        scrollContainer.current.isDown = true;
        scrollContainer.current.startX = e.pageX - scrollContainer.current.offsetLeft;
        scrollContainer.current.scrollLeft = scrollContainer.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        scrollContainer.current.isDown = false;
    };

    const handleMouseUp = () => {
        scrollContainer.current.isDown = false;
    };

    const handleMouseMove = (e) => {
        if (!scrollContainer.current.isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.current.offsetLeft;
        const walk = (x - scrollContainer.current.startX) * 2; // Controle da velocidade
        scrollContainer.current.scrollLeft = scrollContainer.current.scrollLeft - walk;
    };

    return (
        <section className="instagram-section">
            <h2>Acompanhe minha página no Instagram</h2>
            <div
                className="instagram-container"
                ref={scrollContainer}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {cloneImages.map((img, index) => (
                    <img src={img} alt={`Post ${index + 1}`} className="instagram-image" key={index} />
                ))}
            </div>
            <p>Acesse minha página e acompanhe todos os meus conteúdos</p>
            <a href="https://www.instagram.com/drabellasalesnutri/" target="_blank" rel="noopener noreferrer">
                <button className="follow-button">Seguir ❤️</button>
            </a>
        </section>
    );
};

export default InstagramSection;
