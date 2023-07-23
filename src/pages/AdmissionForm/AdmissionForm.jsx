import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AdmissionForm = () => {
    const { collegeName } = useParams();
    const [loading, setLoading] = useState(false);

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data) => {
        // console.log('Form submitted:', data);
        setLoading(true);
        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(img_hosting_url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgRes) => {
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    console.log(imgURL);
                    const { candidateName, subject, candidateEmail, candidatePhone, address, dateOfBirth } = data;
                    const studentInfo = { candidateName, subject, candidateEmail, candidatePhone, address, dateOfBirth, imgURL, collegeName };
                    fetch('http://localhost:5000/student', {
                        method: 'POST',
                        headers: {
                            "content-type": 'application/json',
                        },
                        body: JSON.stringify(studentInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Added Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                                })
                                setLoading(false);
                            }
                        })
                }
            })

    };

    return (
        <div className="mx-auto p-4 w-[60%] bg-transparent pt-24 pb-6">
            <h2 className="text-2xl text-center mb-8 font-bold ">
                {collegeName} Admission Form
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <div className="mb-4">
                    <label htmlFor="candidateName" className="block font-bold">
                        Candidate Name:
                    </label>
                    <input
                        type="text"
                        id="candidateName"
                        {...register("candidateName", {
                            required: "Candidate Name is required",
                        })}
                        className="w-full border border-gray-400 p-2 rounded-md"
                    />
                    {errors.candidateName && (
                        <span className="text-red-500">{errors.candidateName.message}</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block font-bold">
                        Subject:
                    </label>
                    <input
                        type="text"
                        id="subject"
                        {...register("subject", { required: "Subject is required" })}
                        className="w-full border border-gray-400 p-2 rounded-md"
                    />
                    {errors.subject && (
                        <span className="text-red-500">{errors.subject.message}</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="candidateEmail" className="block font-bold">
                        Candidate Email:
                    </label>
                    <input
                        type="email"
                        id="candidateEmail"
                        {...register("candidateEmail", {
                            required: "Candidate Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        className="w-full border border-gray-400 p-2 rounded-md"
                    />
                    {errors.candidateEmail && (
                        <span className="text-red-500">
                            {errors.candidateEmail.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="candidatePhone" className="block font-bold">
                        Candidate Phone number:
                    </label>
                    <input
                        type="tel"
                        id="candidatePhone"
                        {...register("candidatePhone", {
                            required: "Candidate Phone is required",
                        })}
                        className="w-full border border-gray-400 p-2 rounded-md"
                    />
                    {errors.candidatePhone && (
                        <span className="text-red-500">
                            {errors.candidatePhone.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block font-bold">
                        Address:
                    </label>
                    <input
                        type="text"
                        id="address"
                        {...register("address", { required: "Address is required" })}
                        className="w-full border border-gray-400 p-2 rounded-md"
                    />
                    {errors.address && (
                        <span className="text-red-500">{errors.address.message}</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="dateOfBirth" className="block font-bold">
                        Date of Birth:
                    </label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        {...register("dateOfBirth", {
                            required: "Date of Birth is required",
                        })}
                        className="w-full border border-gray-400 p-2 rounded-md"
                    />
                    {errors.dateOfBirth && (
                        <span className="text-red-500">{errors.dateOfBirth.message}</span>
                    )}
                </div>
                <div className="mb-4 col-span-2">
                    <label htmlFor="image" className="block font-bold">
                        Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        {...register("image")}
                        className="w-full border border-gray-400 p-2 rounded-md"
                    />
                </div>
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdmissionForm;