import { db } from 'src/lib/db'

export const userses = () => {
  return db.users.findMany()
}

export const users = ({ id }) => {
  return db.users.findUnique({
    where: { id },
  })
}

export const createUsers = ({ input }) => {
  return db.users.create({
    data: input,
  })
}

export const updateUsers = ({ id, input }) => {
  return db.users.update({
    data: input,
    where: { id },
  })
}

export const deleteUsers = ({ id }) => {
  return db.users.delete({
    where: { id },
  })
}
