export const Login = async (req, res, next) => {
  res.status(200).json({ msg: "Login" });
};

export const Register = async (req, res, next) => {
  res.status(200).json({ msg: "Register" });
};
