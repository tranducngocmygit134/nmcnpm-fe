import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 10px',
  },
});

const Icons = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainContainer}>
        <img
          src="https://salt.tikicdn.com/ts/upload/0d/cd/4a/5fa5d04a4057511aede542e6022e4364.png"
          alt="Tiki chọn"
          style={{ width: 50 }}
        />
        <span
          title="Tiki chọn"
          style={{ marginTop: 5, width: 90, color: '#757575' }}
        >
          Tiki chọn
        </span>
      </div>
      <div className={classes.mainContainer}>
        <img
          src="https://salt.tikicdn.com/ts/upload/30/83/69/6dd5c88f320ebdf17893f6cbe589f769.png"
          alt="Thương hiệu nổi bật"
          style={{ width: 50 }}
        />
        <span
          title="Thương hiệu nổi bật"
          style={{ marginTop: 5, width: 90, color: '#757575' }}
        >
          Thương hiệu nổi bật
        </span>
      </div>
      <div className={classes.mainContainer}>
        <img
          src="https://salt.tikicdn.com/ts/upload/7c/47/86/ae1b6da632478babe1d245c1dd8bcafb.png"
          alt="100% freeship"
          style={{ width: 50 }}
        />
        <span
          title="100% freeship"
          style={{ marginTop: 5, width: 100, color: '#757575' }}
        >
          100% freeship
        </span>
      </div>
      <div className={classes.mainContainer}>
        <img
          src="https://salt.tikicdn.com/ts/upload/49/06/be/0910fc1f80aaaabf6bd328c3eb8869d1.png"
          alt="Hàng mới giá sốc"
          style={{ width: 50 }}
        />
        <span
          title="Hàng mới giá sốc"
          style={{ marginTop: 5, width: 90, color: '#757575' }}
        >
          Hàng mới giá sốc
        </span>
      </div>
      <div className={classes.mainContainer}>
        <img
          src="https://salt.tikicdn.com/ts/upload/d8/d1/f8/28a4e26a2c7de7114cb702346a288896.png"
          alt="Deal hot ngành hàng"
          style={{ width: 50 }}
        />
        <span
          title="Deal hot ngành hàng"
          style={{
            marginTop: 5,
            width: 100,
            textAlign: 'center',
            color: '#757575',
          }}
        >
          Deal hot ngành hàng
        </span>
      </div>
    </>
  );
};

/** Export */
export default Icons;
