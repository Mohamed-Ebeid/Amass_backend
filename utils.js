import jwt from "jsonwebtoken";

export const generateToken = (emp) => {
  return jwt.sign(
    {
      _id: emp._id,
      fname: emp.fname,
      lname: emp.lname,
      email: emp.emp_email,
      isAdmin: emp.isAdmin,
    },

    process.env.JWT_SECRECT,

    {
      expiresIn: "30d",
    }
  );
};

export const isAuth = (req, res, next) => {
  // Middleware for authentiction
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRECT, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Something is wrong!" });
      } else {
        req.emp = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token were generated!" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.emp && req.emp.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized Access" });
    //console.log(req.emp);
  }
};
