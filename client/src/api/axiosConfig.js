import axios from "axios";
import Config from "../config/Config";

axios.defaults.baseURL = Config.apiURL;
