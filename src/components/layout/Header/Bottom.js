import React, { useState, useEffect } from 'react';

/** Material ui */
import { Box, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/** Navigation */
import { Link, useLocation } from 'react-router-dom';

/** Components */
import Icon from '../../Icon';
import Categories from '../../Categories';

/** Tab component */
const Tab = ({
  position,
  width,
  height,
  label,
  labelWidth,
  labelFont,
  marginLeft,
  labelTextTransform,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: marginLeft || '20px',
        cursor: 'pointer',
      }}
    >
      <Icon position={position} width={width} height={height} />
      <span
        style={{
          width: labelWidth,
          textTransform: labelTextTransform || 'none',
          color: 'white',
          marginLeft: 10,
          fontSize: labelFont || 14,
        }}
      >
        {label}
      </span>
    </div>
  );
};

/** Style component */
const useStyles = makeStyles({
  box: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  img: {
    width: 58,
    height: 28,
  },
  span: {
    color: 'white',
    marginLeft: 10,
    fontSize: 14,
    width: 70,
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',

    textDecoration: 'none',
  },
  dialog: {
    width: '100vw',
    marginTop: 100,
    '& .MuiDialog-scrollPaper': {
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
  },
  paper: {
    backgroundColor: 'transparent',
  },
});

const BottomHeader = () => {
  /** Style component*/
  const classes = useStyles();

  /** Hooks */
  const [openDialog, setOpenDialog] = useState(false);
  const [popperOpen, setPopperOpen] = useState(false);
  const { pathname, search } = useLocation();
  const [currentLocation, setCurrentLocation] = useState(pathname + search);

  /** Function */
  function handleOpenDialog() {
    setOpenDialog(true);
  }

  useEffect(() => {
    if (currentLocation !== pathname + search) {
      setCurrentLocation(pathname + search);
      setOpenDialog(false);
    }
  }, [currentLocation, pathname, search]);

  return (
    <Box className={classes.box}>
      <Box onClick={() => handleOpenDialog()}>
        <Tab
          position="-119px -126px"
          width="20px"
          height="16px"
          label="Danh mục sản phẩm"
          labelFont="14px"
          labelWidth="155px"
          labelTextTransform="uppercase"
          marginLeft="0"
        />
      </Box>
      <Tab
        position="-174px -288px"
        width="24px"
        height="24px"
        label="Bạn muốn giao hàng tới đâu?"
        labelWidth="155px"
      />
      <Tab
        position="-392px -208px"
        width="12px"
        height="6px"
        label="Sản phẩm bạn đã xem"
        labelFont="15px"
        labelWidth="70px"
      />
      <Link to="/chuong-trinh/mo-the-tikicard" className={classes.link}>
        <img
          src="https://frontend.tikicdn.com/_desktop-next/static/img/tiki-card.svg"
          alt="Hoàn tiền 15%"
          className={classes.img}
        />
        <span className={classes.span}>Hoàn tiền 15%</span>
      </Link>
      <Tab
        position="0px -147px"
        width="58px"
        height="28px"
        label="Giao nhanh 2h & hôm sau"
        labelWidth="80px"
      />
      <Link to="/thuc-pham-tuoi-song" className={classes.link}>
        <img
          src="https://salt.tikicdn.com/ts/upload/c1/cc/d0/6dc657167181c1b6b93c8da654dddac3.png"
          alt="Thực phẩm tươi sống"
          className={classes.img}
        />
        <span className={classes.span}>Thực phẩm tươi sống</span>
      </Link>
      <Tab
        position="-33px -221px"
        width="28px"
        height="29px"
        label="Sản phẩm chính hiệu"
        labelWidth="80px"
      />
      <Tab
        position="-271px -198px"
        width="28px"
        height="28px"
        label="30 ngày đổi trả"
        labelWidth="60px"
      />

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        className={classes.dialog}
        classes={{ paper: classes.paper }}
      >
        <Box style={{ width: 1340, height: 524 }}>
          <Categories
            popperOpen={popperOpen}
            setPopperOpen={setPopperOpen}
            type="header"
          />
        </Box>
      </Dialog>
    </Box>
  );
};

/** Export */
export default BottomHeader;
