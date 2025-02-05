import User from "../models/user.model.js"

export const signup = async (req,res)  => {
    try {
        const {email,password,name} = req.body
    const userExist =await User.findOne({email})
    
    if(userExist){
        return res.status(400).json({message:"User already exists"})
    }

    const user = await User.create({name,email,password})

    res.status(201).json({user,message: "User created successfully"})
    } catch (error) {
        res.status(500).json({message:error.message })
    }
}
export const login = async (req,res)  => {
    res.send("login route called")
}
export const logout = async (req,res)  => {
    res.send("logout route called")
}