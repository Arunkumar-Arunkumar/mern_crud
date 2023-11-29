const getGoals = (req, res) => {
    res.status(200).json({ message: "Get Users" })
}

const addGoals = (req, res) => {
    if (req.body.name !== "" || req.body.name !== "undefined") {
        res.status(200).json({ message: "Add Users" });
    } else {
        console.log("Kindly Enter your name");
    }
}

const updateGoals = (req, res) => {
    res.status(200).json({ message: `Update Users ${req.params.id}` })
}

const deleteGoals = (req, res) => {
    res.status(200).json({ message: `Delete Goals ${req.params.id}` })
}

module.exports = {
    getGoals,
    addGoals,
    updateGoals,
    deleteGoals
}

