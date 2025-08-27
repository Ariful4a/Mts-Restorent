import { useForm } from 'react-hook-form'
import SectionTile from '../../../Components/SectionTitle/SectionTile'
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(res.data);
        if(res.data.success){
           const menuItem = {
               name: data.name,
               price: parseFloat(data.price),
               recipe: data.recipe,
               category: data.category,
               image: res.data.data.display_url
           };
           const menuResponse = await axiosSecure.post('/menu', menuItem);
           console.log(menuResponse.data);
           if (menuResponse.data.insertedId) {
                reset();
               Swal.fire({
                   icon: 'success',
                   title: `${data.name} is added successfully`,
                   showConfirmButton: false,
                   timer: 1500
               });
           }
        }

    };

    return (
        <div>
            <SectionTile subHading={"What's new?"} Hading={"Add New Items"} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Recipe Name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Recipe Name</legend>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            className="input w-full"
                            placeholder="Recipe Name"
                        />
                    </fieldset>

                    <div>
                        {/* Category and Price side by side */}
                        <div className="flex gap-4">
                            <div className="mt-4 flex-1">
                                <legend className="fieldset-legend">Category</legend>
                                <select {...register("category", { required: true })} className="select w-full" defaultValue="">
                                    <option value="" disabled>Select a category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="drinks">Drinks</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                </select>
                            </div>

                            <div className="my-4 flex-1">
                                <legend className="fieldset-legend">Price</legend>
                                <input
                                    {...register("price", { required: true })}
                                    type="number"
                                    className="input w-full"
                                    placeholder="Price"
                                />
                            </div>
                        </div>
                        {/* Recipe Details */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Recipe Details</legend>
                            <textarea
                                {...register("recipe", { required: true })}
                                className="textarea w-full rounded-2xl"
                                placeholder="Recipe Details"
                                rows={8}
                            ></textarea>
                        </fieldset>

                        {/* file choose */}
                        <fieldset className="fieldset mt-4">
                            <legend className="fieldset-legend">Upload Recipe Image</legend>
                            <input {...register("image", { required: true })} type="file" className="file-input file-input-success" />
                        </fieldset>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary text-xl font-black mt-4">
                        Add Item <FaUtensils className='ml-2 text-orange-500 text-2xl' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddItems
