module.exports = app => {
    app.use("/link", require("./PostModel/Routes/index"))
    // app.use("/whatsapp", require("./Connection/Routes/index"))
  };