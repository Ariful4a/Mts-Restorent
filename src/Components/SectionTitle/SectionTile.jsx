
const SectionTile = ({subHading, Hading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center mt-10">
            <p className="text-red-500 font-bold text-2xl">---{subHading}---</p>
            <h3 className="font-black text-4xl border-y-4 mt-4 mb-8 p-2">{Hading}</h3>
        </div>
    );
};

export default SectionTile;