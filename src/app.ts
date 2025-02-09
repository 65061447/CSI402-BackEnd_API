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




app.use("/", (req: Request, res: Response) => {
    res.send("Welcome TO the api");
   });