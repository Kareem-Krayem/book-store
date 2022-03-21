import React from 'react';
import './LoginPage.scss';

import Cover from '../../../assets/images/cover.jpg';

import LoginForm from '../../../components/LoginForm/LoginForm';

function LoginPage() {
  return (
    <div class='cover'>
      <div class='book'>
        <label for='page-1' class='book__page book__page--1'>
          <img src={Cover} alt='Cover Page' />
        </label>

        <label for='page-2' class='book__page book__page--4'>
          <div class='page__content'>
            <h1 class='page__content-title'>Login or Sign Up</h1>
            <div class='page__content-blockquote'>
              <LoginForm />
            </div>
            <div class='page__number'>3</div>
          </div>
        </label>

        {/* Resets the page */}
        <input type='radio' name='page' id='page-1' />

        {/* Goes to the second page */}
        <input type='radio' name='page' id='page-2' />
        <label class='book__page book__page--2'>
          <div class='book__page-front'>
            <div class='page__content'>
              <h1 class='page__content-book-title'>Book Store</h1>
              <h2 class='page__content-author'>Here for a purpose</h2>

              <p class='page__content-credits'>
                Idea by
                <span>Mohamad Ahmad</span>
              </p>

              <p class='page__content-credits'>
                Designed by
                <span>Karim Krayem</span>
              </p>

              <div class='page__content-copyright'>
                <p>The Book Store</p>
                <p>
                  <b>
                    <i>Click to flip the page</i>
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div class='book__page-back'>
            <div class='page__content'>
              <h1 class='page__content-title'>Contents</h1>
              <table class='page__content-table'>
                <tr>
                  <td align='left'>Part I</td>
                  <td align='left'>Login or Sign Up</td>
                  <td align='right'>3</td>
                </tr>
                <tr>
                  <td align='left'>Part II</td>
                  <td align='left'>Choose a category</td>
                  <td align='right'>43</td>
                </tr>
                <tr>
                  <td align='left'>Part III</td>
                  <td align='left'>Search for your book</td>
                  <td align='right'>87</td>
                </tr>
                <tr>
                  <td align='left'>Part IV</td>
                  <td align='left'>Choose a book</td>
                  <td align='right'>147</td>
                </tr>
                <tr>
                  <td align='left'>Part V</td>
                  <td align='left'>Read...</td>
                  <td align='right'>173</td>
                </tr>
              </table>

              <div class='page__number'>2</div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default LoginPage;
