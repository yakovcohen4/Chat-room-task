const User = require('../modles/user');
const jwt = require('jsonwebtoken');

/***** FUNCTIONS ******/
// Register by -userName, email and password
exports.register = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;
    const exists = await User.find({ $or: [{ email }, { userName }] });

    if (exists.length > 0) {
      throw { status: 409, message: 'Username or email already exists' };
    }

    await User.create({
      userName,
      email,
      password,
    });

    res.send('Registered');
  } catch (err) {
    // console.log(err.message);
    next(err);
  }
};

// login by -userName and password
exports.login = async (req, res, next) => {
  try {
    const userForToken = req.body;
    const { userName, password } = req.body;
    const user = await User.find({ userName: userName, password: password });

    if (user.length === 0) {
      throw { status: 409, message: 'Username or password Incorrect' };
    }

    const tokens = {};
    tokens.accessToken = jwt.sign(
      userForToken,
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '10s',
      }
    );
    tokens.refreshToken = jwt.sign(
      userForToken,
      process.env.REFRESH_ACCESS_TOKEN_SECRET
    );

    res.send(tokens);
  } catch (err) {
    // console.log(err.message);
    next(err);
  }
};
