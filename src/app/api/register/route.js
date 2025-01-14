// import adminModel from "@/models/admin"
// import dbConnect from "@/utils/dbConnect"
// import bcrypt from "bcryptjs"
// import { NextResponse } from "next/server"


// export const POST = async (res) => {
//    //call db
//    try {
//       await dbConnect()

//       //take incoming values
//       const { name, email, gender, contact, country, password } = await res.json()

//       // prevent user from registerign with teh same email
//       const existingAdmin = await adminModel.findOne({ email: email })
//       if (existingAdmin) {
//          return new NextResponse(JSON.stringify({ msg: "Email  already exists" }), { status: 409 });
//       }
//       //hash admin password
//       const salt = bcrypt.genSaltSync(16)
//       const hashPassword = bcrypt.hashSync(password, salt)

//       //   store values in the Database

//       const admin = new adminModel({ name, email, gender, contact, country, password: hashPassword })
//       await admin.save()
//       if (!admin) {
//          return new NextResponse(JSON.stringify({ msg: "admin not created" }), { status: 400 })
//       }
//       return new NextResponse(JSON.stringify({ msg: "admin  created" }), { status: 201 })

//    }
//    catch (error) {
//       console.log(error.message)
//       return new NextResponse(JSON.stringify({ msg: error.message }), { status: 500 })
//    }
// }


import adminModel from "@/models/admin";
import dbConnect from "@/utils/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    // Connect to DB
    await dbConnect();

    // Parse request body
    const { name, email, gender, contact, country, password } = await req.json();

    // Check if the email already exists
    const existingAdmin = await adminModel.findOne({ email });
    if (existingAdmin) {
      return new NextResponse(
        JSON.stringify({ msg: "Email already exists" }),
        { status: 409 }
      );
    }

    // Hash the password asynchronously
    const hashPassword = await bcrypt.hash(password, 16);

    // Create and save the admin
    const admin = new adminModel({
      name,
      email,
      gender,
      contact,
      country,
      password: hashPassword,
    });
    await admin.save();

    if (!admin) {
      return new NextResponse(
        JSON.stringify({ msg: "Admin not created" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ msg: "Admin created" }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error.message);
    return new NextResponse(
      JSON.stringify({ msg: error.message }),
      { status: 500 }
    );
  }
};


export function getActiveUser(res){
//   const { token} = res.
}