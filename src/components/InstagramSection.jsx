import React, { useRef, useEffect, useState } from "react";
import "./InstagramSection.css";
import image1 from "../assets/bg1.png"; // Imagem de backup caso a API falhe

const InstagramSection = () => {
    const scrollContainer = useRef(null);
    const [posts, setPosts] = useState([]);

    // Token de acesso e ID da conta do Instagram
    const accessToken = 'YOUR_ACCESS_TOKEN'; // Insira seu token de acesso aqui
    const userId = 'YOUR_USER_ID'; // Insira seu ID de usuário aqui

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const response = await fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_url&access_token=${accessToken}`);
                const data = await response.json();
                setPosts(data.data); // Define as postagens no estado
            } catch (error) {
                console.error("Erro ao buscar postagens do Instagram:", error);
            }
        };

        fetchInstagramPosts();
    }, []);

    // Manipulação do scroll (a mesma lógica que você já tem)
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
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <img
                            src={post.media_url || image1} // Imagem de backup
                            alt={post.caption}
                            className="instagram-image"
                            key={post.id}
                        />
                    ))
                ) : (
                    <img src={image1} alt="Loading..." className="instagram-image" />
                )}
            </div>
            <p>Acesse minha página e acompanhe todos os meus conteúdos</p>
            <a href="https://www.instagram.com/drabellasalesnutri/" target="_blank" rel="noopener noreferrer">
                <button className="follow-button">Seguir ❤️</button>
            </a>
        </section>
    );
};

export default InstagramSection;
