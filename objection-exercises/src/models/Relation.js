const BaseModel = require('./BaseModel')

const { ManyToManyRelation } = require('objection')

class Relation extends BaseModel {
  static get tableName() {
    return 'relations'
  }

  static get virtualAttributes() {
    return ['parentIdFormatted', 'childIdFormatted'];
  }

  get parentIdFormatted() {
    return `Parent ID: ${this.parentId}`;
  }

  get childIdFormatted() {
    return `Child ID: ${this.childId}`;
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      users: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId'
          },
          to: 'users.id',
        }
      }
    }
  }
}

module.exports = Relation


