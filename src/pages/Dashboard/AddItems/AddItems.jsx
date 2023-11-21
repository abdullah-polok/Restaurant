import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import { FaUtensils } from "react-icons/fa";
const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <SectionTitle heading={"add an item"} subHeading={"What's New"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-5 ">
                        <label className="label">
                            <span className="label-text-alt">Recipe Name*</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Recipe name" className="input input-bordered w-full" />

                    </div>

                    {/* Caterory */}
                    <div className="flex gap-2">
                        <div className="form-control w-full mb-5 ">
                            <label className="label">
                                <span className="label-text-alt">Category*</span>
                            </label>
                            <select {...register("category", { required: true })} className="mb-5 select select-bordered w-full">
                                <option disabled selected>Select a category</option>
                                <option value={"salad"}>Salad</option>
                                <option value={"pizza"}>Pizza</option>
                                <option value={"soup"}>Soup</option>
                                <option value={"dessert"}>Dessert</option>
                                <option value={"drinks"}>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full mb-5 ">
                            <label className="label">
                                <span className="label-text-alt">Price*</span>
                            </label>
                            <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* Recipe Details */}
                    <div className="form-control w-full mb-5 ">
                        <label className="label">
                            <span className="label-text-alt">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    <div>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="text-center">
                        <button className="btn" type="submit">Add Item  <FaUtensils className="ml-4"></FaUtensils></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;