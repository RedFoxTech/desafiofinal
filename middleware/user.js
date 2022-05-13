const { getOneEmail } = require("../model/user");
const { body } = require("express-validator");

/* exports.validateCreate = [
    body('email').trim().notEmpty().isEmail(), 
    body('password').trim().notEmpty().isLength({ min: 6 }).isString()], (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }
      res.send({ message: 'Tudo válido' })
    }; */

exports.validateDuplicatedEmail = async (req, res, next) => {
    const {email} = req.body
    const {data} = await getOneEmail(email)
    if(data) return res.status(400).json({message: 'Cadastro duplicado!'})
    return next()
  };