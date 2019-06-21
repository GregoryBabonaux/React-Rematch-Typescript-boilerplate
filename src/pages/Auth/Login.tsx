import React from 'react';
import { Formik, FormikActions, FormikProps, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from 'antd';
import { withTranslation } from "react-i18next";
import i18n from 'i18next';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('formValidation.Email'))
    .required(i18n.t('formValidation.Required')),
  password: Yup.string()
    .required(i18n.t('formValidation.Required'))
})

interface MyFormValues {
  email: string;
  password: string,
}

type Props = {
  t: i18n.TFunction
}

class Login extends React.PureComponent<Props> {
  render() {
    const { t } = this.props;

    return (
      <div style={{ width: '450px', margin: 'auto' }}>
        <h1>{t('loginPage.Title')}</h1>
        <Formik
          initialValues={{ email: '', password: '', }}
          onSubmit={(values: MyFormValues, actions: FormikActions<MyFormValues>) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false)
          }}
          validationSchema={loginValidationSchema}
          render={(formikBag: FormikProps<MyFormValues>) => (
            <Form>
              <Field
                name="email"
                render={({ field, form }: FieldProps<MyFormValues>) => (
                  <div>
                    <Input type="text" {...field} placeholder="E-Mail" />
                    <div style={{ color: 'red'}}>
                      {form.touched.email &&
                        form.errors.email &&
                        form.errors.email}
                      </div>
                  </div>
                )}
              />
              <Field
                name="password"
                render={({ field, form }: FieldProps<MyFormValues>) => (
                  <div>
                    <Input type="text" {...field} placeholder="Mot de passe" />
                    <div style={{ color: 'red'}}>
                      {form.touched.password &&
                        form.errors.password &&
                        form.errors.password}
                    </div>
                  </div>
                )}
              />
              <Button type="primary" htmlType="submit">{t('loginPage.Connect')}</Button>
            </Form>
          )}
        />
      </div>
    )
  }
}
// @ts-ignore
export default withTranslation()(Login);