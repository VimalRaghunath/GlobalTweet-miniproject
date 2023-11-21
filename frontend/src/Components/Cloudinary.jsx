import axios from "axios";

const upload = async (File) => {
    const data = new FormData();
    data.append("file",File)
    console.log(File)
    data.append("upload_preset","avatar")

    try {
        const res = await axios
        .post("https://api.cloudinary.com/v1_1/dnsmxuhrz/upload", data,{
            headers:{
                "Content-Type": "multipart/form-data",
            },
        })
     if(res.status === 200) {
        console.log("upload successful:",res.data.url);
        return res.data.url;
     } else {
        console.error("upload failed.Response:",res);
        throw new error ("upload failed")
     }
    } catch (error) {

       console.error("error uploading file:", error)
        if(error.response) {
            console.error("Response data:",error.response.data)
        }
        throw error;
    }
};

export default upload;