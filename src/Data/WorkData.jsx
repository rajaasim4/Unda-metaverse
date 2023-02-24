import { BiStoreAlt, FaWallet, HiCollection, HiPhoto } from "react-icons/all";
const WorkData = [
  {
    id: 1,
    heading: "Set Up Your Wallet",
    background: "linear-gradient(207.67deg, #23D3A4 3.43%, #5B49CF 104.7%)",
    icon: <BiStoreAlt />,
    details:
      "Once you’ve set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein the top right corner.",
  },
  {
    id: 2,
    heading: "Create your Collection",
    background: "linear-gradient(63.88deg, #739EEC 29.38%, #FF8C9F 86.63%)",
    icon: <FaWallet />,
    details:
      "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
  },
  {
    id: 3,
    heading: "Add your NFTs",
    background: "linear-gradient(66.27deg, #FE6F2D -10.45%, #FDCE38 76.78%)",
    icon: <HiCollection />,
    details:
      "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats",
  },
  {
    id: 4,
    heading: "List them for Sale",
    background: "linear-gradient(133.48deg, #2EA3F2 -3.48%, #A651FB 130.9%)",
    icon: <HiPhoto />,
    details:
      "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
  },
];
export default WorkData;
