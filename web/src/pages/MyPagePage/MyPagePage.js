import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import UsersesCell from 'src/components/Users/UsersesCell'

const MyPagePage = () => {
  return (
    <>
      <MetaTags title="MyPage" description="MyPage page" />

    <><UsersesCell /></>
    </>
  )
}

export default MyPagePage
