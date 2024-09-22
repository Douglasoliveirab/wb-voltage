import banner from "../assets/imagens/banner.jpg";

export const Banner = () => {
    return (
        <section
            className="w-full relative bg-cover bg-center h-96"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="container mx-auto h-full flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl font-bold">TERMOVÁCUO</h1>
                <p className="text-white mt-4 text-center">
                    Equipamentos para tratamento de óleos isolantes para transformadores e óleos industriais/lubrificantes.
                </p>
            </div>
        </section>
    );
};
