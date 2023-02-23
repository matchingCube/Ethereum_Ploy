import { useState } from "react";
import {
  Button,
  Box,
  Stack,
  Typography,
  Hidden,
  Menu,
  MenuItem,
  Divider,
  Link
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import WalletModal from "./WalletModal";
import LogoutModal from "./LogoutModal";
import { ethers } from "ethers";
import PersonIcon from "@mui/icons-material/Person";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CheckIcon from "@mui/icons-material/Check";
import LogoutIcon from "@mui/icons-material/Logout";

// export function BusdBalance() {
//   const { account } = useEthers();
//   const busdBalanceBigNumber = useTokenBalance(BusdAddress, account);
//   const busdBalance =
//     busdBalanceBigNumber && ethers.utils.formatUnits(busdBalanceBigNumber, 18);
//   return busdBalance;
// }

export default function ConnectButton({ sx }) {
  const { account } = useWeb3React();
  console.log("account", account);
  const [openLogin, setOpenLogin] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const { login, logout } = useAuth();

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpenLogout = () => {
    setOpenLogout(true);
  };
  const handleCloseLogout = () => {
    setOpenLogout(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {account ? (
        <>
          <Button
            onClick={handleClick}
            // color="#959595"
            sx={{
              fontSize: 16,
              fontWeight: "light",
              minWidth: 144,
              color: "#959595",
              border: "1px solid #959595"
            }}
          >
            {`${account.slice(0, 4)}...${account.slice(-4)}`}
          </Button>
          <Menu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button"
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            sx={{ mt: 3 }}
          >
            <MenuItem
              component={Link}
              onClick={handleClose}
              sx={{ color: "#959595" }}
              href="/profile"
            >
              <PersonIcon sx={{ mr: 1 }} />
              View Profile
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              component={Link}
              onClick={handleClose}
              sx={{ color: "#959595" }}
              href="/create-profile"
            >
              <BorderColorIcon sx={{ mr: 1 }} />
              Edit Profile
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              component={Link}
              onClick={handleClose}
              sx={{ color: "#959595" }}
              href="/whitelist"
            >
              <CheckIcon sx={{ mr: 1 }} />
              Collection Whitelist
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleOpenLogout} sx={{ color: "#959595" }}>
              <LogoutIcon sx={{ mr: 1 }} />
              Disconnect Wallet
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          onClick={handleOpenLogin}
          // color="#959595"
          sx={{
            fontSize: 16,
            fontWeight: "light",
            minWidth: 144,
            color: "#959595",
            border: "1px solid #959595"
          }}
        >
          Connect Wallet
        </Button>
      )}

      <WalletModal login={login} open={openLogin} onClose={handleCloseLogin} />
      <LogoutModal
        logout={logout}
        open={openLogout}
        onClose={handleCloseLogout}
      />
    </>
  );
}
