'use strict'
const shopmodel = require('../models/shop.model')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const RoleShop = {
    SHOP:"shopdev",
    WRITE:"write",
    EDITOR:"editor",
    ADMIN:"admin",
    

}
//service access la  cac login loguot  signup signout 
class AccessService{     

     static signUp = async({name, email, password}) =>{
          try{
               // Validate input
          }catch(error){
               throw error
          }
     }
}
module.exports = new AccessService()
