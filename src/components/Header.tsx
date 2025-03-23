import { useState } from 'react'
import Logo from '/paradis_du_hobby.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
            <img src={Logo} alt="Logo Le Paradis du Hobby" className="h-10 mr-3" />
          <h1 className="text-2xl font-bold text-dark">Le Paradis du Hobby</h1>
        </div>
        
        {/* Menu pour mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-dark focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Navigation desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-dark hover:text-primary font-medium">Accueil</a>
          <a href="#contact" className="text-dark hover:text-primary font-medium">Contact</a>
        </nav>
      </div>
      
      {/* Menu mobile déplié */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            <a href="#" className="text-dark hover:text-primary font-medium">Accueil</a>
            <a href="#contact" className="text-dark hover:text-primary font-medium">Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header