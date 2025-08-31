// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import SectionTile from "../../../Components/SectionTitle/SectionTile";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { useForm } from "react-hook-form";
// import { FaUtensils } from "react-icons/fa";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// const UpdateItem = () => {
//   const { id } = useParams();
//   const [item, setItem] = useState(null);
//   const { register, handleSubmit, reset } = useForm();
//   const axiosPublic = useAxiosPublic();
//   const axiosSecure = useAxiosSecure();
  
//   const { name, price, recipe, category, _id } = item;

//   useEffect(() => {
//     fetch(`http://localhost:5000/menu/${id}`)
//       .then((res) => res.json())
//       .then((data) => setItem(data));
//   }, [id]);

//   const onSubmit = async (data) => {
//     const imageFile = { image: data.image[0] };
//     const res = await axiosPublic.post(image_hosting_api, imageFile, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     if (res.data.success) {
//       const menuItem = {
//         name: data.name,
//         price: parseFloat(data.price),
//         recipe: data.recipe,
//         category: data.category,
//         image: res.data.data.display_url,
//       };
//       const menuResponse = await axiosSecure.patch(`/menu/${_id}`, menuItem);
//       if (menuResponse.data.insertedId) {
//         reset();
//         Swal.fire({
//           icon: "success",
//           title: `${data.name} is added successfully`,
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//     }
//   };

//   // ✅ loading state handle
//   if (!item) {
//     return <p>Loading.......</p>;
//   }

//   return (
//     <div>
//       <SectionTile subHading={"Update info"} Hading={"Update Item"} />
//       <div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Recipe Name */}
//           <fieldset className="fieldset">
//             <legend className="fieldset-legend">Recipe Name</legend>
//             <input
//               defaultValue={name}
//               {...register("name", { required: true })}
//               type="text"
//               className="input w-full"
//               placeholder="Recipe Name"
//             />
//           </fieldset>

//           {/* Category and Price */}
//           <div className="flex gap-4">
//             <div className="mt-4 flex-1">
//               <legend className="fieldset-legend">Category</legend>
//               <select
//                 defaultValue={category}
//                 {...register("category", { required: true })}
//                 className="select w-full"
//               >
//                 <option value="" disabled>
//                   Select a category
//                 </option>
//                 <option value="salad">Salad</option>
//                 <option value="pizza">Pizza</option>
//                 <option value="drinks">Drinks</option>
//                 <option value="soup">Soup</option>
//                 <option value="dessert">Dessert</option>
//               </select>
//             </div>

//             <div className="my-4 flex-1">
//               <legend className="fieldset-legend">Price</legend>
//               <input
//                 defaultValue={price}
//                 {...register("price", { required: true })}
//                 type="number"
//                 className="input w-full"
//                 placeholder="Price"
//               />
//             </div>
//           </div>

//           {/* Recipe Details */}
//           <fieldset className="fieldset">
//             <legend className="fieldset-legend">Recipe Details</legend>
//             <textarea
//               defaultValue={recipe}
//               {...register("recipe", { required: true })}
//               className="textarea w-full rounded-2xl"
//               placeholder="Recipe Details"
//               rows={8}
//             ></textarea>
//           </fieldset>

//           {/* File Upload */}
//           <fieldset className="fieldset mt-4">
//             <legend className="fieldset-legend">Upload Recipe Image</legend>
//             <input
//               {...register("image")}
//               type="file"
//               className="file-input file-input-success"
//             />
//           </fieldset>

//           {/* Submit button */}
//           <button
//             type="submit"
//             className="btn btn-primary text-xl font-black mt-4"
//           >
//             Update Item <FaUtensils className="ml-2 text-orange-500 text-2xl" />
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateItem;


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionTile from "../../../Components/SectionTitle/SectionTile";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
    // ✅ loading state handle
  if (!item) {
    return <p>Loading.......</p>;
  }

  // ✅ destructure এখানে করো
  const { name, price, recipe, category , _id} = item;

  useEffect(() => {
    fetch(`http://localhost:5000/menu/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  const onSubmit = async (data) => {
    let imageUrl = item.image; // পুরানো image রাখবো default হিসাবে

    if (data.image && data.image.length > 0) {
      // যদি নতুন image select করা হয়
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        imageUrl = res.data.data.display_url;
      }
    }

    const menuItem = {
      name: data.name,
      price: parseFloat(data.price),
      recipe: data.recipe,
      category: data.category,
      image: imageUrl,
    };

    const menuResponse = await axiosSecure.patch(`/menu/${_id}`, menuItem);

    if (menuResponse.data.modifiedCount > 0) {
      reset();
      Swal.fire({
        icon: "success",
        title: `${data.name} updated successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };



  return (
    <div>
      <SectionTile subHading={"Update info"} Hading={"Update Item"} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Name</legend>
            <input
              defaultValue={name}
              {...register("name", { required: true })}
              type="text"
              className="input w-full"
              placeholder="Recipe Name"
            />
          </fieldset>

          {/* Category and Price */}
          <div className="flex gap-4">
            <div className="mt-4 flex-1">
              <legend className="fieldset-legend">Category</legend>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select w-full"
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
                defaultValue={price}
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
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea w-full rounded-2xl"
              placeholder="Recipe Details"
              rows={8}
            ></textarea>
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

          {/* Submit button */}
          <button
            type="submit"
            className="btn btn-primary text-xl font-black mt-4"
          >
            Update Item <FaUtensils className="ml-2 text-orange-500 text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
