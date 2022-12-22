import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ResetPasswordForm from '../components/ResetPasswordForm';
import Nav from '../../../components/Nav';
import RootPage from '../../../components/RootPage';

function ResetPasswordView() {
  const { t } = useTranslation();
  const resetPasswordInitiate = useSelector(
    (state) => state.user.resetPasswordInitiate
  );
  const resetPasswordClass = classNames({
    'reset-password': true,
    'reset-password--submitted': resetPasswordInitiate,
    'form-container': true,
    user: true
  });
  return (
    <RootPage>
      <Nav layout="dashboard" />
      <div className={resetPasswordClass}>
        <Helmet>
          <title>{t('ResetPasswordView.Title')}</title>
        </Helmet>
      </div>
    </RootPage>
  );
}

export default ResetPasswordView;
