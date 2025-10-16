import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const createCategoryPost = (req:Request, res:Response, next:NextFunction) => {
    const schema = Joi.object({
      name: Joi.string()
        .required()
        .messages({
            "string.empty": "Vui lòng nhập tên danh mục!"
        }),
      parent: Joi.string().allow(''),
      description: Joi.string().allow('')
      })
    const { error } = schema.validate(req.body);

    if(error){
        const errorMessage = error.details[0].message 
        res.json({
            code:"error",
            message: errorMessage
        })
        return;
    }

    next();
      
}
