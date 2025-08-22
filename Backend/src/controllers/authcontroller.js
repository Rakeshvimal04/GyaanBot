import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//register for users
export const registerUser  = async (req,res)=>{
    try{
        const {name,email,password} = req.body;

        const exists = await User.findOne({email});
        if(exists){
            return res.status(400).json({message:"Email already exists"});
        }

        const user = await User.create({name,email,password});

        res.status(201).json({
            message:"User registered successfully",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role
            }
        })

    }
    catch(error){
        res.status(500).json({message:"Server error"});
    }
}

//login for users

export const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({message:"Please provide email and password"});
        }

        // to find users
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid credentials"});
        }

        // compare Password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }

        // generate token
        const token = jwt.sign(
            {id:user._id , role:user.role},
            process.env.JWT_SECRET || "supersecret",
            { expiresIn: "1d" }
        );
         res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
        
    }
    catch(error) {
    console.error("❌ Login error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
    }
};