import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token =import.meta.env.VITE_image_upload_token;

const AddItem = () => {
    const[axiosSecure]= useAxiosSecure()
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url,{
            method:'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
            if(imgResponse){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;

                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                .then(data =>{
                    console.log('after posting new menu', data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item addaded successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    }
    console.log(img_hosting_token);
    console.log(errors);
    return (
        <div className="w-full px-10 py-8">
            <SectionTitle subHeading="What's New" heading="Add an Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="recipe name"
                        {...register("name", { required: true, maxLength: 100 })}
                        className="input input-bordered w-full  " />
                    <div className="flex my-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>

                            </label>
                            <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Salad</option>
                                <option>Drinks</option>
                                <option>Dessert</option>
                            </select>
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full  " />
                        </div>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>

                <div className="form-control w-full my-4 ">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full  " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add item" />

            </form>
        </div>
    );
};

export default AddItem;