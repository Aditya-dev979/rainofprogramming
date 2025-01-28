import multer from "multer";

const upload = multer({ dest: "uploads/" }); // Folder path fix

export default upload;





// import multer from "multer";

// const storage = multer.memoryStorage(); // Store files in memory for fast access
// const upload = multer({ storage }); // Multer configuration

// export default upload;







