import Router from 'cerebral-module-router';

const router = Router({
   '/': 'page.home',
   '/bitindex/:id': 'page.bitx',
   '/admin': {
     '/': 'admin.home',
     '/currencies' : 'admin.adminCurrs',
     '/currencies/new' : 'admin.adminCurrsNew',
     '/currencies/edit/:id' : 'admin.adminCurrsEdit',
     '/tradepairs' : 'admin.adminPairs',
     '/tradepairs/new' : 'admin.adminPairsNew',
     '/tradepairs/edit/:id' : 'admin.adminPairsEdit',
     '/currtypes' : 'admin.adminCurrTypes',
     '/currtypes/new' : 'admin.adminCurrTypesNew',
     '/currtypes/edit/:id' : 'admin.adminCurrTypesEdit',
     '/pairtypes' : 'admin.adminPairTypes',
     '/pairtypes/new' : 'admin.adminPairTypesNew',
     '/pairtypes/edit/:id' : 'admin.adminPairTypesEdit',
     '/pairgroups' : 'admin.adminPairGroups',
     '/pairgroups/new' : 'admin.adminPairGroupsNew',
     '/pairgroups/edit/:id' : 'admin.adminPairGroupsEdit'
   },
   '/u': {
     '/wallets': 'u.wallets',
     '/wallet/:id': 'u.wallet',
     '/settings': 'u.settings',
     '/password': 'u.password',
     '/notifications': 'u.notifications'
   },
   '/pair/:id': 'pair.show',
   //'/mobile/:id':'mob.page'

});

export default router;
