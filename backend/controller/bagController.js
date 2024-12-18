import userModel from "../models/userModel.js"

// add product and workshop to user bag
const addToBag = async (req, res) => {
    try {

        const { userId, productId } = req.body

        const userData = await userModel.findById(userId)
        let bagData = await userData.bagData

        if (bagData[productId]) {
            if (bagData[productId]) {
                bagData[productId] += 1
            } else {
                bagData[productId] = 1
            }
        } else {
            bagData[productId] = {}
            bagData[productId] = 1
        }

        await userModel.findByIdAndUpdate(userId, { bagData })

        res.json({ success: true, message: "Added To Bag" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// update product and workshop to user bag
const updateBag = async (req, res) => {
    try {

        const { userId, productId, quantity } = req.body

        const userData = await userModel.findById(userId)
        let bagData = await userData.bagData

        bagData[productId] = quantity

        await userModel.findByIdAndUpdate(userId, { bagData })
        res.json({ success: true, message: "Bag Update" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// get user bag
const getUserBag = async (req, res) => {
    try {

        const { userId } = req.body

        const userData = await userModel.findById(userId)
        let bagData = await userData.bagData

        res.json({ success: true, bagData})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addToBag, updateBag, getUserBag }