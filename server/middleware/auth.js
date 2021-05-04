// the function of this file is to check whether user token is still valid while sending requests to backend
import jwt from 'jsonwebtoken';

const auth = async ( req, res, next ) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      // our own token case; checking the secret message as well
      decodedData = jwt.verify(token, 'test')
      // after we assigned value to this req.userId, it will be accessible in the following controller methods(req.userId)
      req.userId = decodedData?.id;
    } else {
      // google token case
      decodedData = jwt.decode(token);
      // sub is google's name of an unique id
      req.userId = decodedData?.sub;
    }

    next();
  } catch(e) {
    console.log(e);
  }
}

export default auth;