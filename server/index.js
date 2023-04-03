const express =require('express');
const mongoose = require('mongoose');
const app = express();
const {Inventorymodel} = require("./model/InventoryModel");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const empM = require("./model/EmployeeModel");
 require("dotenv").config();
app.use(express.json());
app.use(cors({ origin: `*` }));
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://tasksmaster616:MVfQgVzTtkORgAvp@cluster0.buccpan.mongodb.net/InvStocks?retryWrites=true&w=majority",
process.env.DB,
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
    );
    mongoose.set('strictQuery', true)
// mongoose
// .connect(process.env.DATABASE, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true})
// .then(() => console.log('Succefully Login!'));


////////////////.....Employee Routes.....////////////////////////////////////
const bcrypt = require("bcrypt");
const {Employeedb,validate} = require('./model/EmployeeModel');
const EmployeeModel = require('./model/EmployeeModel');
const Joi = require('joi')
const authroute = require('./Routes/Auth')
const EmpUser = require('./Routes/EmpUser')
const AdminRoutes = require('./Routes/Routes')
const UserRoutes = require('./Routes/UserRoutes')
const RoleCheck = require('./Routes/RoleCheck')
const RouteSec = require('./Routes/RouteSec')
const InvMngmnt = require('./Routes/InvMngmntRoutes')
const AnnouncementRoute = require('./Routes/AnnouncementRoutes')
const InvHistoryRoutes = require('./Routes/HistoryRoutes')
const UserMngmntHistoryRoutes = require('./Routes/UserMngemntHistoryRoutes')
const PayrollRoutes = require('./Routes/PayrollRoutes')
const RequestRoutes = require('./Routes/RequestRoutes')
app.use('/signIn',authroute);
app.use('/PreReg',EmpUser)
app.use('/admin',AdminRoutes)
app.use('/api',UserRoutes)
app.use('/mw',RoleCheck)
app.use('/InvMngmnt',InvMngmnt)
app.use('/Ann',AnnouncementRoute)
app.use('/InvHistory',InvHistoryRoutes)
app.use('/UserMngmnt',UserMngmntHistoryRoutes)
app.use('/Payroll',PayrollRoutes)
app.use('/request', RequestRoutes)
////Authentication Route////
{/*
app.post("/signIn", async (req, res) => {
	// //try {
	// 	const { error } = validation(req.body);
	// 	if (error)
	// 		return res.status(400).send({ message: error.details[0].message });

	// 	const Employee = await Employeedb.findOne({ Emailad: req.body.Emailad });
	// 	if (!Employee)
	// 		return res.status(401).send({ message: "Invalid Email or Password" });

	// 	const validPassword = await bcrypt.compare(
	// 		req.body.password,
	// 		Employee.password
	// 	);
	// 	if (!validPassword){
    //         return res.status(401).send({ message: "Invalid Email or Password" });
    //     }
	// 	const token = Employee.generateAuthToken();
	// 	res.status(200).send({ data: token, message: "logged in successfully" });
	// // } catch (error) {
    // //     console.log("8====D")
	// // 	res.status(500).send({ message: "Internal Server Error" });
	// // }

   const { Emailad, password } = req.body;
    console.log("ekek " + Emailad );
    Employeedb.findOne({Emailad}).exec((err, Employee)=>{
        console.log("dasda " + Employee)
        
        if (err || !Employee) {
            return res.status(400).json({
                error: 'User with that mobileNumber does not exist. Please signup. 8====D'
            });
        }
        

        // authenticate
      if (!Employee.validate(password)) {
         return res.status(400).send({
         error: 'mobileNumber and password do not match.asda'
           });
         }

        const token = jwt.sign({ _id: Employee._id }, process.env.JWTPRIVATEKEY, { expiresIn: '1d' });

        res.cookie('token', token, { expiresIn: '1d' });
        const { _id, FirstName,MiddleName, LastName, ContactNo, Emailad, position, department, immSuperior, EmPerToContact, sSS, pagIbig, tinId, empStatus} = Employee;
        // if (active == 0) {
        //     return res.status(400).json({
        //         error: 'account is not yet active, please verify your account first!'
        //     });
        // }


        
        return res.json({
            token,
            Employee: {_id, FirstName,MiddleName, LastName, ContactNo, Emailad, position, department, immSuperior, EmPerToContact, sSS, pagIbig, tinId, empStatus}
        });

})
 } )
*/}
//});

////user Creation Route////
{/*app.post("/req", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const employee = await Employeedb.findOne({ Emailad: req.body.Emailad });
		if (employee)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new Employeedb({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

*/}









    const PORT = process.env.PORT || 3001;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));
