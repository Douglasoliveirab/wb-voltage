import imagem from '../assets/imagens/logotp.png'

export const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div id="logotipo" className='flex gap-2 items-center'>
                    <a href="/">
                        <img src={imagem} alt="WbVoltagem" className="w-14 h-14 rounded-full" />
                    </a>
                    <p>WB Voltagem</p>
                </div>
            </nav>
        </header>
    );
};
