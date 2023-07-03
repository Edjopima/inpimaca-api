const downloadInventory = async (req, res, db) => {
  const data = await db.select("*").from("inventory");
  console.log(data);
};

module.exports = {
  downloadInventory,
};
