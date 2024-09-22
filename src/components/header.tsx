// import imagem from '../assets/imagens/logo.png'

export const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 text-white py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div id="logotipo">
                    <a href="/">
                        <img src="https://www.deltapltda.com.br/assets/img/logo-deltap.png" alt="WbVoltagem" className='w-20 h-20' />
                    </a>
                </div>
                <div className="flex space-x-8 mr-4">
                    <div>
                        <p className="text-gray-400 ]">WhatsApp</p>
                        <p className="text-gray-400">
                            <a href="tel:+551121540666" target="_blank">
                                <span className="ddd">(11)</span> 2154-0666
                            </a>
                        </p>
                    </div>
                </div>
            </nav>
        </header>
    );
};

