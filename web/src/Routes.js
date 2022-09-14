// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import UsersesLayout from 'src/layouts/UsersesLayout';
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={UsersesLayout}>
        <Route path="/userses/new" page={UsersNewUsersPage} name="newUsers" />
        <Route path="/userses/{id:Int}/edit" page={UsersEditUsersPage} name="editUsers" />
        <Route path="/userses/{id:Int}" page={UsersUsersPage} name="users" />
        <Route path="/userses" page={UsersUsersesPage} name="userses" />
      </Set>
      <Set wrap={BlogLayout}>
      <Route path="/" page={MyPagePage} name="myPage" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
