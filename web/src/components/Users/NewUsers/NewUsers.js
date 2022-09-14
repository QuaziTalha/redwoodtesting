import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UsersForm from 'src/components/Users/UsersForm'

const CREATE_USERS_MUTATION = gql`
  mutation CreateUsersMutation($input: CreateUsersInput!) {
    createUsers(input: $input) {
      id
    }
  }
`

const NewUsers = () => {
  const [createUsers, { loading, error }] = useMutation(CREATE_USERS_MUTATION, {
    onCompleted: () => {
      toast.success('Users created')
      navigate(routes.userses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createUsers({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Users</h2>
      </header>
      <div className="rw-segment-main">
        <UsersForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUsers
