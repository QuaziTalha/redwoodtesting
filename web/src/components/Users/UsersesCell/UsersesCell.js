import { Link, routes } from '@redwoodjs/router'

import Userses from 'src/components/Users/Userses'

export const QUERY = gql`
  query FindUserses {
    userses {
      id
      user_name
      user_password
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userses yet. '}
      <Link to={routes.newUsers()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userses }) => {
  return <Userses userses={userses} />
}
