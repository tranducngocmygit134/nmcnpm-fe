import PersonIcon from '@material-ui/icons/Person';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import StarHalfRoundedIcon from '@material-ui/icons/StarHalfRounded';
import LiveHelpRoundedIcon from '@material-ui/icons/LiveHelpRounded';

const sidebar = [
  { icon: PersonIcon, label: 'Thông tin tài khoản' },
  { icon: NotificationsRoundedIcon, label: 'Thông báo của tôi' },
  {
    icon: MenuBookRoundedIcon,
    label: 'Quản lý đơn hàng',
    link: '/payment/admin',
  },
  { icon: LocationOnRoundedIcon, label: 'Sổ địa chỉ' },
  { icon: PaymentRoundedIcon, label: 'Thông tin thanh toán' },
  { icon: BorderColorRoundedIcon, label: 'Nhận xét sản phẩm đã mua' },
  { icon: VisibilityRoundedIcon, label: 'Sản phẩm bạn đã xem' },
  { icon: FavoriteRoundedIcon, label: 'Sản phẩm yêu thích' },
  { icon: ShoppingCartRoundedIcon, label: 'Sản phẩm mua sau' },
  { icon: StarHalfRoundedIcon, label: 'Nhận xét của tôi' },
  { icon: LiveHelpRoundedIcon, label: 'Hỏi đáp' },
];

export { sidebar };
