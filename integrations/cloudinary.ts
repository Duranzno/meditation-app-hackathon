export const uploadFile = async (file: File) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "satsung");

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/duranzno-cloudinary/image/upload`,
        {
            method: "POST",
            body: data,
        }
    );

    console.log(res);
    const cloudFile: { secure_url?: string } = await res.json();
    return cloudFile?.secure_url
}