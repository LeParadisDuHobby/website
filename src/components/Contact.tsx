const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Nous trouver</h2>

                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-sm max-w-lg">
                        <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="text-primary mt-1 mr-3">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium">Adresse</h4>
                                    <p className="text-gray-600">
                                        <a href="https://www.google.com/maps/dir//39+Av.+de+Saint+Menet,+13011+Marseille/@43.2892566,5.4160802,12z" target="_blank" rel="noopener noreferrer">
                                            39 avenue de Saint Menet, 13011 Marseille
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="text-primary mt-1 mr-3">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium">Téléphone</h4>
                                    <p className="text-gray-600"><a href="tel:+33491453986">04 91 45 39 86</a></p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="text-primary mt-1 mr-3">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium">Horaires d'ouverture</h4>
                                    <p className="text-gray-600">Lundi : Fermé</p>
                                    <p className="text-gray-600">Mardi : Fermé</p>
                                    <p className="text-gray-600">Mercredi : 10h - 20h</p>
                                    <p className="text-gray-600">Jeudi : 14h - 20h</p>
                                    <p className="text-gray-600">Vendredi : 14h - 21h</p>
                                    <p className="text-gray-600">Samedi : 10h - 21h</p>
                                    <p className="text-gray-600">Dimanche : 14h - 20h</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg shadow-sm max-w-lg" id="magasin">
                        <h3 className="text-xl font-semibold mb-4">Notre magasin</h3>
                        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500"></p>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Nous sommes situés au cœur de la ville, facilement accessible en transport en commun ou en voiture.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact