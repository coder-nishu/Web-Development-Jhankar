import { useState } from "react";

const form = () => {
    const submitForm = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Here you can handle the form data, e.g., send it to an API or
        console.log("Form submitted!",formData);
    };
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        gender: ''
    }); 
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]: value});
    }
    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={submitForm} className="space-y-4">
                {/* Name Input */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white"
                    >
                        Name
                    </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="name"
                        name="userName"
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white"
                    >
                        Email
                    </label>
                    <input
                    onChange={handleChange}
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Password Input */}
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-white"
                    >
                        Password
                    </label>
                    <input
                    onChange={handleChange}
                        type="password"
                        id="password"
                        name="password"
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Gender Dropdown */}
                <div>
                    <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-white"
                    >
                        Gender
                    </label>
                    <select
                    onChange={handleChange}
                        id="gender"
                        name="gender"
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option className="text-black" value="">Select your gender</option>
                        <option className="text-black" value="male">Male</option>
                        <option className="text-black" value="female">Female</option>
                        <option className="text-black" value="other">Other</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default function Form() {
    return form();
}
