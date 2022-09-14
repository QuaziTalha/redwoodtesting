export const schema = gql`
  type Users {
    id: Int!
    user_name: String!
    user_password: String
  }

  type Query {
    userses: [Users!]! @requireAuth
    users(id: Int!): Users @requireAuth
  }

  input CreateUsersInput {
    user_name: String!
    user_password: String
  }

  input UpdateUsersInput {
    user_name: String
    user_password: String
  }

  type Mutation {
    createUsers(input: CreateUsersInput!): Users! @requireAuth
    updateUsers(id: Int!, input: UpdateUsersInput!): Users! @requireAuth
    deleteUsers(id: Int!): Users! @requireAuth
  }
`
