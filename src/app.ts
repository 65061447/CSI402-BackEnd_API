import express,{Request,Response} from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

const PORT = process.env.PORT
app.listen(PORT, () => {
 console.log(`Server is listening on port ${PORT}`);
});




app.post("/SPU", (req: Request, res: Response) => {
    const memberPoint = 1000
    const {paymentPoint,studentId} = req.body //paymentPoint คือ ยอดชำระครับ ทุกๆ 100 บาทได้ 10 แต้ม
    if(!paymentPoint || !studentId){
        res.status(400).json({
            status: "400",
            msg : "กรุณากรอกข้อมูลให้ครบ"
        })
    }
else {
    const totalPointget = Math.floor(paymentPoint/100) *10
    const totalPointhave = memberPoint + totalPointget
    res.status(200).json ({
        status : "200",
        msg : "success",
        data : {
            รหัสสมาชิกที่สะสมแต้ม : studentId,
            จำนวนแต้มที่ได้รับ : totalPointget,
            จำนวนแต้มทั้งหมด : totalPointhave
        }
    })
}
   });