import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_URL;




export const postBlog = async (formData) => {
    try {
        const res = await axios.post(
            `${API_BASE_URL}/blogs/post`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return res.data;
    } catch (error) {
        throw error.response?.data || { error: "Something went wrong." };
    }
};





export const fetchLatestBlogs = async () => {
    try {
        const res = await axios.get(`${API_BASE_URL}/blogs/latest`);
        return res.data.blogs;
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
};




export const getBlogsByUser = async (userId) => {
    try {
        const res = await axios.get(`${API_BASE_URL}/blogs/user/${userId}`);
        return res.data.blogs;
    } catch (error) {
        console.error("Failed to fetch user blogs", error);
        return [];
    }
};



export const searchBlogs = async (country, state) => {

    try {
        const params = {};
        if (country) params.country = country;
        if (state) params.state = state

        const res = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/search`, { params });
        return res.data.blogs;
    }
    catch (err) {
        console.error("Search failed", err);
        return [];

    }
}


export const blogDetails = async (id) => {

    try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/${id}`);
        return res.data.blog;
    } catch (error) {
        console.error("Failed to fetch blog details:", error);
        return null;
    }
};