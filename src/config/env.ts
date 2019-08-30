import dotenv from "dotenv";

dotenv.config();

const PORT= process.env.PORT || "";
const DB_NAME= process.env.DB_NAME || "";
const DB_USER= process.env.DB_USER || "";
const DB_PASS= process.env.DB_PASS || "";
const DB_HOST= process.env.DB_HOST || "";

export { PORT, DB_NAME, DB_USER, DB_HOST, DB_PASS }
