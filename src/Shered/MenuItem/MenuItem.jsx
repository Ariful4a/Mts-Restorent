

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex gap-4">
            <div>
                <img
                    src={image}
                    class="img-fluid w-[104px] h-full rounded-top rounded-[0px_200px_200px_200px]"
                    alt=""
                />
            </div>
            <div className="space-y-2">
                <h2>{name}</h2>
                <p>{recipe}</p>
            </div>
            <div>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;