import {
  userses,
  users,
  createUsers,
  updateUsers,
  deleteUsers,
} from './userses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userses', () => {
  scenario('returns all userses', async (scenario) => {
    const result = await userses()

    expect(result.length).toEqual(Object.keys(scenario.users).length)
  })

  scenario('returns a single users', async (scenario) => {
    const result = await users({ id: scenario.users.one.id })

    expect(result).toEqual(scenario.users.one)
  })

  scenario('creates a users', async () => {
    const result = await createUsers({
      input: { user_name: 'String' },
    })

    expect(result.user_name).toEqual('String')
  })

  scenario('updates a users', async (scenario) => {
    const original = await users({ id: scenario.users.one.id })
    const result = await updateUsers({
      id: original.id,
      input: { user_name: 'String2' },
    })

    expect(result.user_name).toEqual('String2')
  })

  scenario('deletes a users', async (scenario) => {
    const original = await deleteUsers({ id: scenario.users.one.id })
    const result = await users({ id: original.id })

    expect(result).toEqual(null)
  })
})
