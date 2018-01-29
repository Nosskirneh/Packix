
import {
  Package,
  UserIdentity
} from '../index';


export class User {
  "realm";
  "username";
  "email";
  "emailVerified";
  "id";
  "password";
  accessTokens;
  devices;
  packages;
  purchases;
  profile;
  identities;
  credentials;
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `User`.
   */
  static getModelName() {
    return "User";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of User for dynamic purposes.
  **/
  static factory(data) {
    return new User(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  static getModelDefinition() {
    return {
      name: 'User',
      plural: 'Users',
      path: 'Users',
      properties: {
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        devices: {
          name: 'devices',
          type: 'any[]',
          model: ''
        },
        packages: {
          name: 'packages',
          type: 'Package[]',
          model: 'Package'
        },
        purchases: {
          name: 'purchases',
          type: 'any[]',
          model: ''
        },
        profile: {
          name: 'profile',
          type: 'UserIdentity',
          model: 'UserIdentity'
        },
        identities: {
          name: 'identities',
          type: 'UserIdentity[]',
          model: 'UserIdentity'
        },
        credentials: {
          name: 'credentials',
          type: 'any[]',
          model: ''
        },
      }
    }
  }
}