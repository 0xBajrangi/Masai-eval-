const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/jobs");

}

// define schema for the collection
const companySchema = new mongoose.Schema({
    company_name: { type: String, required: true },
    job_title: { type: String, required: true},
    city: { type: String, required: true },
    workFromHome: { type: String, required: true },
    notice_periode: { type: Number, required: true },
    skill_required: [{ type: String, required: true }],
    rating: { type: Number, required: true },
    jobs_open:{type: Number, required: true}
    
    
}, {
    versionKey: false,
});

// make model
const Company = mongoose.model('company',companySchema);

// write crud api 

app.get("/company", async (req, res) => {
    try {
        
        const companies = await Company.find().lean().exec();
        return res.status(201).send(companies);
    } catch (e) {
        return res.status(500).json({ message:e });
    }
});

app.post("/company", async (req, res) => {
    try {
        const company = await Company.create(req.body);
        return res.status(201).send(company);
       
    } catch (e) {
        return res.status(500).json({ message: e });
    }
});

app.get("/company/:city/:skill", async (req, res) => {
     try {
         console.log(req.params.city, req.params.skill);
         const companies = await Company.find({ "city": req.params.city, "skill_required": req.params.skill  }).lean().exec();
        return res.status(201).send(companies);
         
       
    } catch (e) {
        return res.status(500).json({ message: e });
    }
});
// for work form home only 
app.get("/company/workhome", async (req, res) => {
     try {
         console.log(req.params.city, req.params.skill);
         const companies = await Company.find({ workFromHome:"yes"  }).lean().exec();
        return res.status(201).send(companies);
         
       
    } catch (e) {
        return res.status(500).json({ message: e });
    }
});


app.get("/noticePeriode/:id", async (req, res) => {
     try {
         
         const companies = await Company.find({ notice_periode:req.params.id}).lean().exec();
        return res.status(201).send(companies);
         
       
    } catch (e) {
        return res.status(500).json({ message: e });
    }
});

app.get("/rating", async (req, res) => {
    

    try {
         
        const companies = await Company.find().sort({ rating: -1 }).lean().exec();
        return res.status(201).send(companies);
         
       
    } catch (e) {
        return res.status(500).json({ message: e });
    }

});
app.get("/openjobs", async (req, res) => {
    

    try {
         
        const companies = await Company.find().sort({ jobs_open: -1 }).limit(1).lean().exec();
        return res.status(201).send(companies);
         
       
    } catch (e) {
        return res.status(500).json({ message: e });
    }

});

app.patch("/company/:id", async (req, res) => {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }).lean().exec();
    return res.status(201).send(company);
})






app.listen(1234, () => {
    connect();
    console.log("listenign to port 1234...");

})