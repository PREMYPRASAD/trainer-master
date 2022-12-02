const express = require('express');
const { findById } = require('../model/trainerDetails');
const adminRouter = express.Router();
const trainerdata = require('../model/trainerDetails')

//------------------Insertion operation starts----------//

//--admin insert trainer--//
adminRouter.post('/Trainerdetailsadd', async function(req, res) {
    console.log(req.body);
    let item = {
        trainerName: req.body.trainerName,
        trainerEmail: req.body.trainerEmail,
        trainerMobile: req.body.trainerMobile,
        trainerAddress: req.body.trainerAddress,
        trainerOfflocation: req.body.trainerOfflocation,
        trainerUsername: req.body.trainerUsername,
        trainerPassword: req.body.trainerPassword,
    }
    const user = new trainerdata(item);
    const savedUser = await user.save();
    console.log('saved data :', savedUser);
    res.send();

});
//---admin insert trainer ends
//-----------------------------------Insertion operation ends--------------//



//------------------------------------view operstions starts--------------------//
// admin add trainer view

adminRouter.get('/TrainerDetailsview', function(req, res) {
    trainerdata.find()
        .then(function(data) {
            res.send(data);
        });
});

//admin add trainer view ends---//

//--------------------------------view operstion ends-------------------//




//----------------------update operations start-----------------------//

// admin add trainer update

adminRouter.put('/TrainerdetailsUpdate', (req, res) => {
    console.log(req.body)
    id = req.body._id,
        trainerName = req.body.trainerName,
        trainerEmail = req.body.trainerEmail,
        trainerMobile = req.body.trainerMobile,

        trainerAddress = req.body.trainerAddress,
        trainerOfflocation = req.body.trainerOfflocation,
        trainerUsername = req.body.trainerUsername,
        trainerPassword = req.body.trainerPassword,
        trainerdata.findByIdAndUpdate({ "_id": id }, {
            $set: {
                "trainerName": trainerName,
                "trainerEmail": trainerEmail,
                "trainerMobile": trainerMobile,
                "trainerUsername": trainerUsername,
                "trainerPassword": trainerPassword,
                "trainerAddress": trainerAddress,
                "trainerOfflocation": trainerOfflocation

            }
        })
        .then(function(data) {
            res.send(data);
        })
});

// ------------ Update operations ends --------------------


//-----------------------------------delete operation starts--------------//

// admin add trainer remove

adminRouter.delete('/TrainerdetailsRemove/:id', async(req, res) => {

    let id = req.params._id
    const deletetrainer = await trainerdata.findByIdAndDelete(id)
        .then(function() {
            res.send(deletetrainer);
        })
});

// ------------ Delete operations ends ---------------------------//


//------------------------update select operations starts----------//
// admin add trainer select update

adminRouter.get("/TrainerdetailsSelect/:id", (req, res) => {
    const id = req.params.id;
    trainerdata.findById({ _id: id }).then((data) => {
        res.send(data);
    });
});
// ------------ Update Selete operations ends ------------------//

module.exports = adminRouter;