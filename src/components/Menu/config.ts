import { MenuEntry } from '@pancakeswap-libs/uikit'

// const config: MenuEntry[] = [
const config: (t) => MenuEntry[] = (t) => [
  // {
  //   label: 'Home',
  //   icon: 'HomeIcon',
  //   // href: 'https://home.babyswap.$$/',
  //   href: 'https://btswap-finance.net',
  // },
  // {
  //   label: 'ILO',
  //   icon: 'IloIcon',
  //   href: 'https://home.babyswap.finance/ilo',
  //   timeStamp: process.env.REACT_APP_TIMESTAMP || '1622642400',
  //   fixedTime: {
  //     timeStamp: "1622556000",
  //     text: "24:00:00"
  //   }
  // },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   // href: 'https://home.babyswap.$$/farms',
  //   href: 'https://btswap-finance.net/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: 'https://btswap-finance.net/pools',
  // },
  // {
  //   label: 'NFB',
  //   icon: 'NftIcon',
  //   href: 'https://btswap-finance.net/nfb',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'http://babyswap.finance/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'http://babyswap.finance/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'http://babyswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'http://babyswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'http://babyswap.finance/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Growth Fund',
  //   icon: 'Bottles',
  //   href: 'https://btswap-finance.net/bottles',
  // },
  // {
  //   label: 'IDO',
  //   icon: 'IdoIcon',
  //   href: 'https://btswap-finance.net/ido',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   href: '#',
  // items: [
  //   {
  //     label: 'Overview',
  //     href: 'https://babyswap.info',
  //   },
  //   {
  //     label: 'Tokens',
  //     href: 'https://babyswap.info/tokens',
  //   },
  //   {
  //     label: 'Pairs',
  //     href: 'https://babyswap.info/pairs',
  //   },
  //   {
  //     label: 'Accounts',
  //     href: 'https://babyswap.info/accounts',
  //   },
  // ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'http://babyswap.finance/ifo',
  // },
  // {
  //   label: "Audit",
  //   icon: "AutitIcon",
  //   href: "#",
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     // {
  //     //   label: 'Voting',
  //     //   href: 'https://voting.pancakeswap.finance',
  //     // },
  //     {
  //       label: 'Github',
  //       href: '#',
  //     },
  //     {
  //       label: 'Docs',
  //       href: '#',
  //     },
  //     {
  //       label: 'Blog',
  //       href: '#',
  //     },
  //   ],
  // },
]

export default config
