import banner from "../assets/imagens/banner.jpg";

export const Banner = () => {
    return (
        <section
            className="w-full relative bg-cover bg-center h-96"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="container mx-auto h-full flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl font-bold">Cabine Primária</h1>
                <p className="text-white mt-4 text-center">
                    Manutenção preventiva e corretiva em subestações e cabines primárias                </p>
            </div>
        </section>
    );
};
