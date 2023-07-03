const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

const downloadInventory = async (req, res, db) => {
  const data = await db.select("*").from("inventory");
  console.log(data);

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");

  // Guardar el archivo temporalmente en el servidor
  const directoryPath = path.join(__dirname, "temp");
  const filePath = path.join(directoryPath, "data.xlsx");

  // Crear el directorio "temp" si no existe
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
  }

  XLSX.writeFile(workbook, filePath, { bookType: "xlsx", type: "file" });

  // Descargar el archivo
  res.download(filePath, (err) => {
    if (err) {
      console.log(err);
    } else {
      fs.unlinkSync(filePath);
    }
  });
};

module.exports = {
  downloadInventory,
};
