const cloudinary = require('./cloudinary.js');

async function uploadImage({fodler_name}) {
  try {

    let file_name = "./clients/Ellipse 33.svg"
    const result = await cloudinary.uploader.upload(file_name, {
      folder: fodler_name, // This is a optional parameter: info for my fellow dev
      public_id: 'my_solutions' // This is a optional parameter: info for my fellow dev
    });

    console.log(`Image uploaded: ${file_name} :  ${result.secure_url}`);
  } catch (err) {
    console.error('Upload error:', err);
  }
}

uploadImage({fodler_name: "clients"});
