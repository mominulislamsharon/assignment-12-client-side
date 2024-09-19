import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { data } from "autoprefixer";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const {title, description, category, price, _id } = useLoaderData();
  console.log(description);

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset} = useForm();
  console.log(data);

  const onSubmit = async (data) => {
    console.log(data)
    // image upload to imgbb add tehn get an url 
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    } );
    if(res.data.success){
      // now send the menu tour data to the server with the image url
      const menuItem = {
        title: data.name,
        category: data.category,
        price: parseFloat(data.price),
        description: data.description,
        image: res.data.data.display_url,
      }

      console.log("menu update", menuItem)
      //
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if(menuRes.data.modifiedCount > 0){
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log('with image url', res.data);

  };

  
  return (
    <div>
      <SectionTitle heading="Update Item"></SectionTitle>
      <div className="bg-blue-100 px-12 py-4 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Tours Name*</span>
              </div>
              <input
                type="text"
                defaultValue={title}
                placeholder="Tour Name"
                {...register("name", {required: true})}
                required
                className="input  input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex gap-6 ">
            {/* category */}
            <div className="w-full">
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Category Name*</span>
                </div>
                <select defaultValue= {category}
                  {...register("category", {required: true})}
                  className="select select-bordered w-full"
                >
                  <option disabled  value="default">
                    Select a Category
                  </option>
                  <option value="salad">Adventure Tours</option>
                  <option value="pizza">Group Tours</option>
                  <option value="soups">Couple Tours</option>
                  <option value="dessert">City Tours</option>
                  <option value="drinks">Beach Holidays</option>
                  <option value="drinks">Hosted Tours</option>
                </select>
              </label>
            </div>
            {/* price details */}
            <div className="w-full">
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                defaultValue={price}
                  type="number"
                  placeholder="price"
                  {...register("price", {required: true})}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            
          </div>
          {/* Tour details */}

          <label className="form-control">
              <div className="label">
                <span className="label-text">Tours Details*</span>
              </div>
              <textarea
              defaultValue={description}
               {...register("description")}
                className="textarea textarea-bordered h-24"
                placeholder="Tour Details"
              ></textarea>
              <div className="label"></div>
            </label>
            <div className="form-control w-full my-6">
            <input {...register("image", {required: true})} type="file" className="file-input   file-input-bordered w-full max-w-xs" />
            </div>

          <button className="btn bg-gradient-to-r from-[#7da4f8] to-[#4382f7] text-white">Update Tour</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;