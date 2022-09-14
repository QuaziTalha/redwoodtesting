import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UsersForm from 'src/components/Users/UsersForm'

export const QUERY = gql`
  query EditUsersById($id: Int!) {
    users: users(id: $id) {
      id
      user_name
      user_password
    }
  }
`
const UPDATE_USERS_MUTATION = gql`
  mutation UpdateUsersMutation($id: Int!, $input: UpdateUsersInput!) {
    updateUsers(id: $id, input: $input) {
      id
      user_name
      user_password
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ users }) => {
  const [updateUsers, { loading, error }] = useMutation(UPDATE_USERS_MUTATION, {
    onCompleted: () => {
      toast.success('Users updated')
      navigate(routes.userses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateUsers({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Users {users.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UsersForm
          users={users}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
