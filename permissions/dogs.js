const AccessControl = require('role-acl')
const ac = new AccessControl()

ac.grant('user').execute('read').on('dogs')

ac.grant('admin').execute('read').on('dogs')
ac.grant('admin').execute('create').on('dogs')
ac.grant('admin').execute('update').on('dogs')
ac.grant('admin').execute('delete').on('dogs')

exports.readAll = (requester) => 
  ac.can(requester.role).execute('read').sync().on('dogs')

exports.read = (requester, data) => 
  ac.can(requester.role)
    .context({ requester:requester.ID, owner:data.ID})
    .execute('read').sync().on('dogs')

exports.create = (requester, data) => 
  ac.can(requester.role)
    .context({ requester:requester.ID, owner:data.ID})
    .execute('create').sync().on('dogs')

exports.update = (requester, data) => 
  ac.can(requester.role)
    .context({requester:requester.ID, owner:data.ID})
    .execute('update').sync().on('dogs');


exports.delete = (requester, data) => 
  ac.can(requester.role)
    .context({requester:requester.ID, owner:data.ID})
    .execute('delete').sync().on('dogs');
