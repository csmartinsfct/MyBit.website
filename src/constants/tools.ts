import go from '@images/icon/go.svg'
import mydax from '@images/icon/mydax.svg'
import task from '@images/icon/task.svg'
import sdk from '@images/icon/sdk.svg'
import ui from '@images/icon/ui.svg'
import transparency from '@images/icon/transparency.svg'
import voting from '@images/icon/vote.svg'
import community from '@images/icon/community.svg'
import apps from '@images/icon/apps.svg'
import trust from '@images/icon/trust.svg'
import will from '@images/icon/will.svg'
import dropzone from '@images/icon/dropzone.svg'
import kyber from '@images/icon/kyber.svg'
import support from '@images/icon/support.svg'
import { ToolProps } from '@components/Tool';

export enum Filter {
  FINANCIAL = 0,
  WORKFLOW = 1,
  DAOS = 2,
  OTHER = 3
}

export enum Category {
  CORE = 0,
  TOOLS = 1,
  DAPPS = 2
}

export const filterNames = new Map<Filter, string>([[Filter.FINANCIAL, 'Financial'], [Filter.WORKFLOW, 'Workflow'], [Filter.DAOS, 'Governance/DAOS'], [Filter.OTHER, 'Other']])

export const categoryNames = new Map<Category, string>([[Category.DAPPS, 'Community Dapps'], [Category.CORE, 'Core Products'], [Category.TOOLS, 'Tools']])

export const tools: Array<ToolProps> = [
  {
    title: 'MyBit Go',
    category: Category.CORE,
    filter: Filter.FINANCIAL,
    text:
      'Invest in the machine economy through a decentralised IoT investment platform',
    link: 'https://app.mybit.io/',
    icon: go
  },
  {
    title: 'MYDAX',
    category: Category.CORE,
    filter: Filter.FINANCIAL,
    text: 'decentralised exchange optimised for simplicity and ease of use',
    link: 'https://mydax.io',
    icon: mydax
  },
  {
    title: 'Task.Market',
    category: Category.CORE,
    filter: Filter.WORKFLOW,
    text:
      'decentralised workflow and collaboration tool built on Bounties Network',
    link: 'https://task.market/',
    icon: task
  },
  {
    title: 'SDK',
    category: Category.TOOLS,
    filter: Filter.FINANCIAL,
    text: 'Easily develop DApps on top of the MyBit Network. ',
    link: 'https://developer.mybit.io/portal/mybit-sdk/',
    icon: sdk
  },
  {
    title: 'UI Kit',
    category: Category.TOOLS,
    filter: Filter.OTHER,
    text: 'Make your MyBit DApps beautiful with our standard design kit.',
    link: 'https://ui.mybit.io/',
    icon: ui
  },
  {
    title: 'Transparency Portal',
    category: Category.TOOLS,
    filter: Filter.WORKFLOW,
    text: 'View what the MyBit team is working on in real-time',
    link: 'https://transparency.mybit.io/',
    icon: transparency
  },
  {
    title: 'Kyber/Bancor Token Usability',
    category: Category.TOOLS,
    filter: Filter.FINANCIAL,
    text: 'Easily buy, use and exchange the MyBit token (MYB)',
    link: 'https://github.com/MyBitFoundation/MyBit-Trust.tech/pull/33',
    icon: kyber
  },
  {
    title: 'Decentralised Customer Support',
    category: Category.TOOLS,
    filter: Filter.OTHER,
    text: 'Issues and queries resolved by qualified members of the community.',
    link: '',
    icon: support,
  },
  {
    title: 'MyBit DAO (testnet)',
    category: Category.TOOLS,
    filter: Filter.DAOS,
    text: 'Propose and Vote on decisions for the MyBit Ecosystem',
    link: 'https://rinkeby.aragon.org/#/0x13ab94f2cb92A395D8dD73638c74d27Ae397868B/',
    icon: voting
  },
  {
    title: 'Community Rankings',
    category: Category.TOOLS,
    filter: Filter.DAOS,
    text: "Help contribute to MyBit's growth and get recognised",
    link: '',
    icon: community
  },
  {
    title: 'Multi-Signature Wallet Configuration',
    category: Category.TOOLS, 
    filter: Filter.OTHER,
    text: 'Our easy-to-use standard approach to securing funds',
    link: '',
    icon: apps
  },
  {
    title: 'Trust',
    category: Category.DAPPS,
    filter: Filter.FINANCIAL,
    text:
      'MyBit Trust allows you to set up a frictionless cryptocurrency trust without the need for a middleman. There are no expensive set up costs, only a one time set-up of 250 MYB which is burnt.',
    link: 'https://trust.mybit.io/',
    icon: trust
  },
  {
    title: 'Will',
    category: Category.DAPPS,
    filter: Filter.FINANCIAL,
    text:
      'MyBit Will allows anyone to create a frictionless will and automatically deliver cryptoassets via smart contract in the event of an unforeseen event such as death.',
    link: 'https://will.mybit.io/',
    icon: will
  },
  {
    title: 'Dropzone',
    category: Category.DAPPS,
    filter: Filter.OTHER,
    text:
      'Dropzone allows anyone to easily airdrop ERC20 compliant tokens to multiple Ethereum addresses in a single go.',
    link: 'https://dropzone.mybit.io/',
    icon: dropzone
  },
  {
    title: 'Android Wallet',
    category: Category.DAPPS,
    filter: Filter.OTHER,
    text:
      'MyBit Mobile Wallet for Android lets anyone to safely store and send MyBit tokens (MYB) and Ethereum (ETH) tokens on their Android devices.',
    link: 'https://play.google.com/store/apps/details?id=io.mybit.app',
    icon: apps
  },
  {
    title: 'iOS Wallet',
    category: Category.DAPPS,
    filter: Filter.OTHER,
    text:
      'MyBit Mobile Wallet for iOS lets anyone to safely store and send MyBit tokens (MYB) and Ethereum (ETH) tokens on their iOS devices.',
    link: 'https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1439307856&mt=8s',
    icon: apps
  }
]