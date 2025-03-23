const Footer = () => {
    const currentYear = new Date().getFullYear()
    
    return (
      <footer className="bg-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Le Paradis du Hobby</h2>
              <p className="text-gray-300 mt-1">Votre destination pour les cartes à collectionner</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300">© {currentYear} Le Paradis du Hobby. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer