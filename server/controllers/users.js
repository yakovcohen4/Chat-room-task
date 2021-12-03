const User = require('../modles/user');

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
    const { userName, password } = req.body;
    const user = await User.find({ userName: userName, password: password });

    if (user.length === 0) {
      throw { status: 409, message: 'Username or password Incorrect' };
    }

    res.send('login');
  } catch (err) {
    // console.log(err.message);
    next(err);
  }
};
