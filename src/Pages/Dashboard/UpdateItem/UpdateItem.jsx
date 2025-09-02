
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionTile from "../../../Components/SectionTitle/SectionTile";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [existingItem, setExistingItem] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  // Load existing item
  useEffect(() => {
    fetch(`http://localhost:5000/menu/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setExistingItem(data);
        reset(data); // form এ পুরানো value বসাবে
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({ icon: "error", title: "Failed to load item", text: err.message });
        setLoading(false);
      });
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      setUpdating(true); // spinner start
      let imageUrl = existingItem.image || "";

      // যদি নতুন image select করা হয়
      if (data.image && data.image[0]) {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        const res = await axiosPublic.post(image_hosting_api, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (res.data.success) imageUrl = res.data.data.display_url;
      }

      // শুধু changed field update
      const updatedItem = {
        name: data.name?.trim() || existingItem.name,
        price: data.price ? parseFloat(data.price) : existingItem.price,
        recipe: data.recipe?.trim() || existingItem.recipe,
        category: data.category || existingItem.category,
        image: imageUrl,
      };

      const menuResponse = await axiosSecure.patch(`/menu/${id}`, updatedItem);

      if (menuResponse.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Item updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        setExistingItem(updatedItem);
        reset(updatedItem);
      } else {
        Swal.fire({
          icon: "info",
          title: "No changes detected",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Update failed",
        text: error.message || "Something went wrong",
      });
    } finally {
      setUpdating(false); // spinner stop
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-96">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
      </div>
    );

  return (
    <div>
      <SectionTile subHading={"Update info"} Hading={"Update Item"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Recipe Name */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Recipe Name</legend>
          <input
            {...register("name")}
            type="text"
            className="input w-full"
            placeholder="Recipe Name"
            defaultValue={existingItem.name}
          />
        </fieldset>

        {/* Category & Price */}
        <div className="flex gap-4">
          <div className="mt-4 flex-1">
            <legend className="fieldset-legend">Category</legend>
            <select
              {...register("category")}
              className="select w-full"
              defaultValue={existingItem.category}
            >
              <option value="" disabled>
                Select a category
              </option>
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
              {...register("price")}
              type="number"
              className="input w-full"
              placeholder="Price"
              defaultValue={existingItem.price}
            />
          </div>
        </div>

        {/* Recipe Details */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Recipe Details</legend>
          <textarea
            {...register("recipe")}
            className="textarea w-full rounded-2xl"
            placeholder="Recipe Details"
            rows={8}
            defaultValue={existingItem.recipe}
          />
        </fieldset>

        {/* File Upload */}
        <fieldset className="fieldset mt-4">
          <legend className="fieldset-legend">Upload Recipe Image</legend>
          <input
            {...register("image")}
            type="file"
            className="file-input file-input-success"
          />
        </fieldset>

        <button
          type="submit"
          disabled={updating}
          className={`btn btn-primary text-xl font-black mt-4 flex items-center justify-center ${
            updating ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {updating ? (
            <div className="w-6 h-6 border-4 border-dashed border-white rounded-full animate-spin mr-2"></div>
          ) : null}
          Update Item <FaUtensils className="ml-2 text-orange-500 text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
