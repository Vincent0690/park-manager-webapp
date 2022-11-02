import { config } from "dotenv";
config();

import favicon from "serve-favicon";
import device from "express-device";
import mongoose from "mongoose";
import express from "express";
import helmet from "helmet";
import path from "path";

const PORT = process.env.PORT || 3000;

const app = express();

