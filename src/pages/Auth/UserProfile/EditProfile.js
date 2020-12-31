import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { errorMessage, successMessage } from '../../../redux/actions/snack';

import authApi from '../../../apis/auth';
import { update } from '../../../redux/actions/auth';

import { Button, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  form: {
    '& > div': {
      marginBottom: 12,
    },
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    padding: '30px 20px',
    borderRadius: 5,
  },
});

function EditProfile({ user }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [gender, setGender] = useState(user.gender || 'female');
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [date_of_birth, setDateOfBirth] = useState(user.date_of_birth);

  const submit = async () => {
    try {
      const updateRes = await authApi.patch('/update', {
        gender,
        name,
        phone,
        email,
        date_of_birth,
      });
      const { user } = updateRes.data.data;
      dispatch(update(user));
      const message = updateRes.data.message;
      dispatch(successMessage(message));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(errorMessage(message));
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <div>
          <label
            style={{ width: 150, display: 'inline-block' }}
            htmlFor="Họ tên"
          >
            Họ tên
          </label>
          <input
            type="text"
            id="Họ tên"
            style={{
              height: 30,
              width: 450,
              borderRadius: 5,
              outlined: 'none',
              border: '1px solid #bdbdbd',
              padding: '5px 15px',
            }}
            placeholder={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label
            style={{ width: 150, display: 'inline-block' }}
            htmlFor="Số điện thoại"
          >
            Số điện thoại
          </label>
          <input
            type="tel"
            id="Số điện thoại"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            style={{
              height: 30,
              width: 450,
              borderRadius: 5,
              outlined: 'none',
              border: '1px solid #bdbdbd',
              padding: '5px 15px',
            }}
            placeholder={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label
            style={{ width: 150, display: 'inline-block' }}
            htmlFor="Email"
          >
            Email
          </label>
          <input
            type="email"
            id="Email"
            style={{
              height: 30,
              width: 450,
              borderRadius: 5,
              outlined: 'none',
              border: '1px solid #bdbdbd',
              padding: '5px 15px',
            }}
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            style={{ width: 150, display: 'inline-block' }}
            htmlFor="Ngày sinh"
          >
            Ngày sinh
          </label>
          <input
            type="date"
            id="Ngày sinh"
            style={{
              height: 30,
              width: 450,
              borderRadius: 5,
              outlined: 'none',
              border: '1px solid #bdbdbd',
              padding: '5px 15px',
            }}
            placeholder={date_of_birth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label style={{ width: 150, display: 'inline-block' }}>
            Giới tính
          </label>
          <RadioGroup
            aria-label="Giới tính"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={{
              flexDirection: 'row',
              display: 'inline-block',
            }}
          >
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Female"
              style={{ width: 100 }}
            />
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              label="Male"
              style={{ width: 100 }}
            />
            <FormControlLabel
              value="other"
              control={<Radio color="primary" />}
              label="Other"
              style={{ width: 100 }}
            />
          </RadioGroup>
        </div>
        <Button
          color="primary"
          variant="outlined"
          style={{ marginLeft: 150, display: 'inline-block' }}
          component={Link}
          to="/users/update-password"
        >
          Đổi mật khẩu
        </Button>
        <Button
          color="primary"
          variant="outlined"
          style={{ marginLeft: 50, display: 'inline-block' }}
          onClick={submit}
        >
          Cập nhật
        </Button>
      </form>
    </div>
  );
}

export default EditProfile;
