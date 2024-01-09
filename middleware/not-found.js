export const notFound = async (req, res, next) => {
  res.status(404).json({ msg: "Not found" });
};
