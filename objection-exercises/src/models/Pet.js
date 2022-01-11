const BaseModel = require('./BaseModel')

const { BelongsToOneRelation } = require('objection')

class Pet extends BaseModel {
  static get tableName() {
    return 'pets'
  }

  static get virtualAttributes() {
    return ['isDog', 'animalType']
  }

  get isDog() {
      return this.type === 'DOG';
  }

  get animalType() {
      if (this.type === 'DOG' || this.type === 'CAT')
      {
          return 'MAMMAL';
      }
      else if (this.type === 'FISH')
      {
          return 'FISH';
      }
      else if (this.type === 'ALLIGATOR')
      {
          return 'REPTILE';
      }
      return 'BIRD';
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      users: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'pets.userId',
          to: 'user.id',
        }
      }
    }
  }
}

module.exports = Pet

