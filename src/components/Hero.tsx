import { useState, useEffect } from 'react';

const Hero = () => {
    const cardTypes = [
        {
            icon: "🎮",
            title: "Pokémon",
            description: "Découvrez notre large sélection de cartes Pokémon pour compléter votre collection."
        },
        {
            icon: "✨",
            title: "Disney Lorcana",
            description: "Plongez dans l'univers magique de Disney avec les cartes Lorcana."
        },
        {
            icon: "🏆",
            title: "WWE",
            description: "Collectionnez vos superstars préférées de la WWE. ET IL PASSE PAR DESSUS LA TROISIÈME CORDE !"
        },
        {
            icon: "⚽",
            title: "Football",
            description: "Collectionnez les cartes de vos joueurs préférés et revivez les plus grands moments du football.",
        },
        {
            icon: "🃏",
            title: "One Piece Card Game",
            description: "Rejoignez l'équipage de Luffy avec nos cartes One Piece."
        }
    ];

    const socialLinks = [
        { name: "TikTok", icon: "tiktok", url: "https://www.tiktok.com/@paradisduhobby" },
        { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/leparadisduhobby/" },
        { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/people/Le-Paradis-du-Hobby/61568695562466/" },
        { name: "Discord", icon: "discord", url: "https://discord.gg/ku8xmb6NXu" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    // const cardsPerPage = window.innerWidth >= 768 ? 3 : 1;

    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const visibleCards = () => {
        const cardsToShow = windowWidth >= 768 ? 3 : 1;
        return cardTypes.slice(currentIndex, currentIndex + cardsToShow);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % (cardTypes.length - (windowWidth >= 768 ? 2 : 0))
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? (cardTypes.length - (windowWidth >= 768 ? 3 : 1)) : prevIndex - 1
        );
    };

    return (

        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Section points de vente officiels */}
            <div className="mb-12 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto border-l-4 border-purple-500">
                <h3 className="text-xl font-bold mb-2 text-left">Points de vente officiels</h3>
                <p className="text-gray-700 text-left">
                    Information importante : Le Paradis du Hobby dispose uniquement de deux canaux de vente officiels. Nous vous recommandons de vous procurer nos produits exclusivement via ces points de vente autorisés.
                    <ul className="list-disc list-inside">
                        <li>Notre <a href='#magasin' className="text-blue-600 underline hover:text-blue-800 font-medium"> boutique physique</a></li>
                        <li>Notre compte sur <a href="https://www.voggt.com/profiles/467765" target="_blank"
                                rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 font-medium">Voggt</a>.</li>
                    </ul>
                </p>
            </div>

            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">Bienvenue au Paradis du Hobby</h2>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Votre destination spécialisée dans les cartes à collectionner et à échanger
                </p>

                <div className="relative max-w-5xl mx-auto">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors -ml-4"
                            aria-label="Carte précédente"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex flex-wrap justify-center gap-8 mt-12 overflow-hidden transition-transform duration-300 ease-in-out">
                            {visibleCards().map((card, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md max-w-xs w-full">
                                    <div className="text-primary text-5xl mb-4">{card.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                    <p className="text-gray-600">{card.description}</p>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors -mr-4"
                            aria-label="Carte suivante"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex justify-center mt-6 gap-2">
                        {Array.from({ length: cardTypes.length - (windowWidth >= 768 ? 2 : 0) }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`h-2 w-2 rounded-full ${currentIndex === idx ? 'bg-primary' : 'bg-gray-300'}`}
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`Aller à la carte ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Section réseaux sociaux */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-6">Suivez-nous sur nos réseaux sociaux</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center w-28 h-28 justify-center"
                                aria-label={`Visiter notre page ${social.name}`}
                            >
                                <div className="w-10 h-10 flex items-center justify-center mb-2">
                                    {renderSocialIcon(social.icon)}
                                </div>
                                <span className="text-sm font-medium">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Fonction pour générer les icônes des réseaux sociaux
const renderSocialIcon = (platform: string) => {
    switch (platform) {
        case 'tiktok':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                </svg>
            );
        case 'instagram':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
            );
        case 'facebook':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
            );
        case 'discord':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-6 h-6">
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                </svg>
            );
        default:
            return null;
    }
};

export default Hero