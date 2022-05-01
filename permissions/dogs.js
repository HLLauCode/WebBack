const AccessControl = require('role-acl')
const ac = new AccessControl()

ac.grant('user').execute('read').on('dogs')

ac.grant('admin').execute('read').on('dogs')
  .execute('create').on('dogs')
  .execute('update').on('dogs')
  .execute('delete').on('dogs')

exports.readAll = (requester) => 
  ac.can(requester.role).execute('read').sync().on('dogs')

exports.read = (requester, data) => 
  ac.can(requester.role)
    .execute('read').sync().on('dogs')

exports.create = (requester, data) => 
  ac.can(requester.role)
    .execute('create').sync().on('dogs')

exports.update = (requester, data) => 
  ac.can(requester.role)
    .execute('update').sync().on('dogs');


exports.delete = (requester, data) => 
  ac.can(requester.role)
    .execute('delete').sync().on('dogs');
