import { AiOutlineHome, AiOutlineStock, AiOutlineHistory, AiOutlineWallet, AiOutlinePhone, AiOutlineBarChart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export const sidebarData = [
    {
      "id": 1,
      "name": "DASHBOARD",
      "tag": AiOutlineHome,
      "address":"dashboard"
    },
    {
      "id": 2,
      "name": "ADMIN CREATION",
      "tag": AiOutlineStock,
      "address":"admincreation"
    },
    {
      "id": 3,
      "name": "KEY MANAGEMENT",
      "tag": AiOutlineBarChart,
      "address":"keymanagement"
    },
    {
      "id": 4,
      "name": "CLIENT MANAGEMENT",
      "tag": AiOutlineHistory,
      "address":"clientmanagement"
    },
    {
      "id": 5,
      "name": "INVESTOR MANAGEMENT",
      "tag": AiOutlineWallet,
      "address":"investormanagement"
    },
    {
      "id": 6,
      "name": "THIRD PARTY MANAGEMENT",
      "tag": CgProfile,
      "address":"thirdpartymanagement"
    }
  ]