// const { default: adminModel } = require("@/models/admin")
// const { default: dbConnect } = require("@/utils/dbConnect")
// const { NextResponse } = require("next/server")


import adminModel from "@/models/admin"
import dbConnect from "@/utils/dbConnect"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"


export const POST =async (res) =>{
    try {
       // take incoming data
       const {email, password} = await res.json()
       // call and await the db connection as a function
       await dbConnect()
       //check if email matches any in db using find one 
       const adminEmailVerify = await adminModel.findOne({email:email})
       if (!adminEmailVerify){
        return new NextResponse(JSON.stringify({msg: "Invalid cridentials"}), {status:401})
       }
       //get harshed psword stored in the db
       const hashPassword = adminEmailVerify.password
       //verify if password matches the one from the the adminEmailVerify
       const correctPassword = bcrypt.compareSync(password, hashPassword)
       if (!correctPassword){
        return new NextResponse(JSON.stringify({msg: "Invalid cridentials"}), {status:401})
       }
       return new NextResponse(JSON.stringify({msg: "Admin successfully logged in"}), {status:200})
    }
     catch (error) {
        console.log(error.message)
        return new NextResponse(JSON.stringify({msg: "Srver Error"}), {status:500})
        
    }
}