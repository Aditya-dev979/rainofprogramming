// import mongoose from "mongoose";

// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("mongodb conected");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectDb;
// // 

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    // Options hata diye gaye hain kyunki yeh ab default hain
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};

export default connectDb;

