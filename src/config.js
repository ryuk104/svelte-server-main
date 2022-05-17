exports.PORT = 4000;
exports.MONGODB_URI = "mongodb+srv://quax:1234@sessions.capmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
exports.NODE_ENV = process.env.NODE_ENV;

exports.JWT_SECRET = "Bearer ";
exports.ORIGIN = process.env.ORIGIN;

exports.SOCKET_OPTIONS = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
};

