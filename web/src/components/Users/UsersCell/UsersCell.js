import Users from 'src/components/Users/Users'

export const QUERY = gql`
  query FindUsersById($id: Int!) {
    users: users(id: $id) {
      id
      user_name
      user_password
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Users not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ users }) => {
  return <Users users={users} />
}
