import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { GoPackage } from "react-icons/go";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddPackage = () => {
  const { register, handleSubmit, reset} = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

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
        image: res.data.data.display_url 
      }
      //
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data);
      if(menuRes.data.insertedId){
        reset();
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log('with image url', res.data);

  };
  return (
    <div>
      <SectionTitle heading="Add an Packages" subheading="What's new?"></SectionTitle>
      <div className="bg-blue-100 px-12 py-4 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Tours Name*</span>
              </div>
              <input
                type="text"
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
                <select defaultValue= "default"
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
            {/* price */}
            <div className="w-full">
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
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
              <textarea {...register("tour")}
                className="textarea textarea-bordered h-24"
                placeholder="Tour Details"
              ></textarea>
              <div className="label"></div>
            </label>
            <div className="form-control w-full my-6">
            <input {...register("image", {required: true})} type="file" className="file-input   file-input-bordered w-full max-w-xs" />
            </div>

          <button className="btn bg-gradient-to-r from-[#5144fa] to-[#838eec] text-white">Add Tours <GoPackage className="ml-4"></GoPackage></button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;