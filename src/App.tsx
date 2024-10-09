import { Banner } from "./components/banner";
import { Header } from "./components/header";
import imgAnalise from "./assets/imagens/analise-de-oleo-de-transformador.jpg";
import imgMan from "./assets/imagens/manutencao-de-cabine-primaria.jpg";
import imgTratamento from "./assets/imagens/tratamento-de-oleo.jpg";
import imgSpda from "./assets/imagens/spda.jpg";
import imgInsp from "./assets/imagens/inspecao-termografica.jpg";
import imgLaudos from "./assets/imagens/laudos.jpg";
import imgTestes from "./assets/imagens/teste-de-epis-e-ferramentas.jpg";
import imgBancoCap from "./assets/imagens/banco-de-capacitor.jpg";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  const services = [
    { name: "Análise de Óleo de Transformador", img: imgAnalise },
    { name: "Manutenção de Cabine Primária", img: imgMan },
    { name: "Tratamento de Óleo", img: imgTratamento },
    { name: "SPDA", img: imgSpda },
    { name: "Inspeção Termográfica", img: imgInsp },
    { name: "Laudos", img: imgLaudos },
    { name: "Teste em Foco", img: imgTestes },
    { name: "Banco de Capacitor", img: imgBancoCap },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner />

      <div className="px-4 py-8 text-center">
        <p className="text-lg font-medium text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
          A Wb Voltage tem mais de 7 anos de experiência no mercado de Tratamento e Filtragem de Óleo, Locação e Venda de
          Termovácuo, e Manutenção de Cabine Primária.
        </p>

        <p className="text-2xl font-bold text-gray-900 mb-8 mt-10">Nossos Serviços</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <img
                src={service.img}
                alt={service.name}
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow-lg mx-auto transition-transform transform hover:scale-105"
              />
              <p className="mt-3 text-base font-semibold text-gray-800">{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-8 text-center bg-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Sobre Nós</h2>
        <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Na Wb Voltage, estamos comprometidos com a excelência e a qualidade nos serviços que oferecemos. Nossa equipe é formada por profissionais altamente capacitados, prontos para atender a todas as suas necessidades em tratamento e filtragem de óleo, garantindo a máxima eficiência e segurança em todos os processos.
        </p>
      </div>

      <footer className="bg-gray-900 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm mb-2">WB voltage</p>
          <p className="text-sm mb-2">Email: wbvoltage@gmail.com</p>
          <p className="text-sm mb-2">Telefone: (11) 98250-6224</p>
          <p className="text-sm mb-2">CNPJ: 12.345.678/0001-90</p>
          <p className="text-sm mt-4">© 2024 WB voltage. Todos os direitos reservados.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/5511982506224?text=Olá, estou interessado em saber mais sobre os serviços da WB voltage. Poderiam me ajudar?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>

    </div>
  );
}

export default App;
