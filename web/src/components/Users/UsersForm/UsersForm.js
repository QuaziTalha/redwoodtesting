import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const UsersForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.users?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="user_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User name
        </Label>

        <TextField
          name="user_name"
          defaultValue={props.users?.user_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="user_name" className="rw-field-error" />

        <Label
          name="user_password"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User password
        </Label>

        <TextField
          name="user_password"
          defaultValue={props.users?.user_password}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="user_password" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UsersForm
