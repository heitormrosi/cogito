import passport from "passport";
import LocalStrategy from "passport-local";

import db from "./db.js";

passport.use(new LocalStrategy((username, password, done) => {


}));