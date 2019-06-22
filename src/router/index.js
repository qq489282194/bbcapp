import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HomeIndex from '@/components/Home/Index'
import HomePersonal from '@/components/Home/Personal'
import Cmi from '@/components/Cmi/Cmi'
import CmiIndex from '@/components/Cmi/Index'
import CmiInvite from '@/components/Cmi/Invite'
import CmiMission from '@/components/Cmi/Mission'
import CmiRule from '@/components/Cmi/Rule'
import CmiDetail from '@/components/Cmi/Detail'
import CmiTicket from '@/components/Cmi/Ticket'
import CmiTicketDetail from '@/components/Cmi/TicketDetail'
import CmiGive from '@/components/Cmi/Give'
import CmiGiveSuccess from '@/components/Cmi/GiveSuccess'
import CmiGiveDetail from '@/components/Cmi/GiveDetail'
import CmiWallet from '@/components/Cmi/Wallet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/bbc-personal',
  routes: [
    {
      path: '/',
      name: 'admin',
      component:Index,
      redirect: '/personal',
      children:[
        // {path: 'home', name: 'home', component:HomeIndex,},
        {path: 'personal', name: 'personal', component:HomePersonal,},
        {path: 'cmi', name: 'cmi', component:Cmi,children:[
          {path: 'index', name: 'cmi-index', component:CmiIndex,},
          {path: 'invite', name: 'cmi-invite', component:CmiInvite,},
          {path: 'mission', name: 'cmi-mission', component:CmiMission,},
          {path: 'rule', name: 'cmi-rule', component:CmiRule,},
          {path: 'detail', name: 'cmi-detail', component:CmiDetail,},
          {path: 'ticket', name: 'cmi-ticket', component:CmiTicket,},
          {path: 'ticketDetail', name: 'cmi-ticket-detail', component:CmiTicketDetail,},
          {path: 'give', name: 'cmi-give', component:CmiGive,},
          {path: 'giveSuccess', name: 'cmi-give-success', component:CmiGiveSuccess,},
          {path: 'giveDetail', name: 'cmi-give-detail', component:CmiGiveDetail,},
          {path: 'wallet', name: 'cmi-wallet', component:CmiWallet,},
        ]}
      ]
    }
  ]
})
