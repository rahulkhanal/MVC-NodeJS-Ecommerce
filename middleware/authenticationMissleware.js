const User = require('../model/user');

exports.checkAuth = async (req, res, next) => {
//   console.log(req.cookies);
//   console.log(req.cookies);
//   const userId = req.cookies.user._id;
//   console.log(userId);
if(req.cookie.user !== undefined){
      console.log("*****************");
    console.log(req.cookies.user);
    const {_id,name,email,password,role}=req.cookies.user
    if (!_id) {
      return res.status(401).json({ error: 'Authentication required' });
    }
  
    try {
      const user = await User.findById(_id);
      if (!user) {
        return res.status(401).json({ error: 'Authentication required' });
      }
  
      // User is authenticated, you can also check for user role if needed
      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
}
};
