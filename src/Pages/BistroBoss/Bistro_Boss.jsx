import bg from '../../assets/home/chef-service.jpg';

const Bistro_Boss = () => {
    return (
        <section
            style={{ backgroundImage: `url(${bg})` }}
            className="bg-cover bg-center bg-no-repeat py-20 px-4 text-black text-center"
        >
            <div className="max-w-2xl mx-auto bg-white bg-opacity-50 p-10 rounded">
                <h2 className="uppercase font-black text-4xl">Bistro boss</h2>
                <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos
                    quod magni maxime ipsa eligendi doloribus, repellendus expedita aspernatur autem!
                </p>
            </div>
        </section>
    );
};

export default Bistro_Boss;
